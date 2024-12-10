import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from "react-native";

const header_img = require("../assets/pinkPanther.png");

export default function Home() {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={header_img}
          style={styles.headerImg}
          accessibilityHint="Pink Panther"
        />
        <Text style={styles.h1}>Pink Panther's Movie Pulse!</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>Welcome to Pink Panther Movie Pulse! Dive into the whimsical world of the Pink Panther 
          and stay updated with the latest movie releases. Our platform offers a seamless experience for fans to watch classic Pink Panther films and discover new adventures. With regular updates on the newest movies, you'll never miss out on the latest in the Pink Panther series. 
          Join us for a purr-fectly entertaining journey!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    borderColor: "pink",
    borderWidth: 2,
    ...Platform.select({
      ios: { paddingTop: 55 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  headerContainer: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black",
    borderBottomColor: "pink",
    borderBottomWidth: 2,
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    backgroundColor: "black",
    borderColor: "pink",
    borderWidth: 2,
    padding: 20,
  },
  bodyText: { 
    fontSize: 24, 
    color: "white", 
    textAlign: "center", 
    paddingHorizontal: 10, 
  },
  h1: {
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "pink",
    paddingVertical: 10,
  },
  headerImg: {
    resizeMode: "contain",
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

