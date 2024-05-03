import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import CustomListItem from "../components/CustomListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, router } from "expo-router";
import { Avatar } from "@rneui/base";
import { auth } from "@/firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        router.replace("/(screens)/LoginScreen");
      })
      .catch((error) => console.log("SOMETHING WENT WRONG"));
  };
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "Signal",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: { color: "black" },
          headerTintColor: "black",
          headerLeft: () => (
            <View className="ml-5">
              <Pressable onPress={signOut}>
                <Avatar
                  rounded
                  source={{ uri: auth?.currentUser?.photoURL ?? "" }}
                />
              </Pressable>
            </View>
          ),
          headerRight: () => (
            <View className="flex-row justify-between w-20 mr-5">
              <Pressable>
                <AntDesign name="camerao" size={24} color="black" />
              </Pressable>
              <Pressable onPress={() => router.push("/(screens)/AddChat")}>
                <SimpleLineIcons name="pencil" size={24} color="black" />
              </Pressable>
            </View>
          ),
        }}
      />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
