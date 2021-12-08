import './Film.css'
import {Link} from "react-router-dom";


const url = 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg'

export const Film = () => {
    return (
        <Link to='/about' className="film">
            <img className='filmImg' src={url} alt=""/>
            <div className="filmTitle">Spiderman 3</div>
            <div className="raitingBlock">99</div>
        </Link>
    )
}