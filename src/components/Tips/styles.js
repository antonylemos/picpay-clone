import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  }
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ backgroundColor }) => backgroundColor};
  width: 150px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Picture = styled.Image`
  align-self: center;
`;
