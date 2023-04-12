import React from "react";
import bookmarked from "../images/bookmark.png";
import "./TrandingComponent.css";
import point from "../images/Oval Copy 2.png";
import movie from "../images/Shape (1).png";
import { useContext } from "react";
import { AppContext } from "./test/Context";
const TrandingComponent = (props) => {
  const bookmark = useContext(AppContext);
  const handleBookmark = () => {
    bookmark.setBookmarks([...bookmark.bookmarks, props]);
    console.log(bookmark);
  };
  return (
    <div className="componentInner">
      <div className="imgcontainer">
        <img className="componentImg" src={props.img} alt="" />
      </div>
      <div className="textcontainer">
        <div className="componentyear">
          2019{" "}
          <div className="componentyearInner">
            <img className="point" src={point} alt="" />
          </div>
        </div>
        <div className="componentclass">
          <img className="movie" src={movie} alt="" />
          {props.class}
        </div>
        <div className="componentText">PG</div>
        <h3 className="name">{props.name}</h3>
      </div>
      <img
        onClick={handleBookmark}
        className="bookmarkButton"
        src={bookmarked}
        alt=""
      />
    </div>
  );
};

export default TrandingComponent;
