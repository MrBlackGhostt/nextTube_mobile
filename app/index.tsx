
import { StatusBar } from "expo-status-bar";
import React from "react";

import { Text, View, StyleSheet } from "react-native";
import "../global.css"
import Navbar from "@/components/navbar";
export default function App() {
  return (
    <View className="flex-1 px-5 bg-gray-600">
    <Navbar />
    {/* <Text className="text-yellow-200 text-3xl">Hey! Welcome.</Text> */}
    {/* <StatusBar style="light" /> */}
    {/* <Link href="/home/home">Go Home</Link> */}
  </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: 10,
      height: 10,
      backgroundColor: '#0553',
    },
})