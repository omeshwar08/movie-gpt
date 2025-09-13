import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if (movies === null) {
    return;
  }
  const mainMovie = movies[1];

  return (
    <div className="bg-black pt-[30%] md:pt-0 ">
      <VideoTitle title={mainMovie.
        original_title} overview={mainMovie.overview} />
      <VideoBackground id={mainMovie.id} />
    </div>);
};

export default MainContainer;
