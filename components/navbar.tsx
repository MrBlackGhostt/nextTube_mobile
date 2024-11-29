import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Image } from "expo-image";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const Navbar = () => {
  return (
    <View className=" flex-row w-full h-auto justify-between bg-slate-800 rounded-lg">
      <Image
        style={styles.image}
        source={require("../assets/images/logo3.png")}
      />

      {/* Left Side of top */}
      <View className="flex-row justify-around items-center ">
        {/* Icon of the search bar to go to search screen  */}
        <Link href="/nexttube/searchBar">
          <Ionicons name="search-sharp" size={32} color="gray" />
        </Link>
        <Image
          style={styles.image}
          source={require("../assets/images/logo3.png")}
        />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    paddingLeft: 0,
  },
});
