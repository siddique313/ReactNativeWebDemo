import React from "react";
import { View } from "react-native";
import SignAndLoginBtn from "@/component/SignAndLoginBtn";
import Form from "../Form";
import { useNavigation } from "expo-router";
export default function TabLayout() {
  const userNavigate = useNavigation();
  return (
    <View
      style={{
        justifyContent: "space-around",
        backgroundColor: "#08204f",
        height: "100%",
      }}
    >
      {/* <Form /> */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          gap: 3,
          display: "flex",
          flexDirection: "row",
          top: 300,
        }}
      >
        <SignAndLoginBtn children="Login" />
        <SignAndLoginBtn children="Sign In" />
      </View>
    </View>
  );
}
