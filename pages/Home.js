import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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
        <Text style={styles.h1}>Hello, from the home screen!</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>This is the body!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFF",
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    backgroundColor: "#F9F9F9",
  },
  h1: {
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "condensed",
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
