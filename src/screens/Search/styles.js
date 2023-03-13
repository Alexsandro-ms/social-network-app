import { StatusBar } from "react-native";
import { Platform } from "react-native";

import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const Container = styled.SafeAreaView`
  flex: 3;
  background-color: ${(props) => props.theme.Background};
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const Search = styled.View`
  margin: 16px;
  padding: 6px 12px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 16px;
  background-color: #eee;
`;

export const SearchInput = styled.TextInput`
  position: absolute;
  width: 100%;
  padding: 4px 0;
  margin-left: 50px;
  top: 0;
`;

export const Main = styled.View`
  flex: 1;
`;
