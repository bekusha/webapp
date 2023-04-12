import React from "react";
import RecomendedComponent from "./RecomendedComponent";
import movie1 from "./movieImages/movie1.png";
import movie2 from "./movieImages/movie2.png";
import movie3 from "./movieImages/Rectangle.png";
import movie4 from "./movieImages/car.png";
import movie5 from "./movieImages/rek.png";
const Movies = (props) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap" }}
      className="moviesContainer"
    >
      <RecomendedComponent
        handleLike={props.shandleLike}
        img={movie1}
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
        img={movie3}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={movie4}
        name="The Great Lands"
        class="Movie"
        year={2019}
      />
      <RecomendedComponent
        img={movie5}
        name="Title Movie"
        class="Movie"
        year={2019}
      />
    </div>
  );
};

export default Movies;
