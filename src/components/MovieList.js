import React from "react";
import * as Styles from "./style";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <Styles.ListMovie>
      {movies.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
    </Styles.ListMovie>
  );
}

export default MovieList;
