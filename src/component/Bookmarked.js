import React from "react";

const Bookmarked = (props, bookmarked) => {
  return <div>{props.bookmarked.map((item) => ({ bookmarked }))}</div>;
};

export default Bookmarked;
