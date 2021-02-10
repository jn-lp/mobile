import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const RightAction = ({ dragX, onPress }) => {
  const translateX = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [0, 80],
    extrapolate: "clamp",
  });
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1.1, 0],
    extrapolate: "clamp",
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[styles.rightAction, { transform: [{ translateX }] }]}
      >
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function Movie({
  onPress,
  handleDelete,
  Title,
  Year,
  Type,
  Poster,
}) {
  return (
    <Swipeable
      renderRightActions={(_, dragX) => (
        <RightAction dragX={dragX} onPress={handleDelete} />
      )}
    >
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image
            source={{uri:Poster}}
            style={{ height: 100, width: 80, marginRight: 20 }}
          />
          <View style={styles.filmBody}>
            <Text style={styles.title}>{Title}</Text>
            <Text style={styles.year}>{Year}</Text>
            <Text style={styles.type}>{Type}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  rightAction: {
    backgroundColor: "#fc3d39",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    width: 88,
  },
  actionText: {
    width: "100%",
    color: "white",
    fontWeight: "600",
    padding: 20,
  },
});
