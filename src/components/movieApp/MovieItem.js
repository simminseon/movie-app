import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListGroup, Button, Card } from "react-bootstrap";

function MovieItem({ movie }) {
  const { id, medium_cover_image, title, year, genres, summary, url } = movie;

  let summaryShort = summary;

  if (summaryShort.length > 150) {
    summaryShort = summaryShort.slice(0, 150) + "...";
  }

  return (
    <Card className="mb-5">
      <CardImgCustom variant="top" src={medium_cover_image} alt={title} />
      <CardBodyCustom>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item variant="primary">{year}</ListGroup.Item>
          <ListGroup.Item>
            {genres &&
              genres.map((genre) => (
                <GenreStyle key={genre}>{genre}</GenreStyle>
              ))}
          </ListGroup.Item>
          <ListGroup.Item variant="primary">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Text>{summaryShort}</Card.Text>
        <Button
          as={Link}
          variant="primary"
          to={{
            pathname: `/movie/${id}`,
          }}
          state={{
            medium_cover_image,
            title,
            year,
            genres,
            summary,
            url,
          }}
        >
          영화 상세보기
        </Button>
      </CardBodyCustom>
    </Card>
  );
}

const CardImgCustom = styled(Card.Img)`
  position: absolute;
  top: -30px;
  width: 150px;
`;

const CardBodyCustom = styled(Card.Body)`
  padding-left: 170px;
`;
const GenreStyle = styled.span`
  padding-right: 10px;
`;

MovieItem.propTypes = {
  medium_cover_image: PropTypes.string,
  title: PropTypes.array,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  url: PropTypes.string,
};

export default MovieItem;
