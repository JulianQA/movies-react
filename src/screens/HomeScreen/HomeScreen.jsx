import React, { useEffect, useState } from "react";
import { MainMovie } from "../../components/MainMovie/MainMovie";
import { MovieSlider } from "../../components/MovieSlider/MovieSlider";
import { useFetch } from "../../hooks/useFetch";

const HomeScreen = () => {
  const { data } = useFetch("/trending/movie/week");
  const { data: current } = useFetch("/movie/now_playing");
  return (
    <div className="HomeScreen main-content">
      {data && <MainMovie movies={data?.results} />}
      {current && <MovieSlider movies={current?.results} />}
      {data && <MovieSlider movies={data?.results} />}
    </div>
  );
};

export { HomeScreen };
