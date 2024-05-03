import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "@rneui/base";
import { Stack, useNavigation } from "expo-router";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "../../firebase";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [paswrd, setPaswrd] = useState("");

  // useLayoutEffect(() => {
  //   navigation.setOptions({ headerBackTitle: "new" });
  // }, [navigation]);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, paswrd)
      .then(() => {
        updateProfile(auth.currentUser!, {
          displayName: name,
          photoURL:
            imgUrl || "https://static.thenounproject.com/png/4035892-200.png",
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Stack.Screen options={{ headerTitle: "Back to Login" }} />
        <StatusBar style="light" />
        <Text h3 style={{ marginBottom: 50 }}>
          Create Signal Account
        </Text>
        <View className="w-72">
          <Input
            placeholder="Full Name"
            autoFocus
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
          />
          <Input
            placeholder="Profile Picture URL (optional)"
            value={imgUrl}
            onChangeText={(text) => setImgUrl(text)}
            onSubmitEditing={register}
          />
        </View>
        <Button
          containerStyle={{ width: 200, marginTop: 10 }}
          title="Register"
          onPress={register}
          raised
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;
