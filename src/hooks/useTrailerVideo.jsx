import React from 'react'
import { API_OPTIONS } from '../components/constants'
import { addTrailerVideos } from "../utility/movieSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const useTrailerVideo = (id) => {
    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    // get trailer video
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter(video => (video.type === "Trailer" && video.name === "Official Trailer"))
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideos(trailer))
    }
    useEffect(() => {
        if (!trailerVideo)
            getMovieVideos();
    }, [])
}
