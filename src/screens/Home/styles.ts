import styled from '@emotion/native';

export const MainWrapper = styled.View<{ topSpacing: number }>`
  height: 100%;
  margin: 0;
  padding: 0;
  top: ${({ topSpacing }) => `${topSpacing}px`};
  width: 100%;
`;

export const Header = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 80px;
  margin-bottom: 10px;
  padding: 0 15px;
  width: 100%;
`;

export const TextHeader = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  letter-spacing: 0.2px;
  margin-right: 2px;
`;

export const GistsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
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
