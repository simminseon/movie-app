import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListMovie = styled.ul`
  padding: 40px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ItemMovie = styled.li`
  width: 48%;
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  list-style: none;
  box-sizing: border-box;
`;

export const LinkMovie = styled(Link)`
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
`;
export const ThumbMovie = styled.div`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);

  img {
    width: 100%;
  }
`;

export const TitleMovie = styled.strong`
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
  font-weight: 300;
`;

export const YearMovie = styled.div`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 300;
`;

export const GenresListMovie = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;

export const GenresMovie = styled.span`
  padding-right: 10px;
`;

export const SummeryMovie = styled.p`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;
