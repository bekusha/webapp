import React from "react";
import "./Bookmarked.css";
import { useContext } from "react";
import { AppContext } from "./test/Context";

import RecomendedComponent from "./RecomendedComponent";
const Bookmarked = () => {
  const array = useContext(AppContext);

  return (
    <div className="contextcontainer">
      {array.bookmarks.map((movie) => {
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
  );
};

export default Bookmarked;
