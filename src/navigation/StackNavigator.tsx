import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '~src/screens/HomeScreen';

export type RootStackParamList = { HomeScreen: undefined };

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
