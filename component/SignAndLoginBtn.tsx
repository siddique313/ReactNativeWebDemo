import { useNavigation } from "expo-router";
import React, { Children, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

function SignAndLoginBtn<T>({ children }) {
  const navigate = useNavigation();
  const [btnSet, setBtn] = useState("");
  return (
    <TouchableOpacity
      style={{
        width: 164,
        height: 60,
        backgroundColor: "#6459ff",
        borderRadius: 30,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 30 }}>
        {btnSet === "" ? children : children}
      </Text>
    </TouchableOpacity>
  );
}

export default SignAndLoginBtn;
