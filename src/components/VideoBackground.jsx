import { useSelector } from 'react-redux'
import { useTrailerVideo } from '../hooks/useTrailerVideo';

const VideoBackground = ({ id }) => {
    useTrailerVideo(id);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    return (
        <div className="w-full">
            <iframe
                className="w-full aspect-video"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?autoplay=1&mute=1&loop=1&playlist=" +
                    trailerVideo?.key +
                    "&rel=0"
                }
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />

        </div>
    )
}

export default VideoBackground