import React from "react";
import "./Bookmarked.css";
import { useContext } from "react";
import { AppContext } from "./test/Context";

import RecomendedComponent from "./RecomendedComponent";
const Bookmarked = () => {
  const array = useContext(AppContext);

  return (
    <div className="contextcontainer">
      {array.bookmarks.map((movie, index) => {
        return (
          <>
            <RecomendedComponent
              img={movie.img}
              name={movie.name}
              class={movie.class}
              year={movie.year}
            />
            <button
              onClick={() => array.handleDeleteFromBookmark(index)}
              style={{
                width: 10,
                height: 10,
                backgroundColor: "transparent",
                color: "white",
                border: "none",
              }}
            >
              X
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Bookmarked;
