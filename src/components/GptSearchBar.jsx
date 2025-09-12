import React from 'react'
import { BACKGROUND } from './constants'
import languages from './languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.language);
    console.log(languages);
    console.log(languageKey);
    console.log(languages[languageKey]);

    return (
        <div className='pt-[10%] flex justify-center'>
            <div className='-z-10'>
                <img
                    className="w-full h-full object-cover absolute top-0 left-0"
                    src={BACKGROUND}
                    alt="background"
                />
            </div>
            <form className='bg-black w-1/2 grid grid-cols-12'>
                <input
                    className='p-4 m-4 text-black bg-white col-span-9'
                    type="text"
                    placeholder={languages[languageKey].inputPlaceholder} />
                <button
                    className='py-2 px-4 bg-red-500 text-white rounded-lg cursor-pointer col-span-3 m-4'>
                    {languages[languageKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar