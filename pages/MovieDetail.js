import { View, Text, StyleSheet, Image } from "react-native";

export default function MovieDetail({ route }) {
  const movies = route.params;

  return (
    <View style={styles.container}>
      {/* Centered Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movies.item.poster_path}`,
          }}
          style={styles.movieImage}
        />
      </View>
      {/* Movie Details */}
      <Text style={styles.title}>{movies.item.original_title}</Text>
      <Text style={styles.detail}>Overview: {movies.item.overview}</Text>
      <Text style={styles.detail}>Release Date: {movies.item.release_date}</Text>
      <Text style={styles.detail}>Rating: {movies.item.vote_average}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    borderColor: "pink",
    borderWidth: 1,
  },
  imageContainer: {
    alignItems: "center", // Centers the image horizontally
    marginBottom: 20, // Adds space below the image
  },
  movieImage: {
    width: 200, // Adjust the width
    height: 300, // Adjust the height
    resizeMode: "cover", // Ensures the image fits nicely
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "pink",
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
  },
});
