import { useTheme } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';
import { ColorsType } from '../../types/common.types';
import Button from '../button/Button';

import CheckBox from '../checkBox/CheckBox';
import { makeStyles } from './UserItem.styles';

interface UserItemProps {
  user: {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
  };
  isSelected: boolean;
  onToggleSelect: () => void;
  editMode: boolean;
  index?: number;
}

const UserItem: React.FC<UserItemProps> = ({
  user,
  isSelected,
  onToggleSelect,
  editMode,
  index,
}) => {
  const { colors }: { colors: ColorsType } = useTheme();
  const userItemStyles = makeStyles(colors);
  const { t } = useTranslation();

  return (
    <View style={userItemStyles.container} testID={`user-item-${index}`}>
      {editMode && (
        <CheckBox isChecked={isSelected} onToggle={onToggleSelect} testID={`checkbox-${index}`} />
      )}
      <View style={userItemStyles.contentContainer}>
        <Image source={{ uri: user.avatar_url }} style={userItemStyles.avatar} />
        <Text style={userItemStyles.username}>{user.id}</Text>
        <Text style={userItemStyles.username}>{user.login}</Text>
        <View style={userItemStyles.buttonView}>
          <Button onPress={() => {}} titleButton={t('homeUserSearch.viewProfile')} />
        </View>
      </View>
    </View>
  );
};

export default React.memo(UserItem);
