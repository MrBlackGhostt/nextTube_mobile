import { View, Text } from "react-native";
import React from "react";

const Tags = () => {
  return (
    <View className="bg-red-300">
      {Array.from({ length: 6 }).map((_, i) => (
        <View key={i}>
          <Text> {i + 1}</Text>
        </View>
      ))}
    </View>
  );
};

export default Tags;
