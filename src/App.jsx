import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { MovieScreen } from "./screens/MovieScreen/MovieScreen";
import { CategoryScreen } from "./screens/CategoryScreen/CategoryScreen";
import { SearchScreen } from "./screens/SearchScreen/SearchScreen";
import "./App.scss";
import { CategoriesScreen } from "./screens/CategoriesScreen/CategoriesScreen";
import { useDispatch } from "react-redux";
import { getListOfGenres } from "./api/api";
import { addGenres } from "./redux/slices/genreSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    const res = await getListOfGenres();
    dispatch(addGenres(res));
  };
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movie/:id" element={<MovieScreen />} />
        <Route path="/category/:id" element={<CategoryScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/search/:query" element={<SearchScreen />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
