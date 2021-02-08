import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import detailedMovies from "../../assets/Movies";
import MoviePosters from "../../assets/Movies/Posters";

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;
  const filmData = detailedMovies[id];

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image
          source={MoviePosters[filmData.Poster]}
          resizeMode="contain"
          style={{ width: "100%", marginRight: 20 }}
        />
        {Object.keys(filmData).map((key) => (
          <Text key={key} style={styles.key}>
            {key}:{" "}
            <Text key={key} style={styles.text}>
              {filmData[key]}
            </Text>
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  key: { fontSize: 16, marginVertical: 4, color: "grey" },
  text: {
    color: "black",
  },
});
