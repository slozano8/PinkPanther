import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=bc2fe3535276b345b0cc283587327106');
        const data = await response.data.results;
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <View style={styles.movieItem}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.movieImage} />
          <Text>{item.title}</Text>
          <Text>{item.overview}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  movieItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius:   
 3.84,
    elevation: 5,
  },
  movieImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardContent: {
    marginTop: 10,
  },
});

export default MoviesScreen;