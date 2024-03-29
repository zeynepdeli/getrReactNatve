import { TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  const CustomTabButton = ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          width: 58,
          height: 58,
          backgroundColor: "#5C3EBC",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 33,
          marginTop: -8,
          borderWidth: 3,
          borderColor: "white",
        }}
      >
        <Entypo name="list" size={24} color="#FFD00C" />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName="Ana sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={HomeNavigator}
        options={{
          tabBarIcon: (props) => <CustomTabButton {...props} />,
        }}
      />

      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
