import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/Home.screen'
import SecondScreen from './screens/TimeTest.screen'

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
                iconName = focused
                  ? 'bonfire'
                  : 'bonfire-outline';
              case "TimeTest":
                iconName = focused
                  ? 'time'
                  : 'time-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#D2444A',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'General' }} />
        <Tab.Screen name="TimeTest" component={SecondScreen} options={{ title: 'Time Test' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

