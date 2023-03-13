import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";
import { Text } from "react-native";
import { AuthContext } from "../../contexts/auth";

import { Button, Container } from "./styles";

function Navigation() {
  const { handleSignOut } = useContext(AuthContext);
  return (
    <Container>
      <Button>
        <Octicons name="home" size={32} color="#FFB24C" />
      </Button>
      <Button>
        <Feather name="search" size={32} color="#999" />
      </Button>
      <Button>
        <AntDesign name="bells" size={32} color="#999" />
      </Button>
      <Button>
        <FontAwesome name="user-circle" size={32} color="#999" />
      </Button>
      <Button onPress={handleSignOut}>
        <Text>Sair</Text>
      </Button>
    </Container>
  );
}

export default Navigation;
