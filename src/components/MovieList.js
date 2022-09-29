import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./style";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <Styles.ListMovie>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Styles.ListMovie>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
