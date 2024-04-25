import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import LoginScreen from "./(screens)/LoginScreen";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return <Redirect href="/(screens)/LoginScreen" />;
};

export default App;
