import React, { useState, useContext } from "react";
import { Text, Button, TouchableOpacity } from "react-native";
import { AuthContext } from "../../contexts/auth";
import {
  Card,
  CardImage,
  Container,
  Image,
  Input,
  Label,
  Title
} from "./styles";

function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn } = useContext(AuthContext);

  const handleNavigation = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Container>
      <CardImage>
        <Image source={require("../../assets/signIn.gif")} />
      </CardImage>
      <Card>
        <Title>Faça login</Title>
        <Label>E-mail</Label>
        <Input
          onChangeText={setEmail}
          placeholder="Insira seu email..."
          value={email}
        />
        <Label>Senha</Label>
        <Input
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder="Insira sua senha..."
          value={password}
        />
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <Button
          color={"#FFB24C"}
          title="Fazer Login"
          onPress={() => handleSignIn(email, password)}
        />
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={styles.signUp}>Ainda não tem uma conta? Crie uma!</Text>
        </TouchableOpacity>
      </Card>
    </Container>
  );
}

const styles = {
  forgotPassword: {
    color: "#ddd",
    marginBottom: 8
  },
  signUp: {
    color: "#FFB24C",
    marginTop: 16,
    textAlign: "center"
  }
};

export default SignIn;
