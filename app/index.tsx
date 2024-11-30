import { StatusBar } from "expo-status-bar";
import React from "react";

import { View, StyleSheet, ScrollView } from "react-native";
import "../global.css";
import Navbar from "@/components/navbar";
import Tags from "@/components/tags";
import LocalData from "@/components/localData";



import { Provider } from 'react-redux'
import { store } from "./store";
import PostsList from "./PostsList";

export default function App() {
  return (
    <Provider store={store} >
    <View className="flex-1 bg-slate-900">
      <Navbar />
      <View>
      <Tags scroll={true}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={true}>
      <View className="gap-5 bg-slate-900">
      {/* <PostsList/> */}
      {/* {/* <LocalData/> */}
      <LocalData/>
      <LocalData/>
      {/* <LocalData/>
      <LocalData/>
      <LocalData/>
      <LocalData/>
      <LocalData/>
      <LocalData/>  */}
      </View>
      </ScrollView>
    </View>

    </Provider>
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
