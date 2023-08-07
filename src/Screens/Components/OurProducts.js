import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import TabNavigator from "../../Common/TabNavigator";
import AboutImg from "../../../assets/laptop.png";

const OurProducts = () => {
  const imageUrl =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.productHeading}>Our Products</Text>
        <View style={styles.productsView}>
          <Image
            source={AboutImg}
            alt="url.png"
            style={styles.proImg}
            resizeMode="center"
          />
          <View style={styles.productDetails}>
            <Text style={styles.proHeading}>LAPTOP</Text>
            <Text style={styles.description}>
              HP 15s (2023) Athlon Dual Core 3050U - (8 GB/512 GB SSD/Windows 11
              Home) 15s-ey1509AU Thin and Light L...
            </Text>
            <View style={styles.price}>
              <Text style={styles.text}>₹ 35,999</Text>
              <Text style={styles.text}>512 GB SSD</Text>
              <Text style={styles.text}>8GB DDR4 RAM</Text>
            </View>
            <View style={styles.price}>
              <Text style={styles.text}>Dilivery(Feb-10, 2023) </Text>
              <Text style={styles.text}>1 Years Warranty</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OurProducts;

const styles = StyleSheet.create({
  productHeading: {
    textAlign: "center",
    fontSize: 25,
    color: "#0cacb8",
    marginBottom: 20,
  },
  productsView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  proImg: {
    width: 120,
    height: 120,
  },
  productDetails: {
    width: "71%",
  },
  proHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0cacb8",
  },
  description: {
    fontSize: 15,
    color: "#1483f1",
    textAlign: "justify",
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
  },
  text: {
    fontWeight: "bold",
  },
});
