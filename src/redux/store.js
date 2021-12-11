import {configureStore} from "@reduxjs/toolkit";
import sliderSlice from "./filmSlice";
import allFilmsSlice from "./FilmsArrSlice";




const store = configureStore({
    reducer: {
        slide: sliderSlice,
        allFilms: allFilmsSlice
    }
})

window.store = store

export default store