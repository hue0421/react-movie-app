import React, { useState } from "react";
import styled from "styled-components";
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
const Submit = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });
  let jsonMovie = JSON.stringify(movie);
  console.log(jsonMovie);

  function inputHandle(e) {
    //console.log(e.target.value);
    setMovie({ ...movie, [e.target.name]: e.target.value });
    //console.log(movie);
  }

  function submitMovie(e) {
    e.preventDefault(); //submit 되지마라
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: jsonMovie,
    })
      .then((res) => res.text())

      .then((res) => {
        if (res === "ok") {
          alert("영화가 저장되었습니다");
        }
      });
  }
  return (
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
        <button onClick={submitMovie}>등록</button>
      </form>
    </SearchStyle>
  );
};

export default Submit;
