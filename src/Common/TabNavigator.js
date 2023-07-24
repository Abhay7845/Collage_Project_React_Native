import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TabNavigator = () => {
  return (
    <View style={styles.TabNavigator}>
      <View style={styles.TabIcon}>
        <Icon
          name="home"
          size={28}
          color="#ddd9d9"
          // onPress={() => navigation.navigation.navigate("Home")}
        />
        <Text style={{ color: "#ddd9d9" }}>Home</Text>
      </View>
      <View style={styles.TabIcon}>
        <Icon
          name="shopping-cart"
          size={28}
          color="#ddd9d9"
          // onPress={() => navigation.navigate("Product Details")}
        />
        <Text style={styles.TabIcon}>Product</Text>
      </View>
      <View style={styles.TabIcon}>
        <Icon name="user-circle-o" size={28} color="#ddd9d9" />
        <Text style={styles.TabIcon}>Profile</Text>
      </View>
      <View style={styles.TabIcon}>
        <Icon name="list-ul" size={28} color="#ddd9d9" />
        <Text style={styles.TabIcon}>More</Text>
      </View>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  TabNavigator: {
    backgroundColor: "#242222",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
    paddingBottom: 16,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  TabIcon: {
    color: "#ddd9d9",
    alignItems: "center",
  },
});
