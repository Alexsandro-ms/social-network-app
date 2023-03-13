import { StatusBar } from "react-native";
import { Platform } from "react-native";

import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 3;
  background-color: ${(props) => props.theme.Background};
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const Main = styled.View`
  flex: 1;
  height: 100%;
`;

export const FooterContainer = styled.SafeAreaView`
  background-color: ${(props) => props.theme.White500};
`;

export const Footer = styled.View`
  position: relative;
  justify-content: center;
  min-height: ${isAndroid ? "80px" : "110px"};
`;

export const PostButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.Yellow500};
  position: absolute;
  right: 32px;
  top: -64px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;
