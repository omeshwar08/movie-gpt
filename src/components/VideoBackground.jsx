import { useSelector } from 'react-redux'
import { useTrailerVideo } from '../hooks/useTrailerVideo';

const VideoBackground = ({ id }) => {
    useTrailerVideo(id);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    return (
        <div className="w-screen">
            <iframe
                className='w-screen aspect-video '
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
                title="All React Hooks Explained in 2 Hours | Complete React Hooks Tutorial with Example 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    )
}

export default VideoBackground