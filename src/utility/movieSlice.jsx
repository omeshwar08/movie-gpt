import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideo = action.payload
    },
    addPupularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideos, addPupularMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;
