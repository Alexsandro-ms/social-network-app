import { ChatsTeardrop, UserCircle } from "phosphor-react-native";

import { Button, Container, Image } from "./styles";

function Header() {
  return (
    <Container>
      <UserCircle size={32} color={"#c0c0c0"} />
      <Image source={require("../../../assets/sun-logo.png")} />
      <Button>
        <ChatsTeardrop size={32} color="#c0c0c0" />
      </Button>
    </Container>
  );
}

export default Header;
