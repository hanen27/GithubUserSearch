import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import React from 'react';

import { useTranslation } from 'react-i18next';
import CustomHeader from '../components/customHeader/CustomHeader';
import { LightModeColors } from '../constants/colors.constants';
import { TEXTS } from '../constants/texts.constants';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import { Routes } from '../types/routes.types';

const Stack = createStackNavigator();
const HomeScreenHeader = ({ route, options }: StackHeaderProps) => (
  <CustomHeader title={options.title || route.name} />
);

const AppNavigator = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer theme={LightModeColors}>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.HomeScreen}
          component={HomeScreen}
          options={{
            title: t(TEXTS.homeUserSearch.title),
            header: HomeScreenHeader,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
