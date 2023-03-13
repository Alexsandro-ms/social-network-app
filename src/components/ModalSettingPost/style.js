import styled from "styled-components/native";

export const ConfigModal = styled.View`
  position: absolute;
  top: 0;
  right: 24px;
  width: 80%;
  height: 150px;
  background-color: ${(props) => props.theme.White500};
  border-radius: 8px;
  z-index: 99;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${(props) => props.theme.Background};
`;

export const OptionButton = styled.TouchableOpacity`
  width: 90%;
  margin: 0 auto;
  align-items: center;
  flex-direction: row;
  padding: 16px;
`;

export const OptionText = styled.Text`
  letter-spacing: 1px;
  color: ${(props) => (props.textColor === "delete" ? "#f00" : "#333")};
  font-size: 16px;
  margin-left: 8px;
`;
