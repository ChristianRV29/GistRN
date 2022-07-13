import React, { useContext } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { GistCard } from '~src/components/GistCard';

import { ThemeContext } from '~src/context/theme/theme';
import { useGists } from '~src/hooks/useGists';
import { globalStyles } from '~src/styles';

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();

  const { colors } = theme;
  const { isLoading, publicGists } = useGists();

  return (
    <View
      style={{
        ...globalStyles.mainWrapper,
        top: top + 20,
      }}>
      <View style={{ ...styles.heroWrapper, borderBottomColor: colors.border }}>
        <Text style={{ ...styles.textTitle, color: colors.text }}>
          Public Gists
        </Text>
        <Icon size={30} color={colors.text} name="git-branch-outline" />
      </View>
      <Image
        source={require('~src/assets/images/octocat.png')}
        style={styles.octoImage}
      />
      <View style={styles.gistsContainer}>
        {isLoading ? (
          <ActivityIndicator size={50} color={colors.notification} />
        ) : (
          <>
            <GistCard gist={publicGists[0]} />
            <GistCard gist={publicGists[1]} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroWrapper: {
    alignItems: 'center',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderWidth: 2,
    flexDirection: 'row',
    marginBottom: 10,
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
  gistsContainer: {
    flex: 1,
  },
});
