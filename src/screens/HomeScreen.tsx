import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '~src/context/theme/theme';
import { globalStyles } from '~src/styles';

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  const { colors } = theme;

  return (
    <View
      style={{
        ...globalStyles.mainWrapper,
        top: top + 20,
        ...styles.homeWrapper,
      }}>
      <Text style={{ ...styles.textTitle, color: colors.text }}>All gists</Text>
      <Icon size={30} color={colors.text} name="git-branch-outline" />
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    flexDirection: 'row',
  },
  textTitle: {
    marginRight: 10,
    fontSize: 35,
  },
});
