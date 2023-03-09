import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
const moviesByGenreSlice = createSlice({
  name: "moviesByGenre",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = [...state.movies, ...action.payload.results];
    },
  },
});

export const { addMovies } = moviesByGenreSlice.actions;

export default moviesByGenreSlice.reducer;
