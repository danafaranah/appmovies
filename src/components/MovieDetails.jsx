import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import currencyFormatter from "currency-formatter";
import CastItem from "./CastItem";

export default function MovieDetails({ movieFull, cast }) {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="star-outline"
            size={20}
            color="gray"
            style={{ marginRight: 5 }}
          />

          {/* Puntuación */}
          <Text style={{ marginTop: 1 }}>{movieFull.vote_average}</Text>

          {/* Géneros */}

          <Text style={{ marginLeft: 5 }}>
            {" "}
            -{movieFull.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>

        {/* Historia */}
        <Text style={{ marginTop: 10, fontSize: 23, fontWeight: "bold" }}>
          Sinopsis
        </Text>

        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

        {/* Presupuesto */}

        <Text style={{ marginTop: 10, fontSize: 23, fontWeight: "bold" }}>
          Presupuesto
        </Text>

        <Text>
          {currencyFormatter.format(movieFull.budget, { code: "USD" })}
        </Text>

        {/* Casting */}

        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Text style={{ marginTop: 10, fontSize: 23, fontWeight: "bold" }}>
            Actores
          </Text>

          <FlatList
            data={cast}
            renderItem={({ item }) => <CastItem actor={ item } />}
            keyExtractor={(item) => item.id.toString()}
            style={{marginTop:10, height:70}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
