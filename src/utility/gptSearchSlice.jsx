import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toogleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const { toogleGptSearchView } = gptSearchSlice.actions
export default gptSearchSlice.reducer