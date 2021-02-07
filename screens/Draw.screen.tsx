import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

import Plot from "../components/Plot.component";
import Diagram from "../components/Diagram.component";

export default function DrawScreen() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        style={styles.controls}
        values={["Графік", "Діаграма"]}
        selectedIndex={activeScreen}
        onChange={({ nativeEvent }) => {
          setActiveScreen(nativeEvent.selectedSegmentIndex);
        }}
      />
      {
        [<Plot styles={styles.plot} />, <Diagram styles={styles.pie} />][
          activeScreen
        ]
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  controls: {
    width: 320,
    maxWidth: "80%",
    marginTop: 8,
    marginBottom: 32,
  },
  container: {
    flex: 1,
    maxHeight: "90%",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  plot: { height: 320, maxHeight: "80%", width: 320 },
  pie: { height: 320, maxHeight: "80%", width: 320 },
});
