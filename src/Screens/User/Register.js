import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Input } from "@rneui/themed";
import Phone from "react-native-vector-icons/FontAwesome";

const Register = ({ navigation }) => {
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [otp, setOtp] = useState();
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");
  const [count, setCount] = useState(60);

  const GetOtp = () => {
    const min = 100000;
    const max = 999999;
    const Otp = Math.floor(Math.random() * (max - min + 1)) + min;
    setOtp(Otp);
    setCount(60);
  };

  const VerifyOTP = () => {
    const enteredOTP = `${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`;
    if (otp === parseInt(enteredOTP)) {
      navigation.navigate("Product Details");
    } else {
      Alert.alert("Invalid OTP");
    }
  };

  useEffect(() => {
    const intervel = setInterval(() => {
      if (count == 0) {
        clearInterval(intervel);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, [count]);

  return (
    <ScrollView>
      {otp ? (
        <View style={styles.imageView}>
          <Phone name="lock" size={70} color="#1899e4" />
          <Text style={styles.login}>OTP VERIFICATION</Text>
        </View>
      ) : (
        <View style={styles.imageView}>
          <Phone name="user-circle" size={70} color="#1899e4" />
          <Text style={styles.login}>REGISTRER</Text>
        </View>
      )}
      {otp ? (
        <View style={styles.form}>
          <View style={styles.otpView}>
            <TextInput
              ref={et1}
              value={pin1}
              style={[
                styles.otpText,
                { borderColor: pin1.length >= 1 ? "#1899e4" : "gray" },
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(txt) => {
                setPin1(txt);
                if (txt.length >= 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et2}
              value={pin2}
              style={[
                styles.otpText,
                { borderColor: pin2.length >= 1 ? "#1899e4" : "gray" },
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(txt) => {
                setPin2(txt);
                if (txt.length >= 1) {
                  et3.current.focus();
                } else if (txt.length < 1) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              ref={et3}
              value={pin3}
              style={[
                styles.otpText,
                { borderColor: pin3.length >= 1 ? "#1899e4" : "gray" },
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(txt) => {
                setPin3(txt);
                if (txt.length >= 1) {
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et4}
              value={pin4}
              style={[
                styles.otpText,
                { borderColor: pin4.length >= 1 ? "#1899e4" : "gray" },
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(txt) => {
                setPin4(txt);
                if (txt.length >= 1) {
                  et5.current.focus();
                } else if (txt.length < 1) {
                  et3.current.focus();
                }
              }}
            />
            <TextInput
              ref={et5}
              value={pin5}
              style={[
                styles.otpText,
                { borderColor: pin5.length >= 1 ? "#1899e4" : "gray" },
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(txt) => {
                setPin5(txt);
                if (txt.length >= 1) {
                  et6.current.focus();
                } else if (txt.length < 1) {
                  et4.current.focus();
                }
              }}
            />
            <TextInput
              ref={et6}
              value={pin6}
              style={[
                styles.otpText,
                { borderColor: pin6.length >= 1 ? "#1899e4" : "gray" },
              ]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(txt) => {
                setPin6(txt);
                if (txt.length < 1) {
                  et5.current.focus();
                }
              }}
            />
          </View>
          <View style={styles.ResendOtp}>
            <TouchableOpacity
              disabled={count == 0 ? false : true}
              onPress={GetOtp}
            >
              <Text
                style={[
                  styles.resendText,
                  { color: count == 0 ? "blue" : "gray" },
                ]}
              >
                Resend OTP
              </Text>
            </TouchableOpacity>
            {count !== 0 && (
              <Text
                disabled={count == 0 ? true : false}
                style={[
                  styles.resendText,
                  { color: count == 0 ? "blue" : "gray" },
                ]}
              >
                {count} Seconds
              </Text>
            )}
          </View>
          <TouchableOpacity
            disabled={
              pin1 !== "" &&
              pin2 !== "" &&
              pin3 !== "" &&
              pin4 !== "" &&
              pin5 !== "" &&
              pin6 !== ""
                ? false
                : true
            }
            style={[
              styles.CButton,
              {
                backgroundColor:
                  pin1 !== "" &&
                  pin2 !== "" &&
                  pin3 !== "" &&
                  pin4 !== "" &&
                  pin5 !== "" &&
                  pin6 !== ""
                    ? "#1899e4"
                    : "gray",
              },
            ]}
            onPress={VerifyOTP}
          >
            <Text style={styles.btnText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          <Input
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(value) => SetPhoneNumber(value)}
            leftIcon={<Phone name="mobile-phone" size={40} color="gray" />}
          />
          <TouchableOpacity
            disabled={
              phoneNumber.length < 10 && phoneNumber === "" ? true : false
            }
            style={[
              styles.CButton,
              { backgroundColor: phoneNumber.length < 10 ? "gray" : "#1899e4" },
            ]}
            onPress={GetOtp}
          >
            <Text style={styles.btnText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.dontHaveAccount}>
        <Text
          style={styles.signupText}
          onPress={() => navigation.navigate("Login")}
        >
          If you have account Login
        </Text>
      </TouchableOpacity>
      {otp && (
        <View style={styles.sendedOTP}>
          <Text style={styles.sededOtpTxt}>Your OTP - </Text>
          <Text style={styles.sededOtpTxt}>{otp}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  imageView: {
    alignItems: "center",
    padding: "5%",
    marginTop: "30%",
  },
  login: {
    fontSize: 30,
    color: "#1899e4",
  },
  form: {
    padding: 5,
    marginTop: "13%",
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
  dontHaveAccount: {
    marginRight: 15,
    alignItems: "flex-end",
  },
  signupText: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 17,
  },
  otpView: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpText: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    borderColor: "gray",
  },
  ResendOtp: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  resendText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  sendedOTP: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    marginTop: 80,
  },
  sededOtpTxt: {
    fontSize: 20,
  },
});
