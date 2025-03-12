import { useTheme } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import { TEXTS } from '../../constants/texts.constants';
import { ColorsType } from '../../types/common.types';
import { makeStyles } from './SearchInput.styles';
interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  testID?: string;
}
const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText, placeholder, testID }) => {
  const { colors }: { colors: ColorsType } = useTheme();
  const searchInputStyles = makeStyles(colors);
  const { t } = useTranslation();
  return (
    <TextInput
      testID={testID}
      style={searchInputStyles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder || t(TEXTS.homeUserSearch.placeholder)}
      placeholderTextColor={colors.black}
    />
  );
};

export default React.memo(SearchInput);
