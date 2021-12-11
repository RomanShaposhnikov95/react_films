import './Search.css'
import {AiOutlineSearch} from "react-icons/all";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchByWords} from "../../redux/FilmsArrSlice";
import {Preloader} from "../Preloader/Preloader";
import {Link} from "react-router-dom";


const Search = () => {
    const [guess,setGuess] = useState('none');
    const [value,setValue] = useState('');
    const [error,setError] = useState(true)
    const dispatch = useDispatch()
    const {searchResult, loading} = useSelector(state => state.allFilms)
    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || setGuess('none');
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const onChangeHandler = (e) => {
        const category = e.target.value.trim()
        const page = 1
        setValue(e.target.value)
        if (e.target.value.trim().length >= 1) {
            dispatch(fetchSearchByWords({category, page}))
            setError(false)
           return setGuess('block')
        }

        if (e.target.value.trim().length <= 1){
            setError(true)
            return setGuess('none')
        }
    }

    const renderSearchResult = (searchResult, loading) => {
        if (loading === 'loading') {
            return <div className='center'><Preloader/></div>
        } else if (loading === "error") {
            return <p>Loading error</p>
        }

        if (searchResult.films && searchResult.films.length > 0) {
            const arr = searchResult.films.slice(0,5)
            return (
                arr.map((el, index)=> (
                    <Link to={`/about/${el.filmId}`} onClick={() => setGuess('block')} onBlur={() => setGuess('none')} key={index} className="searchItem">
                        <img className="resultImg" src={el.posterUrl} alt=''/>
                        <div className="searchInfo">
                            <p className="searchTitle">{el.nameEn}</p>
                            <span className='searchYear'>{el.year}</span>
                        </div>
                    </Link>
                ))
            )
        } else {
            return (
                <div className='empty'>Nothing found</div>
            )
        }
    }

    const stateChange = () => {
        setValue('')
        setError(true)
    }

    const elements = renderSearchResult(searchResult, loading)


    return (
        <div className='searchWrapper' ref={rootEl}>
            <div className='searchContainer'>
                <input onFocus={onChangeHandler} value={value} onChange={onChangeHandler} placeholder='Search' className='searchInput' type="text"/>
                {
                    error ?
                        <button disabled={true} className='searchBtn'><AiOutlineSearch/></button>
                        :
                        <Link to={`/films/${value}/${1}`}><button onClick={stateChange} className='searchBtn'><AiOutlineSearch/></button></Link>
                }
            </div>
            <div className="searchMenu" style={{display: `${guess}`}}>
                {elements}
            </div>
        </div>
    )
}

export default Search