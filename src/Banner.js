import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
  
      const request = await axios.get(
        "https://api.themoviedb.org/3" + requests.fetchTrending
      );

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
console.log(movie);
  return (
    <header 
    className="banner"
    style = {{
      backgroundSize : "cover" , 
      backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Play List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
