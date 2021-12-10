import './AllFilms.css'
import {Film} from "../Film/Film";
import {Preloader} from "../Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchFilms} from "../../redux/FilmsArrSlice";
import {useParams} from "react-router-dom";
import {Pagination} from "../Pagination/Pagination";



const AllFilms = () => {
    const {category,num} = useParams()

    const allFilms = useSelector(state => state.allFilms.films.films)
    const filmsLoadingStatus = useSelector(state => state.allFilms.filmsLoadingStatus)
    const pages = useSelector(state => state.allFilms.films.pagesCount)
    const dispatch = useDispatch()

    const pageNum = Number(num)
    const [page, setPage] = useState(pageNum);

    useEffect(() => {
        dispatch(fetchFilms({category, page}))
    },[category, page, dispatch])


    const renderFilmsArr = (allFilms,status) => {
        if (status === 'loading') {
            return <Preloader/>
        } else if (status === "error") {
            return <p>Ошибка загрузки</p>
        }
        if (allFilms && allFilms.length > 0) {
            return allFilms.map((el, index) => (
                <Film key={index} {...el}/>
            ))
        }
    }

    const elements = renderFilmsArr(allFilms,filmsLoadingStatus)

    return (
        <div className='allFilms'>
            <div className="films">
                {elements}
            </div>
            <div className="pagination">
                {
                    pages ? <Pagination value={page} range={pages} onChange={setPage}/> : <Preloader/>
                }
            </div>
        </div>
    )
}

export default AllFilms;