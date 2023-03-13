import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  min-height: 80px;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.White500};
  margin-bottom: 2px;
`;

export const Button = styled.TouchableOpacity``;

export const Image = styled.Image`
  max-width: 48px;
  max-height: 48px;
`;
