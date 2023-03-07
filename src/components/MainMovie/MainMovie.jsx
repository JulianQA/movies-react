import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { URL_IMAGES } from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import "./_mainMovies.scss";
const MainMovie = ({ movies }) => {
  const resOrdered = movies?.sort((a, b) => b.vote_average - a.vote_average);
  return (
    movies && (
      <div className="MainMovie">
        <figure className="MainMovie__image-container">
          <LazyLoadImage src={`${URL_IMAGES}${resOrdered[0]?.backdrop_path}`} />
          <div className="image-container__message">Watch the preview</div>
        </figure>
      </div>
    )
  );
};
export { MainMovie };
