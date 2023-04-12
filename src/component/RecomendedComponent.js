import React from "react";
import "./RecomendedComponent.css";
import bookmarked from "../images/bookmark.png";
import point from "../images/Oval Copy 2.png";
import movie from "../images/Shape (1).png";
import { useContext } from "react";
import { AppContext } from "./test/Context";
const RecomendedComponent = (props, item, handleLike) => {
  const bookmark = useContext(AppContext);
  const handleBookmark = () => {
    bookmark.setBookmarks([...bookmark.bookmarks, props]);
    console.log(bookmark);
  };
  return (
    <div className="recContainer">
      <img src={props.img} alt="" width={280} height={174} />
      <div className="recInfo">
        <span className="recYear">
          {props.year}
          <img className="point" src={point} alt="" />
        </span>
        <span className="recClass">
          <img className="movie" src={movie} alt="" />
          {props.class}
        </span>
        <span className="recPage">PG</span>
      </div>
      <h3 className="recPage">{props.name}</h3>
      <img
        onClick={handleBookmark}
        className="bookmarkButton"
        src={bookmarked}
        alt=""
      />
    </div>
  );
};

export default RecomendedComponent;
