import { Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Movies from "./component/Movies";
import Series from "./component/Series";
import Bookmarked from "./component/Bookmarked";
import "./App.css";
import logo from "./images/Path.png";
import home from "./images/home.png";
import movies from "./images/Shape (1).png";
import series from "./images/Shape (2).png";
import bookmark from "./images/bookmark.png";
import avatar from "./images/Oval.png";

import Login from "./component/Login";
function App() {
  return (
    <div className="App">
      <nav className="navBar">
        <Link to={"login"}>
          <img id="logo" src={logo} alt="" />
        </Link>
        <Link to={"/"}>
          <img src={home} className="navBarInner" alt="" />
        </Link>
        <Link to={"movies"}>
          <img src={movies} className="navBarInner" alt="" />
        </Link>
        <Link to={"series"}>
          <img src={series} className="navBarInner" alt="" />
        </Link>
        <Link to={"bookmarked"}>
          <img src={bookmark} className="navBarInner" alt="" />
        </Link>
        <img src={avatar} id="avatar" alt="" />
      </nav>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="bookmarked" element={<Bookmarked />} />
      </Routes>
    </div>
  );
}

export default App;
