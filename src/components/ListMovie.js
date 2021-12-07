import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListMovie.css";
const UrlImage = "https://image.tmdb.org/t/p/original/";

function ListMovie({ title, urlListMovie, isTrending }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlListMovie);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [urlListMovie]);

  return (
    <div className="listmovie">
      <h2 className="listmovie__title">{title}</h2>
      <div className="listmovie__images">
        {movies.map(
          (movie) =>
            ((isTrending && movie.poster_path) ||
              (!isTrending && movie.backdrop_path)) && (
              <img
                className={`listmovie__image ${
                  isTrending && "listmovie__poster"
                }`}
                key={movie.id}
                alt={movie.name}
                src={`${UrlImage}${
                  isTrending ? movie.poster_path : movie.backdrop_path
                }`}
              />
            )
        )}
      </div>
    </div>
  );
}

export default ListMovie;
