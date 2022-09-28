import React from "react";
import * as Styles from "./style";

function MovieItem({ movie }) {
  const { title, year, genres, summary, url, medium_cover_image } = movie;
  //   console.log(movie);
  //   console.log(movie);
  return (
    <>
      <Styles.ItemMovie>
        <Styles.LinkMovie to={url}>
          <Styles.ThumbMovie>
            <img src={medium_cover_image} />
          </Styles.ThumbMovie>
          <div>
            <Styles.TitleMovie>{title}</Styles.TitleMovie>
            <Styles.YearMovie>{year}</Styles.YearMovie>
            <Styles.GenresListMovie>
              {genres.map((genre) => (
                <Styles.GenresMovie>{genre}</Styles.GenresMovie>
              ))}
            </Styles.GenresListMovie>
            <Styles.SummeryMovie>{summary}</Styles.SummeryMovie>
          </div>
        </Styles.LinkMovie>
      </Styles.ItemMovie>
    </>
  );
}

export default MovieItem;
