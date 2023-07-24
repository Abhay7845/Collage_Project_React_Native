import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/User/Login";
import Register from "./src/Screens/User/Register";
import OurProducts from "./src/Screens/Authenticated/OurProducts";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product Details"
          component={OurProducts}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
