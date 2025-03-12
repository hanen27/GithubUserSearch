import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ColorsType } from '../../types/common.types';
import Icon from '../icon/Icon';
import { makeStyles } from './Checkbox.styles';
interface CheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
  testID?: string;
}
const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onToggle, testID }) => {
  const { colors }: { colors: ColorsType } = useTheme();
  const checkboxStyles = makeStyles(colors);
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onToggle}
      style={[
        checkboxStyles.checkboxContainer,
        { backgroundColor: isChecked ? colors.blue : colors.gray },
      ]}
    >
      {isChecked && <Icon name={'check'} />}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);
