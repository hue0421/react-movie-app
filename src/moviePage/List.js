import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;
const ListBoxStyle = styled.div`
  width: 400px;
  height: 150px;
  display: inline-block;
  background-color: slateblue;
  position: relative;
  top: 10px;
  left: 50px;
  border-radius: 6px;
  padding: 20px 30px;
  box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
  margin: 10px;
`;
const ImageStyle = styled.img`
  background-size: 100% 100%;
  width: 150px;
  height: 150px;
`;

const TitleStyle = styled.div`
  text-align: left;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;
const ButtonStyle = styled.button``;
const TextStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
`;

const List = () => {
  //const movie = { id, title, rating, summary, medium_cover_image };
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "get",
    })
      .then(function (res) {
        console.log(1, res);
        return res.json();
      })
      .then(function (res) {
        console.log(2, res);
        setMovie(res);
      }, []);
  }, []);

  function deleteById(movieId) {
    fetch("http://10.100.102.2:8000/api/movie/" + movieId, {
      method: "delete",
    })
      .then(function (res) {
        console.log(1, res);
        return res.text();
      })
      .then(function (res) {
        if (res === "ok") {
          alert(movieId + "번 삭제 완료");
          console.log(2, res);
          setMovie(movie.filter((movie) => movie.id !== movieId));
        } else {
          alert(movieId + "번 삭제에 실패했습니다.");
          console.log(3, res);
        }
      });
  }

  return (
    <div>
      <Header />
      <BoxStyle>
        {movie.map((movie) => (
          <ListBoxStyle>
            <Link to={`/listdetail/${movie.id}`}>
              <ImageStyle src={movie.medium_cover_image} />
            </Link>
            <TextStyle>
              <TitleStyle>{movie.title}</TitleStyle>
              <ButtonStyle onClick={() => deleteById(movie.id)}>
                삭제
              </ButtonStyle>
            </TextStyle>
          </ListBoxStyle>
        ))}
      </BoxStyle>
    </div>
  );
};

export default List;
