import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import moviesByGenreSlice from "./slices/moviesByGenreSlice";

export const store = configureStore({
  reducer: {
    genres: genreSlice,
    moviesByGenre: moviesByGenreSlice,
  },
});
