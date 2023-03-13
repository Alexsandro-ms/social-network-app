import React, { useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Container, SearchInput, Search as SearchView } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import UserCard from "../../components/UserCard";
import { handleSearchUser } from "../../services/users";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await handleSearchUser(searchValue);
      setUsers(data);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const renderEmptyState = () => (
    <Text style={{ marginLeft: 16, fontSize: 12, color: "red" }}>
      * Digite um nome de usuário para pesquisar.
    </Text>
  );

  const renderNoResults = () => (
    <Text style={{ marginLeft: 16 }}>Usuários encontrados: Nenhum.</Text>
  );

  return (
    <Container>
      <View>
        <SearchView>
          <MagnifyingGlass size={24} color="#ccc" weight="bold" />
          <SearchInput
            placeholder="Procure um usuário..."
            onChangeText={setSearchValue}
            value={searchValue}
            onSubmitEditing={handleSearch}
          />
        </SearchView>
        {users.length > 0 ? (
          <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <UserCard data={item} />}
          />
        ) : searchValue ? (
          renderNoResults()
        ) : (
          renderEmptyState()
        )}
      </View>
    </Container>
  );
}

export default Search;
