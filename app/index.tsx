import { StatusBar } from "expo-status-bar";
import React from "react";

import { View, StyleSheet } from "react-native";
import "../global.css";
import Navbar from "@/components/navbar";
export default function App() {
  return (
    <View className="flex-1 bg-gray-600">
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: 10,
    height: 10,
    backgroundColor: "#0553",
  },
});
