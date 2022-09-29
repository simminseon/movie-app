import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";

function MovieApp() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?sort_by:rating"
        );
        setMovies(response.data.data.movies);
      } catch (e) {
        console.log(e, "에러발생!!!!!!");
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>로딩중</div>;
  }

  if (!movies) {
    return null;
  }
  // console.log(movies);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export default MovieApp;
