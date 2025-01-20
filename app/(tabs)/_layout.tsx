import React from "react";
import { Image, Platform, Text, View } from "react-native";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello React Native</Text>
      <Text style={{ fontSize: 30 }}>Like</Text>
      <Text style={{ fontSize: 30 }}>Share</Text>
    </View>
  );
}
