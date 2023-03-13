import { StatusBar } from "react-native";
import { Platform } from "react-native";

import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const Profile = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.View`
  background-color: yellow;
  flex: 0.3;
  position: relative;
`;

export const ProfileImage = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: -24px;
  left: 24px;
`;

export const Description = styled.View`
  margin-top: 32px;
  flex-direction: row;
  padding: 0 14px;
`;

export const TextName = styled.Text`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`;
export const TextDate = styled.Text`
  font-size: 14px;
  font-weight: normal;
  margin-left: 16px;
`;
