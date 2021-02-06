import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Лепейко Євген{`\n`}
        Група ІП-83{`\n`}
        ЗК ІП-8512
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message : {
    fontSize: 18,
    color: 'black',
    textAlign: "center"
  }
});
