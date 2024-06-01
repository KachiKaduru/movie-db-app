import { useState } from "react";
import searchImg from "../images/search-img.svg";

const KEY = "61d31c5b";

export default function Header({ onMovieList }) {
  return (
    <header>
      <h1 className="fs-36-700 mb-20">Movie DB App</h1>

      <SearchComponent onMovieList={onMovieList} />
    </header>
  );
}

function SearchComponent({ onMovieList }) {
  const [query, setQuery] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
    const data = await res.json();

    // console.log(data, "header");
    onMovieList(data.Search);
  };

  return (
    <div className="search-comp">
      <p className="fs-18-600">Find your movies</p>

      <form className="" onSubmit={submitForm}>
        <input
          className="search-tab"
          type="search"
          placeholder="Search here ..."
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <img src={searchImg} alt="search" />
        </button>
      </form>
    </div>
  );
}
