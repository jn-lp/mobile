import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import MoviePosters from "../assets/Posters/index";

export default function Movie({ Title, Year, Type, Poster }) {
  return (
    <View style={styles.container}>
      <Image
        source={MoviePosters[Poster]}
        style={{ height: 100, width: 80, marginRight: 20 }}
      />
      <View style={styles.filmBody}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.year}>{Year}</Text>
        <Text style={styles.type}>{Type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  filmBody: {
    display: "flex",
    flexShrink: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    flex: 1,
    marginBottom: 8,
    flexWrap: "wrap",
  },
  year: {
    fontSize: 16,
  },
  type: {
    fontSize: 16,
  },
});
