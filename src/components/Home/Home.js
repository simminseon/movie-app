import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";

function Home() {
  const [movies, setMovies] = useState([]);
  const [data, loading] = useFetch(
    `https://yts-proxy.now.sh/list_movies.json?limit=4`
  );

  useEffect(() => {
    if (data) {
      setMovies(data.data.movies);
    }
  }, [data]);

  return (
    <Container className="mt-5">
      <h1 className="mb-5">영화 사이트</h1>
      <strong>최신영화</strong>
      <Row xs={1} md={4}>
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movie.medium_cover_image} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.summary}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => window.open(movie.url, "_blank")}
                >
                  영화 보러가기
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
