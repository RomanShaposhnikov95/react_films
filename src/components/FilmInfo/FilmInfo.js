import './FilmInfo.css'
import {Raiting} from "../Raitings/Raiting";
import {useState} from "react";


const url = 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg'

export const FilmInfo = () => {

    const [rating, setRating] = useState(0)

    return (
        <div className='filmInfo'>
            <div className="filmInfoPoster">
                <img src={url} alt="" className="filInfoImg"/>
            </div>
            <div className="Info">
                <div className="infoTitle">Spiderman 3</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi aut consequuntur doloremque dolores eius eum eveniet
                    harum ipsum itaque iusto modi nesciunt nostrum, quam quas
                    quidem repellendus totam vitae voluptas!
                </div>
                <div className="raiting"><Raiting valueFromSer={rating} onClick={setRating}/><span>7.2</span></div>
                <div className="video"></div>
            </div>
        </div>
    )
}