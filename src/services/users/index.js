import { Alert } from "react-native";
import { api } from "../../utils/api";

import * as SecureStore from "expo-secure-store";

export const handleGetUserInfo = async () => {
  const getUserId = await SecureStore.getItemAsync("user");
  const userId = getUserId[1];
  const response = await api.get(`/api/user/${userId}`);

  return response;
};

export const handleSearchUser = async (name) => {
  try {
    if (name === "") {
      return Alert.alert("Ops...", "Digite um usuário para continuar...");
    }
    const response = await api.get(`/api/user/search/${name}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
