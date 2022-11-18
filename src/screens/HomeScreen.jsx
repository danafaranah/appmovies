import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel-v4";
import Movie from "../components/Movie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HorizontalSlider from "../components/HorizontalSlider";
import {useMovies} from "../hooks/useMovies";

const { width: windowWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const {isLoading, peliculas} = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator color="blue" size={80} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 10 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={peliculas.nowPlaying}
            renderItem={({ item }) => <Movie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Populares */}

        <HorizontalSlider movies={peliculas.popular} title="Popular" />

        <HorizontalSlider movies={peliculas.topRated} title="Top Rated" />

        <HorizontalSlider movies={peliculas.upcoming} title="Upcoming" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
