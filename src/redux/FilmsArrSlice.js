import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../hook/http.hook";

const BaseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const BaseUrl2 = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/';

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async (param ) => {
        const {category, page} = param
        const {request} = useHttp();
        return await request(`${BaseUrl}top?type=${category}&page=${page}`)
    }
)

export const fetchOneFilm = createAsyncThunk(
    'films/fetchOneFilm',
    async (id) => {
        const {request} = useHttp();
        return await request(`${BaseUrl}${id}`)
    }
)

export const fetchSearchByWords = createAsyncThunk(
    'films/fetchSearchByWords',
    async (param) => {
        console.log('1',param)
        const {category,page} = param
        const {request} = useHttp();
        return await request(`${BaseUrl2}search-by-keyword?keyword=${category}&page=${page}`)
    }
)

export const fetchSearchByWordsAllResult = createAsyncThunk(
    'films/fetchSearchByWordsAllResult',
    async (param) => {
        console.log('2',param)
        const {category,page} = param
        const {request} = useHttp();
        return await request(`${BaseUrl2}search-by-keyword?keyword=${category}&page=${page}`)
    }
)

const setError = (state) => {
    state.filmsLoadingStatus = 'error'
}
const setLoading = (state) => {
    state.filmsLoadingStatus = 'loading'
}

const allFilmsSlice = createSlice({
    name: 'films',
    initialState: {
        films: [],
        filmInfo: {},
        filmsLoadingStatus: 'null',
        pageNum: 1,
        searchResult: [],
        loading: 'null'
    },
    reducers: {
        clearArr: (state, action) => {
            state.filmInfo = {}
        }
    },
    extraReducers: {
        [fetchFilms.pending]: setLoading,
        [fetchFilms.fulfilled]: (state,action) => {
            state.filmsLoadingStatus = 'null';
            state.films = action.payload;
        },
        [fetchFilms.rejected]: setError,
        [fetchOneFilm.pending]: setLoading,
        [fetchOneFilm.fulfilled]: (state,action) => {
            state.filmsLoadingStatus = 'null';
            state.filmInfo = action.payload;
        },
        [fetchOneFilm.rejected]: setError,

        [fetchSearchByWords.pending]: (state) => {state.loading = 'loading'},
        [fetchSearchByWords.fulfilled]: (state,action) => {
            state.loading = 'null';
            state.searchResult = action.payload;
        },
        [fetchSearchByWords.rejected]: (state) => {state.loading = 'error'},

        [fetchSearchByWordsAllResult.pending]: setLoading,
        [fetchSearchByWordsAllResult.fulfilled]: (state,action) => {
            state.filmsLoadingStatus = 'null';
            state.films = action.payload;
        },
        [fetchSearchByWordsAllResult.rejected]: setError,
    }
})

export const {clearArr} = allFilmsSlice.actions
export default allFilmsSlice.reducer