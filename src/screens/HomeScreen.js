import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row";
import Banner from "../Banner";
import requests from "../Request";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row
        title="Romantic Movies"
        fetchUrl={requests.fetchPopular}
        isLargeRow
      />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Animated Movies" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default HomeScreen;
