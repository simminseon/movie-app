import React from "react";
import PropTypes from "prop-types";
import * as Styles from "./style";
function MovieItem({ movie }) {
  const { id, medium_cover_image, title, year, genres, summary, url } = movie;

  return (
    <Styles.ItemMovie>
      <Styles.LinkMovie
        to={{
          pathname: `/movie/${id}`,
        }}
        state={{ medium_cover_image, title, year, genres, summary, url }}
      >
        <Styles.ThumbMovie>
          <img src={medium_cover_image} alt={title} />
        </Styles.ThumbMovie>
        <div>
          <Styles.TitleMovie>{title}</Styles.TitleMovie>
          <Styles.YearMovie>{year}</Styles.YearMovie>
          {genres && (
            <Styles.GenresListMovie>
              {genres.map((genre) => (
                <Styles.GenresMovie key={`genre-${genre}`}>
                  {genre}
                </Styles.GenresMovie>
              ))}
            </Styles.GenresListMovie>
          )}

          <Styles.SummeryMovie>{summary}</Styles.SummeryMovie>
        </div>
      </Styles.LinkMovie>
    </Styles.ItemMovie>
  );
}

MovieItem.propTypes = {
  medium_cover_image: PropTypes.string,
  title: PropTypes.array,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  url: PropTypes.string,
};

export default MovieItem;
