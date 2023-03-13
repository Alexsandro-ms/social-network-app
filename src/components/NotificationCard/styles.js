import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  max-height: 150px;
  padding: 16px;
  background-color: ${(props) => props.theme.White500};
  margin-bottom: 8px;
`;

export const HeaderNotification = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Strong = styled.Text`
  color: ${(props) => props.theme.Yellow500};
  font-weight: bold;
  margin-right: 4px;
`;
