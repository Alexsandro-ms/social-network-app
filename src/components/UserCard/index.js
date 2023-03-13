import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FollowButton, NameText, UserComponent } from "./styles.js";
import { UserCircle, UserPlus } from "phosphor-react-native";
import { api } from "../../utils/api";
import { useEffect } from "react";

function UserCard({ data }) {
  const uri = `http://192.168.0.10:8080/uploads/${data.imagePath}`;

  // useEffect();

  const handleFollowUser = async () => {
    api
      .post("/api/follow", { followerId: data.id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDialog = () => {
    return Alert.alert("Seguir este usuário?", "Você gostaria de seguir?", [
      {
        text: "Não"
      },
      {
        text: "Sim",
        onPress: () => {
          handleFollowUser();
        }
      }
    ]);
  };

  return (
    <UserComponent>
      {data.imagePath != undefined ? (
        <Image source={uri} />
      ) : (
        <UserCircle size={32} color="#333" weight="regular" />
      )}
      <NameText>
        {data.name} {data.lastName}
      </NameText>
      <FollowButton onPress={handleDialog}>
        <UserPlus size={24} color="#333" weight="regular" />
      </FollowButton>
    </UserComponent>
  );
}

export default UserCard;
