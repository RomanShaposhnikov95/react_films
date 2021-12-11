import './Slider.css'
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.css'
import {Link} from "react-router-dom";
import {Slide} from "./Slide/Slide";
import {GrFormNextLink} from "react-icons/all";



export const Slider = (props) => {
    const {top,info} = props
    const arr = top.slice(0,9)

    return (
        <div className='sliderWrapper'>
            <Link to={`/films/${info}/${1}`} className='sliderGeneralTitle'><h1>{props.title}</h1><GrFormNextLink className='next'/></Link>
            <Swiper slidesPerView={"auto"}  className='slider'>
                {
                    arr.map((el, index) => (
                        <SwiperSlide key={index} className="slide">
                            <Slide key={index} {...el}/>
                        </SwiperSlide>
                    ))
                }
                <h1>Remonts</h1>
                <SwiperSlide className='seeAllLink'>
                    <Link className='seeAllLink' to={`/films/${info}/${1}`}>See all...</Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}