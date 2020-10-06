import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
const SearchStyle = styled.div`
  width: 1000px;
  height: 500px;
  display: inline-block;
  background-color: skyblue;
  position: relative;
  top: 10px;
  left: 50px;
  border-radius: 6px;
  padding: 20px 30px;
  box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
`;
const SearchInputStyle = styled.input`
  display: flex;
  grid-template-columns: auto auto;
  height: 45px;
  width: 100%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid rgb(230, 230, 230);
`;
const SearchTextareaStyle = styled.textarea`
  width: 100%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid rgb(230, 230, 230);
`;

const ListDetail = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  let jsonMovie = JSON.stringify(movie);
  console.log(jsonMovie);

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    //console.log(movie);
    console.log(e.target.value);
    console.log(e.target.name);
  }
  console.log("ㅎㅎㅎㅎ");
  console.log(props.match.params.id);
  const id = props.match.params.id;
  console.log(id);
  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "get",
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setMovie(res);
      });
  }, []);

  function update() {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: jsonMovie,
    })
      .then(function (res) {
        console.log(1, res);
        return res.json();
      })
      .then(function (res) {
        if (res === "ok") {
          console.log(2, res);
        } else {
        }
      });
  }

  return (
    <div>
      <Header />
      <SearchStyle>
        <form>
          제목
          <SearchInputStyle
            type="text"
            onChange={inputHandle}
            value={movie.title}
            name="title"
            placeholder="영화제목을 입력하세요"
          />
          평점
          <SearchInputStyle
            type="text"
            onChange={inputHandle}
            value={movie.rating}
            name="rating"
            placeholder="평점을 입력하세요"
          />
          줄거리
          <SearchTextareaStyle
            type="text"
            onChange={inputHandle}
            value={movie.summary}
            name="summary"
            rows="10"
            placeholder="줄거리를 입력하세요"
          />
          사진주소
          <SearchInputStyle
            type="text"
            onChange={inputHandle}
            value={movie.medium_cover_image}
            name="medium_cover_image"
            placeholder="사진주소를 입력하세요"
          />
          <button onClick={update}>수정</button>
        </form>
      </SearchStyle>
    </div>
  );
};

export default ListDetail;
