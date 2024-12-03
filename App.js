import React, { useState, useEffect, useRef } from "react";
import '@expo/metro-runtime';
import { View, Text, Image, StyleSheet, Platform, ScrollView, Button, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NetInfo from "@react-native-community/netinfo";
import { SwipeListView } from "react-native-swipe-list-view";
import Modal from "react-native-modal";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";

const HomeIcon = require("./assets/house-icon.png");
const HomeIconOutline = require("./assets/house-outline-icon.png");
const FilmIcon = require("./assets/film-icon.png");
const FilmIconOutline = require("./assets/film-outline-icon.png");

const Tab = createBottomTabNavigator();

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected",
  other: "Connected",
};

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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "white",
  },
  hiddenItem: {
    alignItems: "flex-end",
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    paddingRight: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

// Example of a screen component with ScrollView, Swipeable, and Modal
function MovieList1() {
  const [movies, setMovies] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    // Fetch movies from API
    fetch("https://image.tmdb.org/t/p/w500/${item.poster_path}")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSwipe = (item) => {
    setSelectedItem(item.title);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SwipeListView
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          )}
          renderHiddenItem={({ item }) => (
            <View style={styles.hiddenItem}>
              <Button title="Show" onPress={() => handleSwipe(item)} />
            </View>
          )}
          rightOpenValue={-75}
        />
      </ScrollView>
      <Modal isVisible={modalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{selectedItem}</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}


