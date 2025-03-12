import { useTheme } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { ColorsType } from '../../types/common.types';
import { makeStyles } from './CustomHeader.styles';
interface CustomHeaderProps {
  title: string;
  showBackButton?: boolean;
  showBackAction?: () => void;
}
const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton = false,
  showBackAction,
}) => {
  const { colors }: { colors: ColorsType } = useTheme();
  const customHeaderStyles = makeStyles(colors);
  return (
    <SafeAreaView style={customHeaderStyles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={showBackAction} style={customHeaderStyles.backButton}>
          <Text style={customHeaderStyles.backText}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={customHeaderStyles.title}>{title}</Text>
    </SafeAreaView>
  );
};

export default React.memo(CustomHeader);
