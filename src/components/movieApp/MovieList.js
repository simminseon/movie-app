import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import { Container, Col, Row } from "react-bootstrap";

function MovieList({ movies }) {
  return (
    <>
      <Container className="mt-5">
        <Row xs={1} md={2}>
          {movies.map((movie) => (
            <Col key={movie.id}>
              <MovieItem movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
