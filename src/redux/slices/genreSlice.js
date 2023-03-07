import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: null,
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addGenres(state, action) {
      state.genres = action.payload;
    },
  },
});

export const { addGenres } = genresSlice.actions;

export default genresSlice.reducer;
