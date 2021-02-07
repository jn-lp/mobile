import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "./screens/Home.screen";
import DrawScreen from "./screens/Draw.screen";
import MoviesScreen from "./screens/Movies.screen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = focused ? "bonfire" : "bonfire-outline";
                break;
              case "Draw":
                iconName = focused ? "pencil" : "pencil-outline";
                break;
              case "Movies":
                iconName = focused ? "film" : "film-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#D2444A",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "General" }}
        />
        <Tab.Screen
          name="Draw"
          component={DrawScreen}
          options={{ title: "Drawing" }}
        />
        <Tab.Screen
          name="Movies"
          component={MoviesScreen}
          options={{ title: "Movies list" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
