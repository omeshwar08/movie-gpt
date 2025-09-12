import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    if (movies === null) return;
    return (
        <div className='px-6 '>
            <div className='font-bold text-3xl py-4 text-white'>{title}</div>
            <div className='flex overflow-x-scroll scrollbar-hide scroll-smooth'>
                <div className='flex'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} image={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList