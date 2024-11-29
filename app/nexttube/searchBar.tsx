import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import Tags from "@/components/tags";

const SearchBar = () => {
  return (
    <View className="flex-2 gap-4 px-5 pt-3 bg-black" style={styles.container}>
      {/* Search Bar */}

      <View className="w-full " style={styles.searchSection}>
        <TextInput
          className="rounded-md"
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
      <View style={styles.tagSection}>
       {/* Tag for better search */}
      <Tags scroll={false}/> 
{/* Passing the true as form index the scroll value is not passing so need to reverse it for now */}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex:3,
    justifyContent:'flex-start',
  },
  searchSection: {
    width: "100%",
    height:40,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
  searchIcon: {
    paddingLeft: 7,
    width:'15%'
  },
  input: {
    width:'85%',
    height: 40,
    borderRadius: 30,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "gray",
    color: "black",
  },
 
  tagSection:{
    flex: 3,
  }
});
