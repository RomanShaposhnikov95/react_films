import './Slider.css'
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.css'

const url = 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg'

export const Slider = (props) => {
    return (
        <div className='sliderWrapper'>
            <h1 className='sliderGeneralTitle'>{props.title}</h1>
            <Swiper slidesPerView={"auto"}  className='slider'>
                <SwiperSlide className="slide">
                    <img className='slideImg' src={url} alt=""/>
                    <div className="slideTitle">SpiderMan 3</div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img className='slideImg' src={url} alt=""/>
                    <div className="slideTitle">SpiderMan 3</div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img className='slideImg' src={url} alt=""/>
                    <div className="slideTitle">SpiderMan 3</div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img className='slideImg' src={url} alt=""/>
                    <div className="slideTitle">SpiderMan 3</div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img className='slideImg' src={url} alt=""/>
                    <div className="slideTitle">SpiderMan 3</div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img className='slideImg' src={url} alt=""/>
                    <div className="slideTitle">SpiderMan 3</div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <img className='slideImg' src={url} alt=""/>
                    <div className="slideTitle">SpiderMan 3</div>
                </SwiperSlide>
                <SwiperSlide className='seeAllLink'>
                    <p>See all</p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}