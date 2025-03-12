import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ColorsType } from '../../types/common.types';
import { makeStyles } from './ButtonStyle';

interface ViewProfileButtonProps {
  onPress: () => void;
  titleButton: string;
}
const Button: React.FC<ViewProfileButtonProps> = ({ onPress, titleButton }) => {
  const { colors }: { colors: ColorsType } = useTheme();
  const buttonStyles = makeStyles(colors);
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.text}>{titleButton}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
