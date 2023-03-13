import React, { useEffect, useState } from "react";
import {
  Container,
  ProfileImage,
  Profile,
  BackgroundImage,
  TextName,
  TextDate,
  Description
} from "./styles";
import { handleGetUserInfo } from "../../services/users";
import { Text, TouchableOpacity } from "react-native";

function UserDetails() {
  const [userData, setUserData] = useState([]);
  const dateEnteredInto = `${userData.createdAt}`;

  useEffect(() => {
    (async () => {
      try {
        const response = await handleGetUserInfo();
        setUserData(response.data);
      } catch (error) {
        console.log(error);
        return alert("error");
      }
    })();
  }, []);

  return (
    <Container>
      <Profile>
        <BackgroundImage>
          <ProfileImage
            style={{ borderRadius: 50 }}
            source={
              userData.imagePath === null
                ? require("../../assets/default_profile.png")
                : userData.imagePath
            }
          />
        </BackgroundImage>
        <Description>
          <TextName>{`${userData.name} ${userData.lastName}`} </TextName>
          <TouchableOpacity style={{ marginLeft: "auto", marginRight: 32 }}>
            <Text>Seguir</Text>
          </TouchableOpacity>
        </Description>
        <TextDate>{`Entrou em: ${dateEnteredInto.substring(0, 10)}`}</TextDate>
        <Description style={{ marginTop: 16 }}>
          <Text>15 seguidores</Text>
          <Text style={{ marginLeft: 32 }}>12 seguindo</Text>
        </Description>

        <Text
          style={{
            margin: 16,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#DDD"
          }}
        >
          Minhas postagens:
        </Text>
      </Profile>
    </Container>
  );
}

export default UserDetails;
