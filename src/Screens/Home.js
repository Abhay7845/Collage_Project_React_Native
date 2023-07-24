import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import img1 from "../../assets/heading1.webp";
import img2 from "../../assets/heading2.jpg";
import img3 from "../../assets/heading3.jpg";
import { Heading1, Heading2, Heading3, ImageList } from "../DataList";
import TabNavigator from "../Common/TabNavigator";

const Home = ({ navigation }) => {
  const [showMore1, setShowMore1] = useState("");
  const [showMore2, setShowMore2] = useState("");
  const [showMore3, setShowMore3] = useState("");

  return (
    <View>
      <ScrollView>
        <View>
          <View style={styles.seacrchArea}>
            <Text style={styles.heading}>
              Find The Perfect Freelance Service For Your Business
            </Text>
            <View style={styles.searchButton}>
              <TextInput style={styles.CInput} placeholder="Search" />
              <TouchableOpacity style={styles.searchbtn}>
                <Text style={styles.textbtn}>SEARCH</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            style={styles.imageList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ImageList}
            renderItem={({ item }) => {
              return <Image style={styles.image} source={item.img_url} />;
            }}
            keyExtractor={(item) => item.id}
          />
          <View style={{ marginTop: 10 }}>
            <View style={styles.firstImaheInfo}>
              <Image
                style={styles.ImgStyle}
                source={img1}
                resizeMode="contain"
              />
            </View>
            <View style={{ padding: 10 }}>
              <Text style={styles.paraHeading}>Plagiarism Checking</Text>
              <Text style={styles.paragraph}>
                {showMore1 ? Heading1 : `${Heading1.substring(0, 118)}`}
              </Text>
            </View>

            <View style={styles.showDetails}>
              <TouchableOpacity
                style={styles.CButton}
                onPress={() => setShowMore1(!showMore1)}
              >
                <Text style={styles.btnText}>
                  {showMore1 ? "Hide Details" : "View Details"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.firstImaheInfo}>
              <Image
                style={styles.ImgStyle}
                source={img2}
                resizeMode="contain"
              />
            </View>
            <View style={{ padding: 10 }}>
              <Text style={styles.paraHeading}>Writing Enhancements</Text>
              <Text style={styles.paragraph}>
                {showMore2 ? Heading2 : `${Heading1.substring(0, 118)}`}
              </Text>
            </View>
            <View style={styles.showDetails}>
              <TouchableOpacity
                style={styles.CButton}
                onPress={() => setShowMore2(!showMore2)}
              >
                <Text style={styles.btnText}>
                  {showMore2 ? "Hide Details" : "View Details"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 10, marginBottom: "22%" }}>
            <View style={styles.firstImaheInfo}>
              <Image
                style={styles.ImgStyle}
                source={img3}
                resizeMode="contain"
              />
            </View>
            <View style={{ padding: 10 }}>
              <Text style={styles.paraHeading}>Why Use a Plagiarism ?</Text>
              <Text style={styles.paragraph}>
                {showMore3 ? Heading3 : `${Heading1.substring(0, 118)}`}
              </Text>
            </View>
            <View style={styles.showDetails}>
              <TouchableOpacity
                style={styles.CButton}
                onPress={() => setShowMore3(!showMore3)}
              >
                <Text style={styles.btnText}>
                  {showMore3 ? "Hide Details" : "View Details"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  seacrchArea: {
    backgroundColor: "#a5d5f5",
    height: undefined,
    display: "flex",
    paddingTop: "20%",
    alignItems: "center",
    paddingBottom: 50,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
  },
  searchButton: {
    width: "100%",
    padding: 3,
    flexDirection: "row",
    marginTop: 25,
  },
  CInput: {
    borderWidth: 1,
    borderColor: "green",
    width: "85%",
    padding: 8,
    fontSize: 18,
    textAlign: "center",
  },
  searchbtn: {
    backgroundColor: "green",
    color: "white",
    width: "15%",
    paddingRight: 3,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "green",
  },
  textbtn: {
    color: "white",
    fontWeight: "bold",
  },
  firstImaheInfo: {
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    padding: 4,
  },
  ImgStyle: {
    height: undefined,
    width: "45%",
    aspectRatio: 1,
    borderRadius: 200,
  },
  paraHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 17,
    textAlign: "justify",
  },
  showDetails: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 15,
  },
  CButton: {
    backgroundColor: "#1899e4",
    padding: 10,
    borderRadius: 2,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageList: {
    margin: 10,
  },
  image: {
    height: 220,
    width: 380,
    margin: 4,
    borderRadius: 4,
  },
  LogRegBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    width: "100%",
    marginTop: "7%",
    backgroundColor: "transparent",
    paddingTop: "5%",
    paddingBottom: "5%",
  },
});
