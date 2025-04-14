import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";


//? Icons
import AntDesign from '@expo/vector-icons/AntDesign';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ 
          title: "Search", 
          headerShown: false,
          tabBarIcon : ({ focused }) => (
            <>
              <ImageBackground />
            </>
          ) 
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "Saved", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({});

export default Layout;
