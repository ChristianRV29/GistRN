import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import { RootStackParamList } from '~src/navigation/StackNavigator';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'GistDetailsScreen'> {}

export const GistDetailsScreen = ({ route }: Props) => {
  const { gistData } = route.params;

  console.log('Gist info: ', gistData.id);

  return (
    <View>
      <Text>Gist details screen</Text>
    </View>
  );
};
