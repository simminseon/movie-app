import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
// import { useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

const categories = [
  {
    name: "date_added",
    text: "업로드순",
  },
  {
    name: "title",
    text: "제목순",
  },
  {
    name: "rating",
    text: "평점순",
  },
  {
    name: "like_count",
    text: "좋아요순",
  },
];

function MovieApp() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("default");

  const params = useParams();
  const sort = params.sort;
  const query = sort === "movieApp" ? "date_added" : sort;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://yts-proxy.now.sh/list_movies.json?sort_by=${query}`
        );
        setMovies(response.data.data.movies);
      } catch (e) {
        console.log(e, "에러발생!!!!!!");
      }
      setLoading(false);
    };
    fetchData();
  }, [query]);
  if (loading) {
    return <Container className="mt-5">로딩중</Container>;
  }

  if (!movies) {
    return null;
  }

  return (
    <>
      <Container className="mt-5">
        <Nav
          variant="pills"
          defaultActiveKey={active}
          onSelect={(selectedKey) => setActive(selectedKey)}
        >
          {categories.map((c, i) => (
            <Nav.Item key={c.name}>
              <Nav.Link
                as={Link}
                to={`/${c.name}`}
                eventKey={c.name === "date_added" ? "default" : `link-${i}`}
              >
                {c.text}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
      <MovieList movies={movies} />
    </>
  );
}

export default MovieApp;
