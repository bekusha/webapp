import React from "react";
import search from "../images/search.png";
import "./Home.css";
import TrandingComponent from "./TrandingComponent";
import tranding from "../images/Rectangle.png";
import RecomendedComponent from "./RecomendedComponent";

import car from "../images/car.png";
import { useState } from "react";
import movie1 from "../images/movie1.png";
import movie2 from "../images/movie2.png";

const Home = (props) => {
  const [movies, setMovies] = useState([
    { img: tranding, name: "Beyond Earth", class: "Movie", year: "2010" },
    { img: movie1, name: "first", class: "Movie", year: "2010" },
    { img: movie2, name: "second", class: "Movie", year: "2010" },
    { img: car, name: "third", class: "Movie", year: "2010" },
    { img: tranding, name: "Beyond Earth", class: "Movie", year: "2010" },
    { img: tranding, name: "Beyond Earth", class: "Movie", year: "2010" },
    { img: tranding, name: "Beyond Earth", class: "Movie", year: "2010" },
  ]);

  return (
    <div className="home">
      <div className="input">
        <img className="searchIcon" src={search} alt="" />
        <input type="text" placeholder="search.." />
      </div>
      <h3 className="tranding">Tranding</h3>
      <div className="trandItems">
        {movies.map((movie) => {
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
        {movies.map((movie) => {
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
