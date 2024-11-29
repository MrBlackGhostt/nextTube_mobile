import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useWindowDimensions } from "react-native";

const LocalData = () => {
    const {width} = useWindowDimensions()
  return (
    <View className="flex-2 gap-3 px-5 h-[300]  rounded-lg bg-slate-600" >
      <View>
        <Text className="text-2xl font-extrabold">Last Watch</Text>
      </View>
      <ScrollView horizontal={true}>
        <View className="gap-5" style={{ flexWrap: "wrap" }}>
          {Array.from({ length: 100 }).map((_, i) => (
            <View className="flex-row gap-2" style={{width}}>
             <Image style={styles.thumbnail} source={require('../assets/images/logo1.webp')} />
              <Text className="w-3/5 text-ellipsis text-md font-medium text-white">Hellow World </Text>
            </View>
          ))}
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    thumbnail:{
        width:"20%",
        height:50,
        borderRadius:10
    }
});

export default LocalData;
