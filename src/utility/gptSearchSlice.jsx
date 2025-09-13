import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMoviesName: null,
        gptMovies: null
    },
    reducers: {
        toogleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            state.gptMovies = action.payload.tmdbResults
            state.gptMoviesName=action.payload.gptMovies
        }
    }
});

export const { toogleGptSearchView, addGptMovieResult } = gptSearchSlice.actions
export default gptSearchSlice.reducer