import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Submit from "./Submit";
const HeaderStyle = styled.div`
  background-image: url("../images/background.jpg");
  height: 200px;
  background-size: 200px 100px;
`;
const HeaderBoxStyle = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
  grid-gap: 30px;
  list-style-type: none;
  color: black;
  font-weight: 800;
`;
const ListStyle = styled.li`
  width: 160px;
  height: 50px;
  display: inline-block;
  background-color: slateblue;
  position: relative;
  top: 10px;
  left: 50px;
  border-radius: 6px;
  padding: 20px 30px;
  font-size: 40px;
  box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
`;
const SubmitStyle = styled.li`
  width: 160px;
  height: 50px;
  display: inline-block;
  background-color: slateblue;
  position: relative;
  top: 10px;
  left: 50px;
  border-radius: 6px;
  padding: 20px 30px;
  font-size: 40px;
  box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
`;

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderBoxStyle>
        <ListStyle>
          <Link to="/list" style={{ textDecoration: "none", color: "white" }}>
            영화목록
          </Link>
        </ListStyle>
        <SubmitStyle>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            영화등록
          </Link>
        </SubmitStyle>
      </HeaderBoxStyle>
    </HeaderStyle>
  );
};

export default Header;
