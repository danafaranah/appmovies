import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useMovieDetails = (movie) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieFull, setMovieFull] = useState({ genres: [] });
  const [cast, setCast] = useState([]);

  // Obtener id de la película
  const getMoreDatails = useCallback(async () => {
    try {
      setIsLoading(true);
      const movieFull = await axios.get(`/${movie.id}`);
      const cast = await axios.get(`/${movie.id}/credits`);

      setMovieFull(movieFull.data);
      setCast(cast.data.cast);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error en getMoreDetails", error);
    }
  }, []);

  useEffect(() => {
    getMoreDatails();
  }, []);

  return {
    isLoading,
    cast,
    movieFull,
  };
};
