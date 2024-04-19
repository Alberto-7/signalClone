import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import Home from "./(tabs)/Home";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Home></Home>
    </SafeAreaView>
  );
};

export default App;
