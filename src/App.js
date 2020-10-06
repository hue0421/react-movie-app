import React from "react";
import "./App.css";
import List from "./moviePage/List";
import Movie from "./moviePage/Movie";
import styled from "styled-components";
import { Route } from "react-router-dom";
import ListDetail from "./moviePage/ListDetail";

const AppBackground = styled.div`
  background-image: url("../images/background.jpg");
  height: auto;
  background-size: 200px 100px;
`;
function App() {
  return (
    <AppBackground>
      <Route path="/list" exact={true} component={List}></Route>
      <Route path="/" exact={true} component={Movie}></Route>
      <Route path="/listdetail/:id" exact={true} component={ListDetail}></Route>
    </AppBackground>
  );
}

export default App;
