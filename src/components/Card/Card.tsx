/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatDistance } from 'date-fns';

import { PublicGist } from '~src/@types/index';
import { ThemeContext } from '~src/context/theme/theme';
import { RootStackParamList } from '~src/navigation/StackNavigator';
import {
  AgoText,
  DescriptionContainer,
  DescriptionText,
  ImageContainer,
  InformationContainer,
  InformationSubContainer,
  MetricsContainer,
  MetricText,
  OwnerImage,
  TitleText,
  TouchableWrapperCard,
} from './styles';

interface Props {
  gist: PublicGist;
}

export const Card: React.FC<Props> = ({ gist }) => {
  const { theme } = useContext(ThemeContext);
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const fileNameRef = useRef<string>();

  const { colors } = theme;
  const iosRef = useRef(Platform.OS === 'ios' ? true : false);

  useEffect(() => {
    Object.keys(gist.files).forEach(file => {
      fileNameRef.current = file;
    });
  }, [gist]);

  const gistClicked = (gistData: PublicGist) => {
    navigate('GistDetailsScreen', { gistData });
  };

  return (
    <TouchableWrapperCard
      activeOpacity={0.6}
      theme={theme}
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
          <TitleText
            isIOS={iosRef.current}
            numberOfLines={2}
            theme={theme}
            style={{ fontFamily: 'RobotoSlab-SemiBold' }}>
            {gist.owner.login}/{fileNameRef.current}
          </TitleText>
          <AgoText theme={theme} style={{ fontFamily: 'RobotoSlab-Light' }}>
            {formatDistance(new Date(gist.created_at), new Date())} ago
          </AgoText>
          <DescriptionContainer>
            <DescriptionText
              theme={theme}
              style={{ fontFamily: 'RobotoSlab-Light' }}>
              {gist.description}
            </DescriptionText>
          </DescriptionContainer>
        </InformationSubContainer>
        <MetricsContainer>
          <Icon
            name="chatbox-ellipses-outline"
            size={12}
            color={theme.colors.text}
          />
          <MetricText theme={theme}>{gist.comments} comments</MetricText>
          <Icon name="document-outline" size={12} color={theme.colors.text} />
          <MetricText theme={theme}>
            {Object.keys(gist.files).length} files
          </MetricText>
        </MetricsContainer>
      </InformationContainer>
    </TouchableWrapperCard>
  );
};
