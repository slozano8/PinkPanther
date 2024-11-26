import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import APIList from "../components/api";

const header_img = require("../assets/pinkPanther.png");

export default function MovieList() {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={header_img}
          style={styles.headerImg}
          accessibilityHint="Pink Panther"
        />
        <Text style={styles.h1}>Hello, from the movie screen!</Text>
      </View>
      <ScrollView>
        <APIList url="https://api.themoviedb.org/3/movie/popular?api_key=bc2fe3535276b345b0cc283587327106" />
      </ScrollView>
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
