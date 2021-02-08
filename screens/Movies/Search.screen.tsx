import React, { useState } from "react";
import { SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Movie from "../../components/Movie.component";

export default function SearchScreen({ data, deleteItem, navigation }) {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%", display: "flex" }}
        data={data.filter(
          ({ Title }) => Title.toUpperCase().indexOf(search.toUpperCase()) > -1
        )}
        renderItem={({ item, index }) => (
          <Movie
            {...item}
            handleDelete={() => deleteItem(index)}
            onPress={() => {
              item.Type == "movie" &&
                navigation.navigate("Details", {
                  id: item.imdbID,
                  name: item.Title,
                });
            }}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              marginLeft: 20,
            }}
          />
        )}
        keyExtractor={({ imdbID }, i) => `${imdbID}-${i}`}
        ListHeaderComponent={
          <SearchBar
            platform="ios"
            containerStyle={styles.search}
            inputContainerStyle={styles.input}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    backgroundColor: "transparent",
    height: 48,
  },
  input: {
    height: 32,
  },
});
