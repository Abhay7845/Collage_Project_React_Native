import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import TabNavigator from "../../Common/TabNavigator";
import { ProductsList } from "../../DataList";

const OurProducts = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 100, marginTop: 10 }}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={ProductsList}
            renderItem={({ item }) => {
              return (
                <View style={styles.productsView}>
                  <View style={{ margin: 5 }}>
                    <Image
                      source={{ uri: item.imgUrl }}
                      alt="url.png"
                      style={styles.proImg}
                      resizeMode="center"
                    />
                  </View>
                  <View style={styles.productDetails}>
                    <Text style={styles.proHeading}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.price}>
                      <Text style={styles.text}>₹ {item.price}</Text>
                      <Text style={styles.text}>{item.rom}</Text>
                      <Text style={styles.text}>{item.ram}</Text>
                    </View>
                    <View style={styles.price}>
                      <Text style={styles.text}>{item.diliveryDate}</Text>
                      <Text style={styles.text}>{item.warrenty}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

export default OurProducts;

const styles = StyleSheet.create({
  productsView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  proImg: {
    width: 120,
    height: 130,
    borderRadius: 3,
  },
  productDetails: {
    width: "68%",
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
