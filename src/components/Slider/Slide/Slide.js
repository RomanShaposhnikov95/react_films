import '../Slider.css';
import {Link} from "react-router-dom";



export const Slide = (props) => {
    const {nameEn, posterUrl, filmId} = props


    return (
        <Link to={`/about/${filmId}`}>
            <img className='slideImg' src={posterUrl} alt=""/>
            <div className="slideTitle">{nameEn ? nameEn.slice(0,15) : 'no name'}</div>
        </Link>
    )
}