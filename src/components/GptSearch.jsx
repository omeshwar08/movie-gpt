import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND } from './constants'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
    return (
        <>
            <div className='-z-10'>
                <img
                    className="w-full h-full object-cover fixed top-0 left-0 -z-10"
                    src={BACKGROUND}
                    alt="background"
                />
            </div>
            <div>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch