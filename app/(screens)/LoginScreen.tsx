import { View, Text, Image } from "react-native";
import { Button, Input } from "@rneui/base";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [paswrd, setPaswrd] = useState("");

  const signIn = () => {};

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 items-center justify-start p-10 bg-white"
    >
      <StatusBar style="light" />
      <Image
        style={{ height: 200, width: 200 }}
        source={{
          uri: "https://images.vexels.com/media/users/3/299488/isolated/preview/8c8c1857cbcf222280a12a7f5a122abc-message-chat-bubbles-technology-icon.png",
        }}
      />
      <View className="w-300">
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={paswrd}
          onChangeText={(text) => setPaswrd(text)}
        />
      </View>
      <Button
        containerStyle={{ width: 200, marginTop: 10 }}
        onPress={signIn}
        title="Login"
      />
      <Button
        containerStyle={{ width: 200, marginTop: 10 }}
        type="outline"
        title="Register"
      />
      <View className="h-100" />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
