import Header from "./components/Header";
import Categories from "./components/Categories";
import { useState } from "react";

export default function App() {
  const [movieList, setMovieList] = useState([]);

  function onMovieList(list) {
    setMovieList(list);
  }

  return (
    <div className="container">
      <Header onMovieList={onMovieList} />
      <Categories movieList={movieList} />
    </div>
  );
}
