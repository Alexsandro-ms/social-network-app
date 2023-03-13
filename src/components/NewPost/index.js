import React, { useState } from "react";
import { Alert, Modal, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Image as ImageIcon, X } from "phosphor-react-native";

import { api } from "../../utils/api";
import {
  Button,
  Container,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  ImageButton,
  PrevImage,
  TextInput
} from "./styles.js";

const NewPost = ({ isVisible, onClose, onUpdate }) => {
  const [content, setContent] = useState("");
  const [isImage, setIsImage] = useState(null);

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1
      });

      if (!result.canceled) {
        setIsImage(result);

        Alert.alert(
          "Imagem adicionada",
          "A imagem foi adicionada com sucesso!"
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Ocorreu um erro ao adicionar a imagem.");
    }
  };

  const handleCreateNewPost = async () => {
    try {
      const formData = new FormData();
      if (isImage) {
        formData.append("image", {
          uri: isImage.uri,
          name: "image.jpg",
          type: "image/jpeg"
        });
      }
      formData.append("body", content);

      const response = await api.post("/api/post", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        }
      });

      onUpdate();
      setIsImage(null);
      Alert.alert("Sucesso", "Post criado com sucesso!");
      onClose(!isVisible);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Ocorreu um erro ao criar o post.");
    }
  };

  return (
    <Modal visible={isVisible} animationType="fade">
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => onClose(!isVisible)}>
            <X size={24} color="#000" weight="bold" />
          </TouchableOpacity>
          <Button
            title="Publicar"
            color="#FFB24C"
            accessibilityLabel="Criar novo post"
            onPress={handleCreateNewPost}
          />
        </HeaderContainer>
        <ContentContainer>
          <TextInput
            placeholder="O que está acontecendo?"
            onChangeText={setContent}
            multiline={true}
          />
          {isImage && <PrevImage source={{ uri: isImage.uri }} />}
        </ContentContainer>
        <FooterContainer>
          <ImageButton onPress={handlePickImage}>
            <ImageIcon size={24} color="#FFB24C" weight="bold" />
          </ImageButton>
        </FooterContainer>
      </Container>
    </Modal>
  );
};

export default NewPost;
