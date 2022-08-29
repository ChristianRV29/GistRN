import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '~src/navigation/StackNavigator';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'GistDetailsScreen'> {}

export const GistDetailsScreen = ({ route }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Text>{route.params.gistData.id}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  head: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageWrapper: {
    height: 30,
    width: 30,
  },
  body: {
    flex: 3,
  },
});
