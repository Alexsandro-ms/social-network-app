import { Text, View } from "react-native";
import NotificationCard from "../../components/NotificationCard";
import { Container, Title, TitleContainer } from "./styles";

function Notification() {
  return (
    <Container>
      <TitleContainer>
        <Title>Notificações</Title>
      </TitleContainer>
      <NotificationCard strong={"Doe"} text={"Começou a seguir você!"} />
      <NotificationCard strong={"Doe"} text={"Curtiu seu post!"} />
      <NotificationCard strong={"Kim"} text={"Comentou seu post!"} />
    </Container>
  );
}

export default Notification;
