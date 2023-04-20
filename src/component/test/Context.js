import { createContext, useState } from "react";
import movie1 from "../movieImages/movie1.png";
import movie2 from "../movieImages/movie2.png";

import movie4 from "../movieImages/Rectangle.png";
import movie5 from "../movieImages/rek.png";
export const AppContext = createContext();

const ContextProvider = (props) => {
  const [movies, setMovies] = useState([
    { img: movie1, name: "Undiscovered Cities", class: "Movie", year: "2010" },
    { img: movie2, name: "1998", class: "Movie", year: "2010" },

    { img: movie4, name: "Beyond Earth", class: "Movie", year: "2010" },
    { img: movie5, name: "The Great Lands", class: "Movie", year: "2010" },
  ]);

  const [bookmarks, setBookmarks] = useState([]);

  const [deleteFromBookmark, setDeleteFromBookmark] = useState(bookmarks);
  const handleDeleteFromBookmark = (index) => {
    setBookmarks(bookmarks.filter((movie, index2) => index2 !== index));
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        bookmarks,
        setBookmarks,
        setMovies,
        deleteFromBookmark,
        setDeleteFromBookmark,
        handleDeleteFromBookmark,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
