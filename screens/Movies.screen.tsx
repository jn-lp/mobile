import React, { useState } from "react";
import { Button } from "react-native-elements";

import {
  createStackNavigator,
  HeaderBackButton,
  TransitionPresets,
} from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import SearchScreen from "./Movies/Search.screen";
import DetailsScreen from "./Movies/Details.screen";
import AddModal from "./Movies/Add.modal";

const Stack = createStackNavigator();

export default function MoviesScreen({ navigation: { navigate } }) {
  const [data, setData] = useState([]);

  const pushItem = (...newData) => setData([...data, ...newData]);
  const deleteItem = (index) => {
    const arr = [...data];
    arr.splice(index, 1);
    setData(arr);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        options={{
          title: "Search for movies",
          headerRight: () => (
            <Button
              onPress={() => navigate("Movies", { screen: "Add" })}
              type="clear"
              icon={<Ionicons name="add" size={24} color="#D2444A" />}
            />
          ),
        }}
      >
        {(props) => (
          <SearchScreen
            {...props}
            data={data}
            setData={setData}
            deleteItem={deleteItem}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerLeft: (props) => (
            <HeaderBackButton {...props} tintColor="#D2444A" />
          ),
        })}
      />
      <Stack.Screen
        name="Add"
        options={({ route }) => ({
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        })}
      >
        {(props) => <AddModal {...props} pushItem={pushItem} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
