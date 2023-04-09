import React from "react";
import search from "../images/search.png";
import "./Home.css";
import TrandingComponent from "./TrandingComponent";
import tranding from "../images/Rectangle.png";
import RecomendedComponent from "./RecomendedComponent";
import first from "../images/rek.png";
import car from "../images/car.png";

import movie1 from "../images/movie1.png";
import movie2 from "../images/movie2.png";
const Home = (props) => {
  const arr = [
    {
      name: "123",
      year: 2020,
    },
    {
      name: "444",
      year: 2010,
    },
  ];
  return (
    <div className="home">
      <div className="input">
        <img className="searchIcon" src={search} alt="" />
        <input type="text" placeholder="search.." />
      </div>
      <h3 className="tranding">Tranding</h3>
      <div className="trandItems">
        <TrandingComponent name="Beyond Earth" class="Movie" img={tranding} />
        <TrandingComponent name="Bottom Gear" class="Movie" img={car} />
        <TrandingComponent name="Undiscovered" class="Movie" img={movie2} />
        <TrandingComponent name="Beyond Earth" class="Movie" img={movie1} />
      </div>
      <h3 className="recomended">Recomended for you</h3>
      <div className="recomendItems">
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
          name={arr[0].name}
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
    </div>
  );
};

export default Home;
