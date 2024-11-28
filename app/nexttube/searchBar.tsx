import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import Tags from "@/components/tags";

const SearchBar = () => {
  return (
    <View className="flex-1 px-5 pt-3 bg-black">
      {/* Search Bar */}

      <View className="" style={styles.searchSection}>
        <TextInput
          className="rounded-s-lg"
          style={styles.input}
          placeholder="Search!"
          onChangeText={(newText) => {
            console.log("Text");
            // setText(newText)
          }}
          // underlineColorAndroid="transparent"
          defaultValue={""}
        />
        <Ionicons
          style={styles.searchIcon}
          className="rounded-lg"
          name="search-sharp"
          size={36}
          color="gray"
        />
      </View>

      {/*  Tag for better search */}
      <Tags />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "black",
  },
  searchIcon: {
    paddingLeft: 7,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 30,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "gray",
    color: "black",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  image: {
    height: 40,
    paddingLeft: 0,
    backgroundColor: "red",
  },
});
