import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, Platform, StatusBar } from "react-native";
import APIList from "../components/api";

const header_img = require("../assets/pinkPanther.png");

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch movies from API
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc2fe3535276b345b0cc283587327106")
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <TextInput
        style={styles.searchBox}
        placeholder="Search Movies"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.movieImage} />
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.overview}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
  searchBox: {
    height: 40,
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "white",
    margin: 10,
    width: "90%",
  },
  item: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "black",
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 5,
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  itemDescription: {
    fontSize: 14,
    color: "white",
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


