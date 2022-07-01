import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '~src/screens/HomeScreen';

export const StackNavigator = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
