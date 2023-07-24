import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const TabNavigator = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.TabNavigator}>
      <TouchableOpacity
        style={styles.TabIcon}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="home" size={28} color="#ddd9d9" />
        <Text style={{ color: "#ddd9d9" }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TabIcon}
        onPress={() => navigation.navigate("Product Details")}
      >
        <Icon name="shopping-cart" size={28} color="#ddd9d9" />
        <Text style={styles.TabIcon}>Product</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TabIcon}
        onPress={() => navigation.navigate("Profile")}
      >
        <Icon name="user-circle-o" size={28} color="#ddd9d9" />
        <Text style={styles.TabIcon}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TabIcon}
        onPress={() => navigation.navigate("Product Details")}
      >
        <Icon name="list-ul" size={28} color="#ddd9d9" />
        <Text style={styles.TabIcon}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  TabNavigator: {
    backgroundColor: "#242222",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 25,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  TabIcon: {
    color: "#ddd9d9",
    alignItems: "center",
  },
});
