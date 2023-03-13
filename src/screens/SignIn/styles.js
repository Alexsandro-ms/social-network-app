import { Platform, StatusBar } from "react-native";
import styled from "styled-components";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.White500};
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const CardImage = styled.View`
  width: 100%;
  padding: 16px;
  max-width: 300px;
  max-height: 350px;
  margin: 0 auto;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Card = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.Yellow500};
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 16px;
`;

export const Input = styled.TextInput`
  border: 1px solid ${(props) => props.theme.Gray500};
  padding: 8px 16px;
  border-radius: 8px;
  margin: 8px 0;
`;
