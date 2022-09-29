import styled from "styled-components";

export const ItemMovieDetail = styled.div`
  overflow: hidden;
  background-color: white;
  margin: 20px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  list-style: none;
  box-sizing: border-box;
`;

export const ThumbMovieDetail = styled.div`
  float: left;
  width: 230px;
  height: 345px;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);

  img {
    width: 100%;
  }
`;

export const ContMovieDetail = styled.div`
  overflow: hidden;
`;

export const TitleDMovieDetail = styled.strong`
  margin-bottom: 5px;
  font-size: 30px;
  color: #2c2c2c;
  font-weight: bold;
`;

export const YearMovieDetail = styled.div`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 300;
`;

export const GenresListMovieDetail = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;

export const GenresMovieDetail = styled.span`
  padding-right: 10px;
`;

export const SummeryMovieDetail = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  max-height: 100px;
  overflow: hidden;
  list-style: none;
  padding: 0;
  margin: 0;
  margin: 5px 0px;
  line-height: 20px;
`;

export const ButtonMovieDetail = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 10px;
  background-color: pink;
  border: 0;
  color: #222;
  border-radius: 20px;
  cursor: pointer;
`;
