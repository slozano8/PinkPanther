import { View, Text, StyleSheet } from "react-native";

export default function MovieDetail({ route }) {
  const movies = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movies.item.original_title}</Text>
      <Text style={styles.detail}>Overview: {movies.item.overview}</Text>
      <Text style={styles.detail}>
        Release Date: {movies.item.release_date}
      </Text>
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
