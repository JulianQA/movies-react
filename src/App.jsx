import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { MovieScreen } from "./screens/MovieScreen/MovieScreen";
import { CategoryScreen } from "./screens/CategoryScreen/CategoryScreen";
import { SearchScreen } from "./screens/SearchScreen/SearchScreen";
import "./App.scss";
import { AsideBar } from "./components/AsideBar/AsideBar";
import { CategoriesScreen } from "./screens/CategoriesScreen/CategoriesScreen";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="Layout__main-content">
        <AsideBar />
        {children}
      </div>
    </>
  );
};
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Layout>
              <MovieScreen />
            </Layout>
          }
        />
        <Route
          path="/category/:id"
          element={
            <Layout>
              <CategoryScreen />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <CategoriesScreen />
            </Layout>
          }
        />
        <Route
          path="/search/:query"
          element={
            <Layout>
              <SearchScreen />
            </Layout>
          }
        />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
