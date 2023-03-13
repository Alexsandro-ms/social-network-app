import React, { useContext, useState } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import {
  Card,
  CardImage,
  Container,
  Image,
  Input,
  Label,
  Title
} from "./styles";
import { AuthContext } from "../../contexts/auth";

function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignUp } = useContext(AuthContext);

  const handleNameChange = (text) => setName(text);
  const handleLastNameChange = (text) => setLastName(text);
  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSignUpPress = async () => {
    await handleSignUp(name, lastName, email, password);
    handleSignInPress();
  };

  const handleSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Container>
      <CardImage>
        <Image source={require("../../assets/signIn.gif")} />
      </CardImage>
      <Card>
        <Title>Cadastre-se</Title>
        <Label>Nome</Label>
        <Input
          onChangeText={handleNameChange}
          placeholder="Insira seu nome..."
        />
        <Label>Sobrenome</Label>
        <Input
          onChangeText={handleLastNameChange}
          placeholder="Insira seu sobrenome..."
        />
        <Label>E-mail</Label>
        <Input
          onChangeText={handleEmailChange}
          placeholder="Insira seu email..."
        />
        <Label>Senha</Label>
        <Input
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          placeholder="Insira sua senha..."
        />
        <Button
          color="#FFB24C"
          title="Inscreva-se"
          onPress={handleSignUpPress}
        />
        <TouchableOpacity onPress={handleSignInPress}>
          <Text
            style={{ color: "#FFB24C", marginTop: 16, textAlign: "center" }}
          >
            Já tem uma conta? Faça login!
          </Text>
        </TouchableOpacity>
      </Card>
    </Container>
  );
}

export default SignUp;
