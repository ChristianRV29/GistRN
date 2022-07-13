import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PublicGist } from '~src/@types/index';
import { ThemeContext } from '~src/context/theme/theme';

interface Props {
  gist: PublicGist;
}

export const GistCard: React.FC<Props> = ({ gist }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.gistWrapper,
        backgroundColor: theme.colors.card,
        borderColor: theme.colors.border,
      }}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: gist.owner.avatar_url }}
          style={styles.imageOwner}
        />
      </View>
      <View style={styles.informationWrapper}>
        <Text>{gist.description}</Text>
        <Text>{gist.owner.login}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gistWrapper: {
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 15,
  },
  imageWrapper: {
    flex: 1,
  },
  imageOwner: {
    height: 100,
    width: 'auto',
    borderRadius: 5,
  },
  informationWrapper: {
    flex: 3,
    flexDirection: 'column',
  },
});
