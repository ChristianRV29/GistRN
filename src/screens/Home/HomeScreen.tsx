/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '~src/components/Card/Card';
import { SwitchTheme } from '~src/components/Switch/SwitchTheme';
import { ThemeContext } from '~src/context/theme/theme';
import { usePublicGists } from '~src/hooks';
import {
  GistsContainer,
  HeaderContainer,
  LoadingIndicator,
  MainWrapper,
  OctoImage,
  StyledIcon,
  TextHeader,
} from './styles';

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();
  const { isLoading, publicGists } = usePublicGists({ maxLimit: 10 });

  const { colors, dividerColor } = theme;

  return (
    <MainWrapper topSpacing={top}>
      <HeaderContainer borderBottomColor={dividerColor}>
        <TextHeader
          style={{
            fontFamily: 'RobotoSlab-Black',
          }}
          theme={theme}>
          List of gists
        </TextHeader>
        <StyledIcon size={25} color={colors.text} name="git-branch-outline" />
        <SwitchTheme />
      </HeaderContainer>
      <GistsContainer>
        {isLoading ? (
          <LoadingIndicator color={colors.text} size="large" />
        ) : (
          <FlatList
            data={publicGists}
            keyExtractor={gist => gist.id}
            onEndReachedThreshold={0.4}
            renderItem={({ item }) => <Card gist={item} />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <ActivityIndicator size="small" color={colors.text} />
            }
          />
        )}
      </GistsContainer>
      <OctoImage
        isIOS={Platform.OS === 'ios' ? true : false}
        resizeMode="contain"
        source={require('~src/assets/images/octocat.png')}
      />
    </MainWrapper>
  );
};
