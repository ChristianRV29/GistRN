import styled from '@emotion/native';

export const MainWrapper = styled.View<{ topSpacing: number }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  top: ${({ topSpacing }) => topSpacing};
  width: 100%;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  border-bottom-left-radius: 250px;
  border-bottom-right-radius: 250px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  border-width: 0 3px 5px 3px;
  height: 350px;
  justify-content: center;
  max-height: 350px;
  width: 100%;
`;

export const OwnerImage = styled.Image`
  border-radius: 200px;
  height: 200px;
  width: 200px;
`;

export const OwnerNameText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin-top: 12px;
`;

export const DescriptionContainer = styled.View`
  height: 100%;
  margin-top: 10px;
  width: 100%;
`;

export const DescriptionText = styled.Text``;
