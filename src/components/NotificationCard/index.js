import { UserCircle } from "phosphor-react-native";
import React from "react";
import { Text } from "react-native";
import { Container, HeaderNotification, Strong } from "./styles";

function NotificationCard({ strong, text }) {
  return (
    <Container>
      <HeaderNotification>
        <UserCircle size={32} style={{ marginRight: 8 }} />
        <Strong>{strong}</Strong>
        <Text>{text}</Text>
      </HeaderNotification>
    </Container>
  );
}

export default NotificationCard;
