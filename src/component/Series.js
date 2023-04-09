import React from "react";
import RecomendedComponent from "./RecomendedComponent";
import first from "../images/rek.png";

const Series = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <RecomendedComponent img={first} name="rame filmi" year={2020} />
      <RecomendedComponent img={first} name="rame filmi" year={2020} />
      <RecomendedComponent img={first} name="rame filmi" year={2020} />
      <RecomendedComponent img={first} name="rame filmi" year={2020} />
      <RecomendedComponent img={first} name="rame filmi" year={2020} />
      <RecomendedComponent img={first} name="rame filmi" year={2020} />
    </div>
  );
};

export default Series;
