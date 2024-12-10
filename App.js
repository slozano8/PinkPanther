import React, { useState, useEffect, useRef } from "react";
import "@expo/metro-runtime";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Animated,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import NetInfo from "@react-native-community/netinfo";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";

const HomeIcon = require("./assets/house-icon.png");
const HomeIconOutline = require("./assets/house-outline-icon.png");
const FilmIcon = require("./assets/film-icon.png");
const FilmIconOutline = require("./assets/film-outline-icon.png");

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected",
  other: "Connected",
};

function TabNavigator() {
  return (
    <Tab.Navigator>
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
  );
}

export default function App() {
  const [connected, setConnected] = useState("Checking network...");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(connectedMap[state.type] || "Disconnected");
    });

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      {connected === "Connected" ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            option={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <View style={styles.container}>
          <Text style={styles.message}>
            {connected === "Disconnected"
              ? "No network connection. Please check your internet settings."
              : connected}
          </Text>
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    color: "red",
  },
  image: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
