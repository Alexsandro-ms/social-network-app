import React, { useState } from "react";
import { Modal, Text, TouchableOpacity } from "react-native";
import { Heart, UserCircle, X } from "phosphor-react-native";

import {
  Container,
  Content,
  HeaderContainer,
  Name,
  PostComponent,
  FooterContainer,
  Button,
  Img,
  TextBody,
  Input,
  CloseButton,
  LikeDescription
} from "./styles";

function PostDetails({ visible, onClose, data, like }) {
  const [isILikedIt, setIsILikedIt] = useState(like);
  const uri = `http://192.168.0.10:8080/uploads/${data.imagePath}`;

  const pressLikeButton = async (postId) => {
    try {
      if (!isILikedIt) {
        const result = await handleLikeThis({ postId });
        setIsILikedIt(true);
        return console.log(result);
      }
      setIsILikedIt(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <HeaderContainer>
          <TouchableOpacity>
            <UserCircle size={36} color="#333" weight="regular" />
          </TouchableOpacity>
          <Name>{data.userName}</Name>
          <CloseButton onPress={onClose}>
            <X size={24} color="#CCC" weight="bold" />
          </CloseButton>
        </HeaderContainer>
        <Content>
          <TextBody>{data.body}</TextBody>
          <Img
            source={{
              uri
            }}
            resizeMode="cover"
          />
        </Content>
        <FooterContainer>
          <Button onPress={() => setIsILikedIt(!isILikedIt)}>
            {isILikedIt ? (
              <Heart size={26} color="#a42021" weight="fill" />
            ) : (
              <Heart size={26} color="#ccc" weight="bold" />
            )}
          </Button>
          <Input placeholder="Insira seu comentario aqui... " />
        </FooterContainer>
      </Container>
    </Modal>
  );
}

export default PostDetails;
