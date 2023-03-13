import { Pencil, Trash } from "phosphor-react-native";
import React from "react";
import { ConfigModal, OptionButton, OptionText } from "./style";

import { handleDeletePost } from "../../services/posts";
import { Alert } from "react-native";

function ModalSettingPost({ visible, postId, updatePost }) {
  const handlePressDeleteButton = async () => {
    try {
      const response = await handleDeletePost(postId);
      await updatePost();
      Alert.alert("Sucesso!", response.data.message);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  if (!visible) return null;
  return (
    <ConfigModal>
      <OptionButton onPress={handlePressDeleteButton}>
        <Trash size={24} color={"#f00"} />
        <OptionText textColor="delete">Apagar postagem.</OptionText>
      </OptionButton>
      <OptionButton>
        <Pencil size={24} color={"#333"} />
        <OptionText>Editar postagem.</OptionText>
      </OptionButton>
    </ConfigModal>
  );
}

export default ModalSettingPost;
