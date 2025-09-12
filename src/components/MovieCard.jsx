import React from 'react'
import { IMG_CDN_URL } from './constants'

const MovieCard = ({ image }) => {
    return (
        <div className='w-44 pr-4'>
            <img src={IMG_CDN_URL + image} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard