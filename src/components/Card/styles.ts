import styled from '@emotion/native';

export const TouchableWrapperCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.card};
  border-color: ${({ theme }) => theme.colors.border};
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
  height: 100%;
  justify-content: space-between;
  width: ${({ isIOS }) => (isIOS ? '70%' : '75%')};
`;

export const InformationSubContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  flex-grow: 3;
`;

export const TitleText = styled.Text<{ isIOS?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ isIOS }) => (isIOS ? '15px' : '16px')};
  margin-bottom: 2px;
  max-width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AgoText = styled.Text`
  color: ${({ theme }) => theme.colors.border};
  font-size: 10px;
  font-weight: 400;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  text-align: justify;
  text-overflow: ellipsis;
`;

export const DescriptionText = styled.Text`
  color: ${({ theme }) => theme.colors.border};
  font-size: 12px;
`;

export const MetricsContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const MetricText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  margin: 0 5px;
`;
