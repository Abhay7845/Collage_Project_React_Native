import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/Entypo";
import Phone from "react-native-vector-icons/FontAwesome";
import GIcon from "../../../assets/googleBtn.png";

const Login = ({ navigation }) => {
  const [passwordShown, setPasswordShown] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  console.log("phoneNumber=>", typeof phoneNumber);
  console.log("password=>", password);

  const TogglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const GetLogin = () => {
    navigation.navigate("Product Details");
  };

  return (
    <ScrollView>
      <View style={styles.imageView}>
        <Icon name="user" size={70} color="#1899e4" />
        <Text style={styles.login}>LOGIN</Text>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Phone Number"
          keyboardType="numeric"
          maxLength={10}
          leftIcon={<Phone name="mobile-phone" size={40} color="gray" />}
          onChangeText={(value) => setPhoneNumber(value)}
        />
        <Input
          placeholder="Password"
          maxLength={8}
          secureTextEntry={passwordShown}
          leftIcon={<Icon name="lock" size={30} color="gray" />}
          rightIcon={
            <Icon
              name={passwordShown ? "eye-with-line" : "eye"}
              size={28}
              color="gray"
              onPress={TogglePassword}
            />
          }
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity
          disabled={
            phoneNumber.length >= 10 && password.length >= 4 ? false : true
          }
          style={[
            styles.CButton,
            {
              backgroundColor:
                phoneNumber.length >= 10 && password.length >= 4
                  ? "#1899e4"
                  : "#8080806f",
            },
          ]}
          onPress={GetLogin}
        >
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.dontHaveAccount}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate("Register")}
        >
          Don't have an account Sign up
        </Text>
      </TouchableOpacity>
      <View style={styles.loginWithGoogle}>
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
          <Text style={{ width: 20, textAlign: "center" }}>OR</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        </View>
        <TouchableOpacity style={styles.GoogleBtn}>
          <View style={{ flexDirection: "row" }}>
            <Image source={GIcon} style={{ height: 23, width: 23 }} />
            <Text style={styles.btnText}>LOGIN WITH GOOGLE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.GithubBtn]}>
          <View style={{ flexDirection: "row" }}>
            <Phone name="github" size={24} color="white" />
            <Text style={styles.btnText}>LOGIN WITH GITHUB</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  imageView: {
    alignItems: "center",
    padding: "5%",
    marginTop: "15%",
  },
  login: {
    fontSize: 30,
    color: "#1899e4",
  },
  form: {
    padding: 5,
    marginTop: "8%",
  },
  CButton: {
    backgroundColor: "#1899e4",
    padding: 14,
    borderRadius: 2,
    alignItems: "center",
    margin: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  loginWithGoogle: {
    marginTop: "15%",
    margin: 5,
  },
  GoogleBtn: {
    backgroundColor: "#4285f4",
    padding: 14,
    borderRadius: 2,
    alignItems: "center",
    margin: 10,
  },
  GithubBtn: {
    backgroundColor: "#302823",
    padding: 14,
    borderRadius: 2,
    alignItems: "center",
    margin: 10,
  },
  dontHaveAccount: {
    marginRight: 15,
    alignItems: "flex-end",
  },
  signupText: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 17,
  },
});
