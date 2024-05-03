import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Input } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { router } from "expo-router";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, signInWithEmailAndPassword } from "@/firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [paswrd, setPaswrd] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      console.log(auth.currentUser);
      if (auth.currentUser) {
        router.replace("/(screens)/HomeScreen");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, paswrd).catch((error) =>
      alert(error)
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        <View style={{ width: 300 }}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            value={paswrd}
            onChangeText={(text) => setPaswrd(text)}
            onSubmitEditing={signIn}
          />
        </View>

        <Button
          containerStyle={{ width: 200, marginTop: 10 }}
          onPress={signIn}
          title="Login"
        />
        <Button
          containerStyle={{ width: 200, marginTop: 10 }}
          onPress={() => router.push("/(screens)/RegisterScreen")}
          type="outline"
          title="Register"
        />
        <View className="h-100" />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
