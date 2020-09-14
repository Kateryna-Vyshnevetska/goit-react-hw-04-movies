import React, { useState, useEffect } from "react";
import { MoviesList } from "../../components/moviesList/MoviesList";
import { getPopularMovies } from "../../components/requests";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPopularMovies();
      setMovies(data);
    })();
  }, []);

  return (
    <>
      {/* <MoviesPage/> */}
      <MoviesList movies={movies} />
    </>
  );
};
export default HomePage;
