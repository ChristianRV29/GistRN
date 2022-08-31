import React, { useContext } from 'react';
import { ActivityIndicator, FlatList, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { GistCard } from '~src/components/GistCard';
import { SwitchTheme } from '~src/components/SwitchTheme';
import { ThemeContext } from '~src/context/theme/theme';
import { useGists } from '~src/hooks/useGists';
import {
  GistsWrapper,
  Header,
  LoadingIndicator,
  MainWrapper,
  OctoImage,
  TextHeader,
} from './styles';

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  const { top } = useSafeAreaInsets();
  const { isLoading, publicGists } = useGists();

  const { colors } = theme;

  return (
    <MainWrapper topSpacing={top}>
      <Header>
        <TextHeader theme={theme}>All Gists</TextHeader>
        <Icon size={22} color={colors.text} name="git-branch-outline" />
        <SwitchTheme />
      </Header>
      <GistsWrapper>
        {isLoading ? (
          <LoadingIndicator color={colors.text} size="large" />
        ) : (
          <FlatList
            data={publicGists}
            keyExtractor={gist => gist.id}
            onEndReachedThreshold={0.4}
            renderItem={({ item }) => <GistCard gist={item} />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <ActivityIndicator size={20} color={colors.notification} />
            }
          />
        )}
      </GistsWrapper>
      <OctoImage
        isIOS={Platform.OS === 'ios' ? true : false}
        resizeMode="contain"
        source={require('~src/assets/images/octocat.png')}
      />
    </MainWrapper>
  );
};
