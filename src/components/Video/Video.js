import './Video.css'
import {Preloader} from "../Preloader/Preloader";



export const Video = ({source}) => {
    if (!source) {
        return <Preloader/>
    }
    const src = source

    return (
        <iframe className='video' src={src}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
    )
}