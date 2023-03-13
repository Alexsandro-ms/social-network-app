import {
  ChatTeardrop,
  DotsThreeVertical,
  Heart,
  UserCircle
} from "phosphor-react-native";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { handleLikeThis } from "../../services/likes";
import ModalSettingPost from "../ModalSettingPost";
import PostDetails from "../PostDetails";
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
  LikeDescription,
  SettingPost
} from "./styles";

function Post({ data, onUpdate }) {
  const [isILikedIt, setIsILikedIt] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [isPostDetails, setIsPostDetails] = useState(false);
  const uri = `http://192.168.0.10:8080/uploads/${data.imagePath}`;

  const pressLikeButton = async (postId) => {
    try {
      if (!isILikedIt) {
        const result = await handleLikeThis({ postId });
        setIsILikedIt(true);
        onUpdate();
        return console.log(result);
      }
      setIsILikedIt(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PostComponent onPress={() => setIsPostDetails(!isPostDetails)}>
      <Container>
        <HeaderContainer>
          <TouchableOpacity>
            <UserCircle size={36} color="#333" weight="regular" />
          </TouchableOpacity>
          <Name>{data.userName}</Name>
          <SettingPost
            onPress={() => setIsSetting(!isSetting)}
            style={{ marginLeft: "auto" }}
          >
            <DotsThreeVertical size={28} color="#333" />
          </SettingPost>
          <ModalSettingPost
            visible={isSetting}
            postId={data.id}
            updatePost={onUpdate}
          />
        </HeaderContainer>
        <Content>
          <TextBody>{data.body}</TextBody>
          <TouchableOpacity>
            <Img
              source={{
                uri
              }}
            />
          </TouchableOpacity>
          <LikeDescription>
            <Text>
              {data.likes
                ? `${data.likes} curtida(s) neste post.`
                : "Seja o primeiro a curtir."}
            </Text>
          </LikeDescription>
          <FooterContainer>
            <Button onPress={() => pressLikeButton(data.id)}>
              {isILikedIt ? (
                <Heart size={26} color="#a42021" weight="fill" />
              ) : (
                <>
                  <Heart size={26} color="#ccc" weight="bold" />
                </>
              )}
            </Button>
            <TouchableOpacity onPress={() => setIsPostDetails(true)}>
              <ChatTeardrop size={26} color="#ccc" weight="bold" />
            </TouchableOpacity>
          </FooterContainer>
        </Content>
      </Container>
      <PostDetails
        visible={isPostDetails}
        data={data}
        onClose={() => setIsPostDetails(false)}
        like={isILikedIt}
      />
    </PostComponent>
  );
}

export default Post;
