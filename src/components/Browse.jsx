import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch /> : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  );
};

export default Browse;
