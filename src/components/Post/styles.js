import styled from "styled-components/native";

export const PostComponent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  background-color: ${(props) => props.theme.White500};
  border-bottom-width: 2px;
  border-color: ${(props) => props.theme.Background};
`;

export const Container = styled.View`
  flex: 1;
  margin-left: 8px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 16px;
  margin-left: 4px;
`;

export const Content = styled.View`
  margin-top: 8px;
`;

export const TextBody = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.Black500};
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 8px;
  resize-mode: cover;
`;

export const LikeDescription = styled.View`
  padding: 16px 0;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const SettingPost = styled.TouchableOpacity`
  position: relative;
`;
