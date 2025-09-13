import React from 'react'
import { IMG_CDN_URL } from './constants'

const MovieCard = ({ image }) => {
    if (!image) return null;
    return (
        <div className='w-44 pr-4'>
            <img src={IMG_CDN_URL + image} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard