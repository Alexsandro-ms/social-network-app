import { api } from "../../utils/api";
import * as SecureStore from "expo-secure-store";

import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const getUserToken = async () => {
      const userToken = await SecureStore.getItemAsync("user-token");
      if (userToken) {
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    };
    getUserToken();
  }, []);

  const handleSignIn = async (email, password) => {
    try {
      const { data } = await api.post("/api/user/signIn", {
        email,
        password
      });

      const { token, user, message } = data;

      if (!api.defaults.headers.post.hasOwnProperty("authorization")) {
        api.defaults.headers.common["authorization"] = `Bearer ${token}`;
      } else {
        api.defaults.headers.common["authorization"] = `Bearer ${token}`;
      }

      await SecureStore.setItemAsync("user-token", token);
      await SecureStore.setItemAsync("user", JSON.stringify(user));

      setIsAuthorized(true);
      return;
    } catch (error) {
      console.error(error);
      showToast("error", error, 5000);
      return;
    }
  };

  const handleSignUp = async (name, lastName, email, password) => {
    try {
      const response = await api.post("/api/user", {
        name,
        lastName,
        email,
        password
      });

      return alert(response.data.message);
    } catch (error) {
      return console.log("Erro ao criar conta!", error);
    }
  };

  const handleSignOut = async () => {
    try {
      delete api.defaults.headers.common["Authorization"];
      await SecureStore.deleteItemAsync("user-token");
      await SecureStore.deleteItemAsync("user");

      setIsAuthorized(false);
      alert("Usuário saiu com sucesso");
    } catch (error) {
      console.error(error);
      alert("Erro ao sair do usuário");
    }
  };

  return {
    isAuthorized,
    handleSignIn,
    handleSignUp,
    handleSignOut
  };
};
