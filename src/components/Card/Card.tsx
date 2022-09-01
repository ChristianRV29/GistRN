import React, { useContext, useRef, useState } from 'react';
import {
  ButtonProps,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDistance } from 'date-fns';

import { PublicGist } from '~src/@types/index';
import { ThemeContext } from '~src/context/theme/theme';
import { RootStackParamList } from '~src/navigation/StackNavigator';
import { InformationSubContainer, GistTitleText } from './styles';
import {
  OwnerImage,
  ImageContainer,
  TouchableWrapperCard,
  InformationContainer,
} from './styles';

interface Props {
  gist: PublicGist;
}

export const Card: React.FC<Props> = ({ gist }) => {
  const { theme } = useContext(ThemeContext);
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const gistClicked = (gistData: PublicGist) => {
    navigate('GistDetailsScreen', { gistData });
  };

  const { colors } = theme;
  const iosRef = useRef(Platform.OS === 'ios' ? true : false);

  return (
    <TouchableWrapperCard
      activeOpacity={0.6}
      bgColor={colors.card}
      borderColor={colors.border}
      onPress={() => gistClicked(gist)}>
      <ImageContainer isIOS={iosRef.current}>
        <OwnerImage
          borderColor={colors.text}
          source={{ uri: gist.owner.avatar_url }}
          resizeMode="cover"
        />
      </ImageContainer>
      <InformationContainer isIOS={iosRef.current}>
        <InformationSubContainer>
          <GistTitleText isIOS={iosRef.current}>
            {gist.owner.login}
          </GistTitleText>
          <Text
            style={{
              ...styles.creationDate,
              color: theme.colors.notification,
            }}>
            {formatDistance(new Date(gist.created_at), new Date())} ago
          </Text>
        </InformationSubContainer>
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
      </InformationContainer>
    </TouchableWrapperCard>
  );
};

const styles = StyleSheet.create({
  gistWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    elevation: 11,
    flex: 1,
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
    padding: 10,
    width: '30%',
  },
  imageOwner: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 100,
    overflow: 'hidden',
  },
  informationWrapper: {
    width: '70%',
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
