import React from "react";
import requests from "../axios/requests";
import Banner from "../components/Banner";
import ListMovie from "../components/ListMovie";
import Nav from "../components/Nav";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <ListMovie
        title="Trending Now"
        urlListMovie={requests.fetchTrending}
        isTrending
      />
      <ListMovie title="Top Rate" urlListMovie={requests.fetchTopRated} />
      <ListMovie title="Action" urlListMovie={requests.fetchActionMovies} />
      <ListMovie
        title="Romantic Comedies"
        urlListMovie={requests.fetchRomanceMovies}
      />
      <ListMovie title="Horror" urlListMovie={requests.fetchHorrorMovies} />
      <ListMovie title="Animation" urlListMovie={requests.fetchAnimation} />
      <ListMovie title="Documentary" urlListMovie={requests.fetchDocumentary} />
      <ListMovie title="Sci Fi" urlListMovie={requests.fetchSciFi} />
    </div>
  );
}

export default HomeScreen;
