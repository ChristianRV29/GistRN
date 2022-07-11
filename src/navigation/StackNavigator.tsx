import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '~src/screens/HomeScreen';
import { ThemeContext } from '~src/context/theme/theme';

export type RootStackParamList = { HomeScreen: undefined };

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}>
        <Screen name="HomeScreen" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
