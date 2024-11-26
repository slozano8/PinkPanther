import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import axios from "axios";

export default function APIList({ url }) {
  const [movies, setMovies] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState(
    Dimensions.get("window")
  );

  useEffect(() => {
    // gets the window size dynamically
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setWindowDimensions(window);
    });
    return () => subscription?.remove(); // clean up the listener
  }, []);

  useEffect(() => { // Get data for list
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data.results;
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dynamicStyles = () => { // Dynamic stylesheet
    return {
      movieItem: {
        flexDirection: windowDimensions.width > 600 ? "row" : "column",
      },
    };
  };

  return (
    <FlatList
      style={styles.movieList}
      data={movies}
      renderItem={({ item }) => (
        <View style={[styles.movieItem, dynamicStyles().movieItem]}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
            style={styles.movieImage}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textOverview}>{item.overview}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  movieList: {
    backgroundColor: "ghostwhite",
  },
  movieItem: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    height: 300,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "ghostwhite",
    padding: 5,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieImage: {
    height: 300,
    width: 200,
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "ghostwhite",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    marginTop: 10,
  },
  textTitle: {
    fontFamily: "Calibri",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  textOverview: {
    fontFamily: "Calibri",
    fontSize: 18,
    textAlign: "center",
  },
});
