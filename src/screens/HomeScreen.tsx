import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeContext } from '~src/context/theme/theme';
import { globalStyles } from '~src/styles';

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  const { colors } = theme;

  return (
    <View style={{ ...globalStyles.mainWrapper, top: top + 20 }}>
      <Text style={{ ...styles.textTitle, color: colors.text }}>All gists</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 35,
  },
});
