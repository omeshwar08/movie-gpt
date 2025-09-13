import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
            <div className='my-4 md:my-0'>
                <button className='bg-gray-100 text-black font-bold py-1 px-3  md:py-4 md:px-16 rounded-lg text-xl cursor-pointer hover:opacity-80'>▶️ Play</button>
                <button className='hidden md:inline-block bg-gray-100 text-black font-bold p-4 px-12 rounded-lg text-xl mx-2 cursor-pointer hover:opacity-80'> ℹ️More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle