import React from "react";
import "./App.css";
import Banner from "./Banner";
import HomeScreen from "./HomeScreen";
import Row from "./Row";
import requests from "./Request";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <Banner />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchPopular} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Animated Movies" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
