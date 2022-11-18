import { Navigation } from "./src/navigations/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import {StyleSheet} from "react-native";
import axios from "axios";


axios.defaults.baseURL="https://api.themoviedb.org/3/movie"
axios.defaults.params={
  api_key:"07ee16f76ebcf1ca228ac7e190cb11e4",
  language: "es-ES",
}
export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
