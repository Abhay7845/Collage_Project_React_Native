import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OurProducts from "../Screens/Authenticated/OurProducts";
import Icon from "react-native-vector-icons/FontAwesome";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#131636",
          paddingBottom: 20,
          height: 85,
          bottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="Products"
        component={OurProducts}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user-circle"
              size={25}
              color={focused ? "blue" : "white"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
