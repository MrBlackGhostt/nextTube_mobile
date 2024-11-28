import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack>
        <StatusBar backgroundColor="#000" />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      ;
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
  },
});
