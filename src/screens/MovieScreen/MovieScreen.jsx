import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { URL_IMAGES } from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import "./_moviesScreen.scss";
import { GenreMovieDetail } from "../../components/GenreMovieDetail/GenreMovieDetail";
import { MovieSlider } from "../../components/MovieSlider/MovieSlider";

const MovieScreen = () => {
  const { id } = useParams();
  const { data } = useFetch(`movie/${id}`, [id]);
  const { data: related } = useFetch(`movie/${id}/similar`, [id]);

  useEffect(() => {
    if (data) {
      document.title = data?.title;
    }
  }, [data]);

  return (
    <div className="MovieScreen main-content">
      <figure className="MovieScreen__movie-container">
        <img
          src={`${URL_IMAGES}${data?.backdrop_path}`.replace(
            "w500",
            "original"
          )}
          alt={data?.title}
        />
      </figure>
      <p className="MovieScreen__title">{data?.title}</p>
      <p className="MovieScreen__overview">{data?.overview}</p>
      <div className="MovieScreen__votes">
        <span>{data?.vote_average.toFixed(1)}</span>
        <AiFillStar size={15} />
      </div>
      <p className="MovieScreen__release-date">
        <span>Release Date: </span>
        <span>{data?.release_date}</span>
      </p>
      <div className="MovieScreen__genres">
        {data?.genres.map((item) => (
          <GenreMovieDetail name={item.name} id={item.id} key={item.id} />
        ))}
      </div>
      <div className="MovieScreen__related-movies">
        {related && (
          <MovieSlider movies={related?.results} title={"Related Movies"} />
        )}
      </div>
    </div>
  );
};

export { MovieScreen };
