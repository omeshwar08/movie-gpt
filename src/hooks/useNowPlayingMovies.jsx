import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utility/movieSlice";

const useNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
    const dispatch = useDispatch();
    const getNowPlayingMovie = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        if (!nowPlayingMovies)
            getNowPlayingMovie();
    }, []);
};

export default useNowPlayingMovies;
