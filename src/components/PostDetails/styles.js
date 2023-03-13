import styled from "styled-components/native";

export const Container = styled.View`
  flex: 3;
  background-color: ${(props) => props.theme.White500};
  padding: 8px;
`;

export const HeaderContainer = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;
`;
export const Content = styled.View`
  flex: 2;
`;
export const TextBody = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.Gray700};
  margin: 8px 0;
`;

export const FooterContainer = styled.View`
  flex: 0.3;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 8px;
`;

export const Img = styled.Image`
  width: 250px;
  height: 250px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  width: 100%;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 8px;
`;
