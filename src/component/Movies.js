import React from "react";
import RecomendedComponent from "./RecomendedComponent";
import first from "../images/movie1.png";
import movie2 from "../images/movie2.png";
import movie1 from "../images/movie1.png";
const Movies = (props) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap" }}
      className="moviesContainer"
    >
      <RecomendedComponent
        handleLike={props.shandleLike}
        img={first}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={movie1}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={first}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={movie2}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={first}
        name="Title Movie"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={first}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={first}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={first}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={first}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
    </div>
  );
};

export default Movies;
