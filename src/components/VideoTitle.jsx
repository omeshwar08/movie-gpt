import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className='bg-gray-100 text-black font-bold p-4 px-16 rounded-lg text-xl cursor-pointer hover:opacity-80'>▶️ Play</button>
                <button className='bg-gray-100 text-black font-bold p-4 px-12 rounded-lg text-xl mx-2 cursor-pointer hover:opacity-80'> ℹ️More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle