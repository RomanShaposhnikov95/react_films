import './Film.css'
import {Link} from "react-router-dom";



export const Film = (props) => {
    const {posterUrl,nameEn,rating,filmId} = props

    const str = String(rating)
    const procentToNum = str.includes("%") ? rating.slice(0,2) / 10 : rating

    return (
        <Link to={`/about/${filmId}`} className="film">
            <img className='filmImg' src={posterUrl} alt=""/>
            <div className="filmTitle">{nameEn ? nameEn.slice(0,15) : 'no name'}</div>
            <div className={procentToNum >= 9 ? "raitingBlock goldRaiting" : "raitingBlock"}>{procentToNum}</div>
        </Link>
    )
}