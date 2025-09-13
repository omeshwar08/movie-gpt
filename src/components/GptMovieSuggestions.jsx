import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
const GptMovieSuggestions = () => {
    const movie = useSelector((store) => store.gpt)
    const { gptMoviesName, gptMovies } = movie;
    if (!gptMoviesName) return;
    return (
        <div className='p-4 m-4 bg-black opacity-85 text-white'>
            {gptMoviesName.map((movie, index) =>
            (
                <MovieList key={movie} title={movie} movies={gptMovies[index]} />
            )
            )}
        </div>
    )
}
export default GptMovieSuggestions