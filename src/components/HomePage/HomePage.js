import './HomePage.css'
import {Slider} from "../Slider/Slider";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchSlider} from "../../redux/filmSlice";
import {Preloader} from "../Preloader/Preloader";



const HomePage = () => {
    const dispatch = useDispatch();
    const {slide} = useSelector(state => state.slide)

    useEffect(() => {
        dispatch(fetchSlider())
    },[dispatch])

    return (
        <div className='sliderContainer'>
            {slide.top250 ? <Slider top={slide.top250.films} title={'Top 250'} info={'TOP_250_BEST_FILMS'}/> : <Preloader/>}
            {slide.top100 ? <Slider top={slide.top100.films} title={'Top 100'} info={'TOP_100_POPULAR_FILMS'}/> : <Preloader/>}
            {slide.topAwait ? <Slider top={slide.topAwait.films} title={'Top Await'} info={'TOP_AWAIT_FILMS'}/> : <Preloader/>}
        </div>
    )
}

export default HomePage;