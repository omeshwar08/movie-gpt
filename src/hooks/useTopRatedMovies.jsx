import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utility/movieSlice";

const useTopRatedMovies = () => {
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        if (!topRatedMovies)
            getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
