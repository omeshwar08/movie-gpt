import React from "react";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utility/movieSlice";

const useTopRatedMovies = () => {
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
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
