import styled from '@emotion/native';

export const TouchableWrapperCard = styled.TouchableOpacity<{
  borderColor: string;
  bgColor: string;
}>`
  background-color: ${({ bgColor }) => bgColor};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 10px;
  border-width: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 130px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ImageContainer = styled.View<{ isIOS?: boolean }>`
  display: flex;
  height: 100%;
  padding: 10px;
  width: ${({ isIOS }) => (isIOS ? '30%' : '25%')};
`;

export const OwnerImage = styled.Image<{ borderColor: string }>`
  border-radius: 15px;
  border: ${({ borderColor }) => `2px solid ${borderColor}`};
  height: 100%;
  overflow: hidden;
`;

export const InformationContainer = styled.View<{ isIOS?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: red;
  height: 100%;
  gap: 20px;
  width: ${({ isIOS }) => (isIOS ? '70%' : '75%')};
`;

export const InformationSubContainer = styled.View`
  display: flex;
  padding-left: 10px;
`;

export const GistTitleText = styled.Text<{ isIOS?: boolean }>`
  font-size: ${({ isIOS }) => (isIOS ? '16px' : '18px')};
`;
