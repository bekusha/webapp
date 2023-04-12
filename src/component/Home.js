import React from "react";
import search from "../images/search.png";
import "./Home.css";
import TrandingComponent from "./TrandingComponent";

import RecomendedComponent from "./RecomendedComponent";
import { useContext } from "react";

import { AppContext } from "./test/Context";

const Home = (props) => {
  const movies = useContext(AppContext);

  return (
    <div className="home">
      <div className="input">
        <img className="searchIcon" src={search} alt="" />
        <input type="text" placeholder="search.." />
      </div>
      <h3 className="tranding">Tranding</h3>
      <div className="trandItems">
        {movies.movies.map((movie) => {
          return (
            <TrandingComponent
              name={movie.name}
              class={movie.class}
              img={movie.img}
            />
          );
        })}
      </div>
      <h3 className="recomended">Recomended for you</h3>
      <div className="recomendItems">
        {movies.movies.map((movie) => {
          return (
            <RecomendedComponent
              img={movie.img}
              name={movie.name}
              class={movie.class}
              year={movie.year}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
