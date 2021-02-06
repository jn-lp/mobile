import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
} from "react-native";
import TimeEl from "../classes/TimeEL";

const TimeELTestData = [
  {
    title: "Default",
    date: new TimeEl().toString(),
  },
  {
    title: "From Values",
    date: TimeEl.FromValues(9, 41, 0).toString(),
  },
  {
    title: "From Date",
    date: TimeEl.FromDate(new Date(Date.now())).toString(),
  },
  {
    title: "Sum",
    date: TimeEl.add(
      TimeEl.FromValues(9, 41, 0),
      TimeEl.FromValues(9, 41, 0)
    ).toString(),
  },
  {
    title: "Substract",
    date: TimeEl.subtract(
      TimeEl.FromValues(12, 47, 18),
      TimeEl.FromValues(16, 12, 39)
    ).toString(),
  },
];

const Item = ({ title, date }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{date}</Text>
  </View>
);

export default function TimeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TimeELTestData}
        renderItem={({ item }) => <Item title={item.title} date={item.date} />}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D2444A",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  date: {
    color: "black",
    fontSize: 22,
    fontWeight: "700",
  },
});
