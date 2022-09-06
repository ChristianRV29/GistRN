/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList } from '~src/navigation/StackNavigator';
import {
  HeaderContainer,
  MainWrapper,
  OwnerImage,
  OwnerNameText,
} from './styles';
import { ThemeContext } from '~src/context/theme/theme';

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'GistDetailsScreen'> {}

export const GistDetailsScreen = ({ route }: Props) => {
  const { theme } = useContext(ThemeContext);
  const { gistData } = route.params;

  const { top } = useSafeAreaInsets();

  return (
    <MainWrapper topSpacing={top}>
      <HeaderContainer theme={theme}>
        <OwnerImage theme={theme} source={{ uri: gistData.owner.avatar_url }} />
        <OwnerNameText
          style={{ fontFamily: 'RobotoSlab-ExtraBold' }}
          theme={theme}>
          {gistData.owner.login}
        </OwnerNameText>
      </HeaderContainer>
    </MainWrapper>
  );
};
