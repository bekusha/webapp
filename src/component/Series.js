import React from "react";
import RecomendedComponent from "./RecomendedComponent";

import moon from "../images/moon.png";
import bmw from "../images/bmw.png";
import d from "../images/d.png";
import dog from "../images/dog.png";
const Series = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <RecomendedComponent
        img={moon}
        name="Dark Side of the Moon"
        year={2020}
      />
      <RecomendedComponent
        img={bmw}
        name="Autosport The Seriesdy"
        year={2020}
      />

      <RecomendedComponent img={d} name="The Diary" year={2020} />
      <RecomendedComponent img={dog} name="Dogs" year={2020} />
    </div>
  );
};

export default Series;
