import React, { useState, useEffect } from "react";
import { View, Platform, FlatList, StyleSheet, Dimensions } from "react-native";
import { Header, Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

import Image from "../components/Image.component";

// Supersecret token, store perform all API reqs on server side at production
const API_KEY = "19193969-87191e5db266905fe8936d565";
const REQUEST = "fun+party";

export default function ImagesScreen({}) {
  const unit = Dimensions.get("window").width;

  const [isLoading, setLoading] = useState(true);
  const [images, setImages] = useState(Array(30).fill({}));

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${REQUEST}&image_type=photo&per_page=${images.length}`
    )
      .then((response) => response.json())
      .then(({ hits }) => setImages(hits))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          backgroundColor: "#fff",
          height: 88,
          paddingBottom: 0,
          paddingRight: 0,
        }}
        rightComponent={
          <Button
            onPress={pickImage}
            type="clear"
            containerStyle={{
              marginTop: -10,
            }}
            icon={<Ionicons name="add" size={24} color="#D2444A" />}
          />
        }
      />
      <FlatList
        columnWrapperStyle={{
          height: unit,
        }}
        numColumns={10}
        data={images}
        renderItem={({ item, index }) => (
          <Image
            image={item}
            order={index}
            size={index % 10 === 1 || index % 10 === 5 ? 2 : 1}
          />
        )}
        keyExtractor={(_, i) => `${i}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
