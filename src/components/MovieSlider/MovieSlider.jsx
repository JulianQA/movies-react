import React, { useRef } from "react";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import "./_movieSliders.scss";

const MovieSlider = ({ movies, title }) => {
  const slider = useRef(null);

  const scrollLeft = () => {
    slider.current.scrollLeft -= 500;
  };
  const scrollRight = () => {
    slider.current.scrollLeft += 500;
  };
  return (
    <div className="MovieSlider">
      <p className="MovieSlider__title">{title}</p>
      <div className="MovieSlider__container">
        <MdOutlineKeyboardArrowLeft
          className="MovieSlider__arrow"
          onClick={scrollLeft}
        />
        <div className="MovieSlider__slider" ref={slider}>
          {movies.map((movie) => (
            <MoviePreview movie={movie} key={movie?.id} />
          ))}
        </div>
        <MdKeyboardArrowRight
          className="MovieSlider__arrow"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};

export { MovieSlider };
