import React, { useCallback, useEffect, useState } from "react";
import MovieList from "./MovieList";
import { Link, useParams } from "react-router-dom";
import { Nav, Container, Form } from "react-bootstrap";
import useFetch from "../../Hooks/useFetch";

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
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState("default");
  const [value, setValue] = useState("");
  const params = useParams();
  const sort = params.sort;
  const query = sort === "movieApp" ? "date_added" : sort;
  const [data, loading] = useFetch(
    `https://yts-proxy.now.sh/list_movies.json?sort_by=${query}`
  );

  useEffect(() => {
    if (data) {
      setMovies(data.data.movies);
    }
  }, [data]);

  const onChangeHandle = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const filterMovies = movies.filter((data) => {
    return data.title.toUpperCase().includes(value.toUpperCase());
  });

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
      <Container className="mt-5">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="영화 제목 찾기"
            className="me-2"
            aria-label="Search"
            value={value}
            onChange={onChangeHandle}
          />
        </Form>
      </Container>
      {loading ? (
        <Container className="mt-5">로딩중</Container>
      ) : filterMovies.length === 0 ? (
        <Container className="mt-5">검색결과 없음</Container>
      ) : (
        <MovieList movies={filterMovies} />
      )}
    </>
  );
}

export default MovieApp;
