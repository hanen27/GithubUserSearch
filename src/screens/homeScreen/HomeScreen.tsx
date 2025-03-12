import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, Switch, Text, TouchableOpacity, View } from 'react-native';
import { fetchGitHubUsers } from '../../api/githubService';
import Button from '../../components/button/Button';
import Checkbox from '../../components/checkBox/CheckBox';
import EmptyListComponent from '../../components/emptyListComponent/EmptyListComponent';
import Icon from '../../components/icon/Icon';
import SearchInput from '../../components/searchInput/SearchInput';
import UserItem from '../../components/userItem/UserItem';
import { TEXTS } from '../../constants/texts.constants';
import { ColorsType } from '../../types/common.types';
import { GitHubUser } from '../../types/gitHubUser.types';
import { normalizeSize } from '../../utils/normalize.util';
import { makeStyles } from './HomeScreen.style';

const HomeScreen: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedUsers, setSelectedUsers] = useState<Record<number, boolean>>({});
  const [editMode, setEditMode] = useState<boolean>(false);
  const [usersList, setUsersList] = useState<GitHubUser[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { t } = useTranslation();
  const { colors }: { colors: ColorsType } = useTheme();
  const styles = makeStyles(colors);
  const { data, isLoading, error, refetch } = useQuery<GitHubUser[], Error>({
    queryKey: ['githubUsers', searchValue] as const,
    queryFn: () => fetchGitHubUsers(searchValue),
    enabled: !!searchValue,
    retry: false,
  });

  useEffect(() => {
    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage('');
    }
  }, [error]);

  useEffect(() => {
    setUsersList(Array.isArray(data) ? data : []);
  }, [data]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearchValue(query);
    }, 500);
    return () => clearTimeout(delay);
  }, [query]);

  const toggleSelectAll = (): void => {
    if (Object.keys(selectedUsers).length === usersList.length) {
      setSelectedUsers({});
    } else {
      const newSelection: Record<number, boolean> = usersList.reduce((acc, user) => {
        acc[user.id] = true;
        return acc;
      }, {} as Record<number, boolean>);
      setSelectedUsers(newSelection);
    }
  };

  const toggleSelection = (id: number): void => {
    setSelectedUsers((prev) => {
      const newSelection = { ...prev };
      if (newSelection[id]) {
        delete newSelection[id];
      } else {
        newSelection[id] = true;
      }
      return newSelection;
    });
  };

  const handleDuplicate = (): void => {
    if (Object.keys(selectedUsers).length === 0) return;
    let newUsersList: GitHubUser[] = [];
    usersList.forEach((user) => {
      newUsersList.push(user);

      if (selectedUsers[user.id]) {
        const baseName = user.login.replace(/\(Copy \d+\)$/, '').trim();
        const existingCopies = usersList.filter(
          (u) => u.originalId === (user.originalId ?? user.id),
        ).length;

        newUsersList.push({
          ...user,
          id: Date.now() + Math.random(),
          originalId: user.originalId ?? user.id,
          login: `${baseName} (Copy ${existingCopies + 1})`,
        });
      }
    });

    setUsersList(newUsersList);
    setSelectedUsers({});
  };

  const handleDelete = (): void => {
    const selectedIds = Object.keys(selectedUsers).map(Number);
    setUsersList((prevUsers) => prevUsers.filter((user) => !selectedIds.includes(user.id)));
    setSelectedUsers({});
  };

  const renderEmptyList = () => <EmptyListComponent />;

  return (
    <View style={styles.container}>
      <SearchInput value={query} onChangeText={setQuery} testID="search-input" />
      {errorMessage && (
        <View style={styles.errorContainer} testID="errorMessage">
          <Text style={styles.error}>{'errorMessage'}</Text>
          <Button titleButton="Retry" onPress={() => refetch()} />
        </View>
      )}
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>{t(TEXTS.homeUserSearch.editMode)}</Text>
        <Switch
          testID="edit-mode-switch"
          value={editMode}
          onValueChange={() => {
            setEditMode(!editMode);
            setSelectedUsers({});
          }}
        />
      </View>
      {editMode && usersList.length > 0 && (
        <View style={styles.actions}>
          <Checkbox onToggle={toggleSelectAll} isChecked={Object.keys(selectedUsers).length > 0} />
          <Text style={styles.selectedText}>
            {`${Object.keys(selectedUsers).length} ${t(TEXTS.homeUserSearch.selectedElements)}`}
          </Text>
          <TouchableOpacity
            onPress={handleDuplicate}
            style={styles.actionButton}
            disabled={Object.keys(selectedUsers).length === 0}
            testID="duplicate-button"
          >
            <Icon name={'duplicate'} size={normalizeSize(20)} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
            disabled={Object.keys(selectedUsers).length === 0}
            testID="delete-button"
          >
            <Icon name={'delete'} size={normalizeSize(20)} />
          </TouchableOpacity>
        </View>
      )}
      {isLoading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator color={colors.blue} />
        </View>
      ) : (
        <FlatList
          testID="users-flatlist"
          data={usersList}
          contentContainerStyle={styles.containerFlatList}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={renderEmptyList}
          renderItem={({ item, index }) => (
            <UserItem
              user={item}
              isSelected={!!selectedUsers[item.id]}
              onToggleSelect={() => toggleSelection(item.id)}
              editMode={editMode}
              index={index}
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;
