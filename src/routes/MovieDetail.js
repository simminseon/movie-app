import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import * as Styles from "./style";

function MovieDetail() {
  const location = useLocation();

  const { medium_cover_image, title, year, genres, summary, url } =
    location.state;

  return (
    <Styles.ItemMovieDetail>
      <Styles.ThumbMovieDetail>
        <img src={medium_cover_image} alt={title} />
      </Styles.ThumbMovieDetail>
      <Styles.ContMovieDetail>
        <Styles.TitleDMovieDetail>{title}</Styles.TitleDMovieDetail>
        <Styles.YearMovieDetail>{year}</Styles.YearMovieDetail>

        <Styles.GenresListMovieDetail>
          {genres &&
            genres.map((genre) => (
              <Styles.GenresMovieDetail>{genre}</Styles.GenresMovieDetail>
            ))}
        </Styles.GenresListMovieDetail>
        <Styles.SummeryMovieDetail>{summary}</Styles.SummeryMovieDetail>
        <Styles.ButtonMovieDetail onClick={() => window.open(url, "_blank")}>
          영화 바로가기
        </Styles.ButtonMovieDetail>
      </Styles.ContMovieDetail>
    </Styles.ItemMovieDetail>
  );
}

MovieDetail.propTypes = {
  medium_cover_image: PropTypes.string,
  title: PropTypes.array,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  url: PropTypes.string,
};

export default MovieDetail;
