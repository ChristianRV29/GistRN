import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDistance } from 'date-fns';

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
        <View style={styles.overviewContainer}>
          <Text style={{ ...styles.ownerName, color: theme.colors.text }}>
            {gist.owner.login}
          </Text>
          <Text
            style={{
              ...styles.creationDate,
              color: theme.colors.notification,
            }}>
            {formatDistance(new Date(gist.created_at), new Date())} ago
          </Text>
        </View>
        <View style={styles.generalContainer}>
          <Icon
            name="chatbox-ellipses-outline"
            size={12}
            color={theme.colors.notification}
          />
          <Text
            style={{ ...styles.stadistic, color: theme.colors.notification }}>
            {gist.comments} comments
          </Text>
          <Icon
            name="document-outline"
            size={12}
            color={theme.colors.notification}
          />
          <Text
            style={{ ...styles.stadistic, color: theme.colors.notification }}>
            {Object.keys(gist.files).length} files
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gistWrapper: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 2,
    elevation: 11,
    flexDirection: 'row',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  imageWrapper: {
    flex: 1,
  },
  imageOwner: {
    borderRadius: 90,
    height: 100,
  },
  informationWrapper: {
    flex: 3,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  ownerName: {
    fontSize: 20,
  },
  creationDate: {
    fontSize: 12,
  },
  stadistic: {
    fontSize: 12,
    marginHorizontal: 5,
  },
  overviewContainer: {
    flex: 3,
  },
  generalContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
