import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '~src/screens/HomeScreen';
import { ThemeContext } from '~src/context/theme/theme';
import { PublicGist } from '~src/@types';
import { GistDetailsScreen } from '~src/screens/GistDetailsScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  GistDetailsScreen: {
    gistData: PublicGist;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}>
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="GistDetailsScreen" component={GistDetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
