import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '~src/context/theme/theme';
import { globalStyles } from '~src/styles';

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ top: top + 20, ...globalStyles.mainWrapper }}>
      <Text style={{ color: theme.colors.text }}>Welcome to homescreen</Text>
    </View>
  );
};
