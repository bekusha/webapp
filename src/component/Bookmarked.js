import React from "react";
import { useState } from "react";
const Bookmarked = (props, bookmarked) => {
  const likedMoviesFromStorage =
    JSON.parse(localStorage.getItem("likedMovies")) || [];
  const [likedMovies] = useState(likedMoviesFromStorage);
  console.log(likedMoviesFromStorage);
  return (
    <div>
      <ul>
        {likedMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmarked;
