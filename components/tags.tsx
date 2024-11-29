import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

interface PropsInterface {
  scroll?: boolean;
}

const Tags = ({ scroll }: PropsInterface) => {
  console.log("hello there", scroll)
  return (
    <ScrollView horizontal={scroll} showsHorizontalScrollIndicator={false}>
      <View style={[styles.tagsContainer, scroll && styles.horizontalContainer]}>
        {Array.from({ length: 10 }).map((_, i) => (
          <View key={i} style={styles.tag}>
            <Text style={styles.tagText}>Tag {i + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Default wrapping for vertical layout
    justifyContent: "flex-start",
  },
  horizontalContainer: {
    flexWrap: "nowrap", // Ensure no wrapping in horizontal mode
  },
  tag: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 10,
    margin: 5,
  },
  tagText: {
    color: "white",
    fontSize: 14,
  },
});

export default Tags;
