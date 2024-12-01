import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import "../global.css";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";


export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack>
      <Provider store={store} >
        <StatusBar backgroundColor="#000" />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="video" options={{headerShown: false}}  />
        <Stack.Screen name='searchResult' options={{headerShown: false}} />
        </Provider>
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
