import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const MainWrapper = styled.View<{ topSpacing: number }>`
  height: 100%;
  margin: 0;
  padding: 0;
  top: ${({ topSpacing }) => `${topSpacing}px`};
  width: 100%;
`;

export const HeaderContainer = styled.View<{ borderBottomColor?: string }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 10px;
  padding: 0 15px;
  width: 100%;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  letter-spacing: 0.5px;
  margin-right: 10px;
`;

export const StyledIcon = styled(Icon)`
  top: 2px;
`;

export const GistsContainer = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 10px 5px 10px;
  width: 100%;
  z-index: 1;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  top: -80px;
`;

export const OctoImage = styled.Image<{ isIOS?: boolean }>`
  bottom: ${({ isIOS }) => (isIOS ? '55px' : '10px')};
  height: 200px;
  opacity: 0.5;
  position: absolute;
  right: -70px;
`;
