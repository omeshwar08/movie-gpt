import React, { useRef } from 'react'
import { API_OPTIONS, BACKGROUND } from './constants'
import languages from './languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utility/openAI'
import { addGptMovieResult } from '../utility/gptSearchSlice'

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.language);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTmdb = async (movieName) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName, API_OPTIONS);
        const json = await data.json()
        return json.results;
    }

    const handleGptSearchClick = async () => {
        //api call to open AI
        const gptResults = await openai.responses.create({
            model: 'gpt-3.5-turbo',
            instructions: 'Act as a movie recomendation system and suggest moves for the query. The result should only include names of 5 movies comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Golmal, Koi Mil Gaya, 3 Idiots',
            input: searchText.current.value,
        });
        const gptMovies = gptResults.output_text.split(",")

        const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie))
        console.log(promiseArray);

        const tmdbResults = await Promise.all(promiseArray)
        console.log(tmdbResults);
        dispatch(addGptMovieResult({ gptMovies, tmdbResults }))

    }
    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className='bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    className='p-4 m-4 text-black bg-white col-span-9'
                    type="text"
                    placeholder={languages[languageKey].inputPlaceholder} />
                <button
                    className='py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer col-span-3 m-4'
                    onClick={handleGptSearchClick}
                >
                    {languages[languageKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar