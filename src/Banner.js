import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlPrams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlPrams.get("v"));
          console.log(trailerUrl);
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button" onClick={() => handleClick(movie)}>
            Play &#9654;
          </button>
          <button className="banner__button">Play List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </header>
  );
}

export default Banner;
