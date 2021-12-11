import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hook/http.hook";



const BaseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type='

export const fetchSlider = createAsyncThunk(
    'films/fetchSlider',
    async () => {
        const {request} = useHttp();
        return {
            top250: await request(`${BaseUrl}TOP_250_BEST_FILMS&page=1`),
            top100: await request(`${BaseUrl}TOP_100_POPULAR_FILMS&page=1`),
            topAwait: await request(`${BaseUrl}TOP_AWAIT_FILMS&page=1`),
        }
    }
)


const sliderSlice = createSlice({
    name: 'slide',
    initialState: {
        slide: [],
        filmsLoadingStatus: 'null'
    },
    reducers: {

    },
    extraReducers: {
        [fetchSlider.pending]: (state) => {state.filmsLoadingStatus = 'loading'},
        [fetchSlider.fulfilled]: (state,action) => {
            state.filmsLoadingStatus = 'null';
            state.slide = action.payload;
        },
        [fetchSlider.rejected]: (state) => {state.filmsLoadingStatus = 'error'}
    }
})

export default sliderSlice.reducer