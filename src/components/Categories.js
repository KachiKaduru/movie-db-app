// import categoriesTypes from "./randomArrays";
import bookmarkImg from "../images/bi_bookmark-check-fill.svg";

// const KEY = "61d31c5b";

export default function Categories({ movieList }) {
  return (
    <section className="categories-stn">
      <h2 className="fs-18-600">Search Results</h2>

      <MoviesList movieList={movieList} />
    </section>
  );
}

function MoviesList({ movieList }) {
  // console.log(movieList);

  return (
    <div className="movies-list">
      {movieList.length === 0 && <h6 className="no-movie">Search for a movie</h6>}

      {movieList.map((movie, i) => (
        <Movie
          key={i + 1}
          movieTitle={movie?.Title}
          moviePoster={movie.Poster}
          releaseDate={movie.Year}
          rating={"7.8"}
        />
      ))}
    </div>
  );
}

function Movie({ moviePoster, movieTitle, releaseDate, rating }) {
  return (
    <div className="movie">
      <div className="movie-poster">
        <img src={moviePoster} alt="movie poster" />
      </div>

      <div className="movie-details">
        <h6>
          Title: <p>{movieTitle}</p>
        </h6>

        <h6>
          Release Date : <p>{releaseDate}</p>
        </h6>

        <h6>
          Average Rating: <p>{rating}</p>
        </h6>
      </div>

      <div className="movie-ratings">
        <div className="bookmark-stn">
          <img src={bookmarkImg} alt="" />
        </div>
      </div>
    </div>
  );
}
