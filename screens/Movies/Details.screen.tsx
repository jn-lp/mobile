import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Image,
} from "react-native";

// Supersecret token, store perform all API reqs on server side at production
const API_KEY = "7e9fe69e";

export default function DetailsScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = route.params;

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View />
      ) : (
        <ScrollView style={styles.container}>
          <Image
            source={{ uri: data.Poster }}
            resizeMode="cover"
            style={{ width: 300, height: 450, marginHorizontal: "auto" }}
          />
          {Object.entries(data)
            .filter(([, value]) => !Array.isArray(value))
            .map(([key, value]) => (
              <Text key={key} style={styles.key}>
                {key}:{" "}
                <Text key={key} style={styles.text}>
                  {value}
                </Text>
              </Text>
            ))}
        </ScrollView>
      )}
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
