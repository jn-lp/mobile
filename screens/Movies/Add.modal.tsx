import React, { useState } from "react";
import {
  SafeAreaView,
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Button } from "react-native-elements";

export default function DetailsScreen({ pushItem, navigation: { goBack } }) {
  const [Title, setTitle] = useState("");
  const [Type, setType] = useState("");
  const [Year, setYear] = useState("");

  return (
    <Modal
      style={styles.container}
      animationType="slide"
      visible
      presentationStyle="formSheet"
    >
      <View style={styles.header}>
        <Button
          onPress={() => goBack()}
          type="clear"
          icon={<Ionicons name="close-outline" size={32} color="#999" />}
        />
        <Button
          type="clear"
          title="Add Movie"
          titleStyle={{ color: "#D2444A", marginRight: 8 }}
          onPress={() => {
            pushItem({
              Title,
              Type,
              Year,
            });
            goBack();
          }}
        />
      </View>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Title</Text>
          <TextInput
            style={styles.input}
            value={Title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Type</Text>
          <TextInput style={styles.input} value={Type} onChangeText={setType} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Year</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={Year}
            onChangeText={setYear}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    width: "100%",
    height: 64,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputContainer: { marginVertical: 8, paddingHorizontal: 16 },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    height: 32,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  text: {
    color: "black",
    marginBottom: 8,
    fontSize: 16,
  },
});
