import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import TabNavigator from "../../Common/TabNavigator";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import AboutImg from "../../../assets/laptop.png";
import moment from "moment";
import { userComments } from "../../DataList";

const More = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.seacrchArea}>
          <Text style={{ fontSize: 25, marginBottom: 16 }}>ABOUT US</Text>
          <Text style={styles.heading}>
            We are here for Creating the all those students they can't lear the
            programming language. then our team will help them to lear easy to
            learn programming language and make your professional life.
          </Text>
          <TouchableOpacity style={styles.CButton}>
            <Text style={{ fontSize: 20, color: "#ffff" }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.joinWithUsForm}>
          <Image
            source={AboutImg}
            style={styles.laptop}
            alt="AboutImg"
            resizeMode="contain"
          />
          <Text style={styles.withUs}>JOIN WITH US</Text>
          <Text style={styles.infoText}>Email Address</Text>
          <Input
            placeholder="Email"
            leftIcon={<Icon name="envelope" size={24} color="gray" />}
          />
          <Text style={styles.infoText}>Comments</Text>
          <Input
            placeholder="Comments"
            leftIcon={<Icon name="commenting" size={24} color="gray" />}
          />
          <TouchableOpacity style={styles.Cbtn}>
            <Text style={{ fontSize: 20, color: "#ffff" }}>COMMENT</Text>
          </TouchableOpacity>
        </View>
        {userComments.length > 0 && (
          <View style={{ marginBottom: "25%", margin: 10 }}>
            <Text style={styles.comntText}>
              Comments By Peoples : {userComments.length}
            </Text>
            <FlatList
              data={userComments}
              renderItem={({ item }) => {
                return (
                  <View style={styles.yourComment}>
                    <View style={styles.cmtPeople}>
                      <View style={{ flexDirection: "row" }}>
                        <Icon name="user-circle-o" size={24} color="gray" />
                        <Text style={styles.userMail}>{item.email}</Text>
                      </View>
                      <Text>{moment(item.date).format("ll")}</Text>
                    </View>
                    <Text style={styles.userCmnt}>{item.comment}.</Text>
                    <View style={styles.CmntLine} />
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  seacrchArea: {
    backgroundColor: "#a5d5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 30,
    paddingTop: 30,
  },
  heading: {
    fontSize: 17,
    textAlign: "justify",
  },
  CButton: {
    backgroundColor: "#1899e4",
    padding: 10,
    borderRadius: 2,
    alignItems: "center",
    marginTop: 30,
    width: "30%",
  },
  joinWithUsForm: {
    paddingTop: 15,
  },
  laptop: {
    aspectRatio: 1,
    height: undefined,
    width: "100%",
    marginTop: -80,
  },
  withUs: {
    textAlign: "center",
    fontSize: 25,
    marginTop: -60,
  },
  infoText: {
    fontSize: 20,
    marginLeft: 9,
  },
  Cbtn: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 2,
    alignItems: "center",
    margin: 10,
  },
  yourComment: {
    margin: 4,
  },
  comntText: {
    color: "gray",
    fontSize: 17,
    marginBottom: 10,
  },
  cmtPeople: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userMail: {
    fontSize: 17,
    marginLeft: 5,
    fontWeight: "bold",
  },
  userCmnt: {
    marginLeft: 30,
    textAlign: "justify",
    fontSize: 17,
    marginTop: 5,
  },
  CmntLine: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 5,
  },
});
