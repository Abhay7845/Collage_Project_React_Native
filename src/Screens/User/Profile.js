import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import TabNavigator from "../../Common/TabNavigator";
import backProfile from "../../../assets/skill_developer3.jpg";
import profile from "../../../assets/profile.png";
import Icon from "react-native-vector-icons/Entypo";
import { Input } from "@rneui/themed";

const Profile = () => {
  const [passwordShown, setPasswordShown] = useState(true);

  const TogglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.backImage}
          source={backProfile}
          alt="backProfile"
          resizeMode="cover"
        />
        <View style={styles.fronImageView}>
          <Image style={styles.frontImage} source={profile} alt="backProfile" />
          <Text style={styles.name}>ABHAY ARYAN</Text>
          <Text style={styles.role}>DEVELOPER</Text>
        </View>
        <View style={styles.profileForm}>
          <Text style={styles.infoText}>Name</Text>
          <Input placeholder="Name" value="Abhay Aryan" />
          <Text style={styles.infoText}>Phone</Text>
          <Input placeholder="Phone" value="1234567890" />
          <Text style={styles.infoText}>Email</Text>
          <Input placeholder="Phone" value="abhay@123gmail.com" />
          <Text style={styles.infoText}>Password</Text>
          <Input
            placeholder="Password"
            maxLength={8}
            secureTextEntry={passwordShown}
            value="Abhay@987689"
            rightIcon={
              <Icon
                name={passwordShown ? "eye-with-line" : "eye"}
                size={28}
                color="gray"
                onPress={TogglePassword}
              />
            }
          />
          <Text style={styles.infoText}>User ID</Text>
          <Input placeholder="User Id" value="202202" />
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  backImage: {
    aspectRatio: 1.9,
    height: 235,
  },
  fronImageView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  frontImage: {
    height: 120,
    width: 120,
    borderRadius: 50,
  },
  name: {
    marginTop: 8,
    fontSize: 23,
    fontWeight: "bold",
  },
  role: {
    color: "#928f8f",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  profileForm: {
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 25,
    paddingBottom: 90,
  },
  infoText: {
    fontSize: 20,
    marginLeft: 9,
  },
});
