import React from "react";
import RecomendedComponent from "./RecomendedComponent";
import movie1 from "./movieImages/movie1.png";
import movie2 from "./movieImages/movie2.png";
import movie3 from "./movieImages/movie3.png";
import movie4 from "./movieImages/Rectangle.png";
import movie5 from "./movieImages/rek.png";

const Series = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <RecomendedComponent img={movie1} name="rame filmi" year={2020} />
      <RecomendedComponent img={movie2} name="rame filmi" year={2020} />
      <RecomendedComponent img={movie3} name="rame filmi" year={2020} />
      <RecomendedComponent img={movie4} name="rame filmi" year={2020} />
      <RecomendedComponent img={movie5} name="rame filmi" year={2020} />
    </div>
  );
};

export default Series;
