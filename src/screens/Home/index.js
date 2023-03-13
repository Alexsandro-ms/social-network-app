import { useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import Header from "../../components/Header";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import Loading from "../../components/Loading";
import { handleGetForYou } from "../../services/posts";
import { Container, FooterContainer, Main, PostButton } from "./styles";
import { Plus } from "phosphor-react-native";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shouldUpdatePosts, setShouldUpdatePosts] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await handleGetForYou(5);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [shouldUpdatePosts]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setShouldUpdatePosts(!shouldUpdatePosts);
    setIsRefreshing(false);
  };

  const renderEmptyList = () => (
    <View
      style={{
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>
        Parece que não existe postes no momento!
        {"\n"}
        Siga um usuário, ou faça uma postagem.
      </Text>
    </View>
  );

  const renderPost = ({ item }) => (
    <Post data={item} onUpdate={() => setShouldUpdatePosts(true)} />
  );

  return (
    <>
      <Container>
        <Header />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Main>
              <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderPost}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={renderEmptyList()}
                refreshControl={
                  <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                  />
                }
              />
            </Main>
            <FooterContainer>
              <PostButton onPress={() => setIsModalVisible(true)}>
                <Plus size={24} color="#fff" />
              </PostButton>
            </FooterContainer>
          </>
        )}
      </Container>
      <NewPost
        isVisible={isModalVisible}
        onClose={setIsModalVisible}
        onUpdate={setShouldUpdatePosts}
      />
    </>
  );
}

export default Home;
