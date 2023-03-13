import { StatusBar } from "react-native";
import { Platform } from "react-native";

import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 3;
  background-color: ${(props) => props.theme.Background};
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const TitleContainer = styled.View`
  margin: 0 8px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.Yellow900};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.Yellow900};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-top: 16px;
  margin-bottom: 8px;
`;
