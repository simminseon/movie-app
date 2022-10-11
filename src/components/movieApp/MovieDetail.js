import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container, Button, Card, ListGroup } from "react-bootstrap";

function MovieDetail() {
  const location = useLocation();

  const { medium_cover_image, title, year, genres, summary, url } =
    location.state;

  return (
    <Container>
      <Card border="light">
        <Card.Img variant="top" src={medium_cover_image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item variant="primary">{year}</ListGroup.Item>
            <ListGroup.Item>
              {genres &&
                genres.map((genre) => (
                  <GenreStyle key={genre}>{genre}</GenreStyle>
                ))}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              Vestibulum at eros
            </ListGroup.Item>
          </ListGroup>
          <Card.Text>{summary}</Card.Text>
          <div className="d-grid">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(url, "_blank")}
            >
              영화 상세보기
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

const GenreStyle = styled.span`
  padding-right: 10px;
`;

MovieDetail.propTypes = {
  medium_cover_image: PropTypes.string,
  title: PropTypes.array,
  year: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  url: PropTypes.string,
};

export default MovieDetail;
