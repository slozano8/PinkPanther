import * as React from "react";
import '@expo/metro-runtime';
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, Image, StyleSheet } from "react-native";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";

const HomeIcon = require("./assets/house-icon.png");
const HomeIconOutline = require("./assets/house-outline-icon.png");
const FilmIcon = require("./assets/film-icon.png");
const FilmIconOutline = require("./assets/film-outline-icon.png");

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === "android" && (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={HomeIcon} style={styles.image} />
                ) : (
                  <Image source={HomeIconOutline} style={styles.image} />
                ),
            }}
          />
          <Tab.Screen
            name="Latest Movies"
            component={MovieList}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={FilmIcon} style={styles.image} />
                ) : (
                  <Image source={FilmIconOutline} style={styles.image} />
                ),
            }}
          />
        </Tab.Navigator>
      )}
      {Platform.OS == "ios" && (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={HomeIcon} style={styles.image} />
                ) : (
                  <Image source={HomeIconOutline} style={styles.image} />
                ),
            }}
          />
          <Tab.Screen
            name="Latest Movies"
            component={MovieList}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={FilmIcon} style={styles.image} />
                ) : (
                  <Image source={FilmIconOutline} style={styles.image} />
                ),
            }}
          />
        </Tab.Navigator>
      )}
      {/* This is for testing, I build using web browser */}
      {Platform.OS == "web" && (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={HomeIcon} style={styles.image} />
                ) : (
                  <Image source={HomeIconOutline} style={styles.image} />
                ),
            }}
          />
          <Tab.Screen
            name="Latest Movies"
            component={MovieList}
            options={{
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image source={FilmIcon} style={styles.image} />
                ) : (
                  <Image source={FilmIconOutline} style={styles.image} />
                ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
