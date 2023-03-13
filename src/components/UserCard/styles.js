import styled from "styled-components/native";

export const UserComponent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.White500};
  border-bottom-width: 2px;
  border-color: ${(props) => props.theme.Background};
`;

export const NameText = styled.Text`
  font-size: 16px;
  margin: 0 4px;
  text-transform: capitalize;
`;

export const FollowButton = styled.TouchableOpacity`
  margin-left: auto;
`;
