import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: ${isAndroid ? "80px" : "110px"};
`;

export const HeaderContainer = styled.View`
  flex: 0.1;
  flex-direction: row;
  width: 100%;
  min-height: 40px;
  background-color: ${(props) => props.theme.White500};
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Button = styled.Button`
  width: 78px;
  height: 40px;
`;

export const ContentContainer = styled.View`
  flex: 2;
  width: 100%;
  background-color: ${(props) => props.theme.Background};
`;

export const TextInput = styled.TextInput`
  padding: 8px 16px;
`;

export const FooterContainer = styled.View`
  width: 100%;
  padding: 16px;
  height: 80px;
  background-color: ${(props) => props.theme.White500};
  justify-content: center;
`;

export const PrevImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 0 8px;
`;

export const ImageButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
