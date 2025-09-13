import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPupularMovies } from "../utility/movieSlice";

const usePopularMovies = () => {
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPupularMovies(json.results));
    };

    useEffect(() => {
        if (!popularMovies)
            getPopularMovies();
    }, []);
};

export default usePopularMovies;
