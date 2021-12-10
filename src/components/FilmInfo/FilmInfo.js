import './FilmInfo.css'
import {Raiting} from "../Raitings/Raiting";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneFilm} from "../../redux/FilmsArrSlice";
import {Preloader} from "../Preloader/Preloader";


const FilmInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {filmInfo,loading} = useSelector(state => state.allFilms)

    useEffect(() => {
        dispatch(fetchOneFilm(id))
    },[id, dispatch])

    const {posterUrl,ratingKinopoisk,nameOriginal,description} = filmInfo
    const result = Math.floor(ratingKinopoisk / 2)
    const [rating, setRating] = useState(result)

    const renderFilms = (filmInfo, loading) => {
        if (loading === 'loading') {
            return <Preloader/>
        } else if (loading === "error") {
            return <p>Loading error</p>
        }
        
        if (filmInfo) {
            return (
                <>
                    <div className="filmInfoPoster">
                        <img src={posterUrl} alt={posterUrl} className="filInfoImg"/>
                    </div>
                    <div className="Info">
                        <div className="infoTitle">{nameOriginal}</div>
                        <div className="description">{description}</div>
                        <div className="raiting">
                            <Raiting valueFromSer={rating} onClick={setRating}/>
                            <span>{ratingKinopoisk}</span>
                        </div>
                        <div className="video"></div>
                    </div>
                </>
            )
        }
    }

    const elements = renderFilms(filmInfo, loading)

    return (
        <div className='filmInfo'>
            {elements}
        </div>
    )
}

export default FilmInfo;