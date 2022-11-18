import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import MovieDetails from "../components/MovieDetails";
import { useMovieDetails } from "../hooks/useMovieDetails";

const screenHeight = Dimensions.get("screen").height;

export default function DetailScreen({ route }) {
  const movie = route.params;
  const navigation = useNavigation();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator color="grey" size={60} />
      ) : (
        <MovieDetails movieFull={movieFull} cast={cast} />
      )}

      {/* Botón para Volver */}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" color="white" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
}

// Estilos

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 10,
  },

  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: "hidden",
  },

  image: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  backButton: {
    position: "absolute",
    top: 30,
    left: 5,
  },
});
