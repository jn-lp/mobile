import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";

import Movie from "../components/Movie.component";

export default function MoviesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%", display: "flex" }}
        data={require("../assets/MoviesList.json").Search}
        renderItem={({ item }) => <Movie {...item} />}
        keyExtractor={(item) => item.imdbID}
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
});
