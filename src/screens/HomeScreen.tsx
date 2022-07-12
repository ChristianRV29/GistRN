import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
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
      }}>
      <View style={styles.heroWrapper}>
        <Text style={{ ...styles.textTitle, color: colors.text }}>
          Public Gists
        </Text>
        <Icon size={30} color={colors.text} name="git-branch-outline" />
      </View>
      <Image
        source={require('~src/assets/images/octocat.png')}
        style={styles.octoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heroWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTitle: {
    marginRight: 10,
    fontSize: 35,
  },
  octoImage: {
    height: 300,
    opacity: 0.2,
    position: 'absolute',
    right: -50,
    width: 250,
  },
});
