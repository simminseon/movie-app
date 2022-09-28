import React from "react";
import MovieList from "./MovieList";

const dummy = [
  {
    title: "The Last Train from Madrid",
    year: 1999,
    genres: ["Action", "Adventure", "Drama", "Romance", "War"],
    summary:
      "The story of seven people: their lives and love affairs in Madrid during the Civil War.",
    url: "#none",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/the_last_train_from_madrid_1937/medium-cover.jpg",
  },
  {
    title: "The Last Train from Madrid",
    year: 1999,
    genres: ["Action", "Adventure", "Drama", "Romance", "War"],
    summary:
      "The story of seven people: their lives and love affairs in Madrid during the Civil War.",
    url: "#none",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/the_last_train_from_madrid_1937/medium-cover.jpg",
  },
  {
    title: "The Last Train from Madrid",
    year: 1999,
    genres: ["Action", "Adventure", "Drama", "Romance", "War"],
    summary:
      "The story of seven people: their lives and love affairs in Madrid during the Civil War.",
    url: "#none",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/the_last_train_from_madrid_1937/medium-cover.jpg",
  },
  {
    title: "The Last Train from Madrid",
    year: 1999,
    genres: ["Action", "Adventure", "Drama", "Romance", "War"],
    summary:
      "The story of seven people: their lives and love affairs in Madrid during the Civil War.",
    url: "#none",
    medium_cover_image:
      "https://yts.mx/assets/images/movies/the_last_train_from_madrid_1937/medium-cover.jpg",
  },
];

function MovieApp() {
  return (
    <>
      <MovieList movies={dummy} />
    </>
  );
}

export default MovieApp;
