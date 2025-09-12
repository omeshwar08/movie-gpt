import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {/*
        Main Container
          - VideoBackground
          - Video Title
        Secondary Container
          - Movie List * m (m rows)
            - cards * n (n cards in each row)
        */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
