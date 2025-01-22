import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Form() {
  const [textInputHandle, setTextInputHandle] = useState("");
  const [textPassword, setTextPassword] = useState("");
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text style={styles.title}>Welcome To App</Text>
      <View style={{ width: "auto" }}>
        <View style={styles.emailContaner}>
          <Text
            style={[
              {
                width: textInputHandle.length ? 40 : 80,
                fontSize: textInputHandle.length ? 14 : 20,
                top: textInputHandle.length ? 15 : 40,
              },
              styles.textEmail,
            ]}
          >
            Email
          </Text>
          <TextInput
            placeholderTextColor={"white"}
            style={styles.emailInput}
            onChange={(text) => {
              setTextInputHandle(text.nativeEvent.text);
            }}
          />
        </View>
        <View>
          <Text
            style={[
              {
                fontSize: textPassword.length ? 14 : 20,
                top: textPassword.length ? 15 : 40,
              },
              styles.textPassword,
            ]}
          >
            Password
          </Text>
          <TextInput
            secureTextEntry
            placeholderTextColor={"white"}
            style={styles.passwordInput}
            onChange={(text) => {
              setTextPassword(text.nativeEvent.text);
            }}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ color: "#fff" }}>forget Password</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  emailInput: {
    fontSize: 20,
    color: "#fff",
    outline: "none",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 30,
    maxHeight: 55,
    paddingLeft: 16,
  },
  textEmail: {
    color: "#fff",
    left: 19,
    backgroundColor: "#08204f",
    zIndex: 3,
    alignItems: "flex-start",
    textAlign: "center",
    animationDuration: "3s",
  },
  passwordInput: {
    fontSize: 20,
    borderColor: "#fff",
    color: "#fff",
    outline: "none",
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
    maxHeight: 55,
  },
  title: {
    marginBottom: 40,
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
  },
  loginBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#6459ff",
    borderRadius: 30,
    alignSelf: "center",
  },
  textLogin: {
    alignSelf: "center",
    fontSize: 20,
  },
  textPassword: {
    color: "#fff",
    left: 19,
    backgroundColor: "#08204f",
    zIndex: 3,
    alignItems: "flex-start",
    textAlign: "center",
    width: 80,
    animationDuration: "3s",
  },
  emailContaner: {
    gap: 0,
  },
  passwordContaner: {
    gap: 0,
    marginBottom: 40,
  },
});
