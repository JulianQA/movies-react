import React, { useRef } from "react";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import "./_movieSliders.scss";

const MovieSlider = ({ movies }) => {
  const slider = useRef(null);

  const scrollLeft = () => {
    slider.current.scrollLeft -= 500;
  };
  const scrollRight = () => {
    slider.current.scrollLeft += 500;
  };
  return (
    <div className="MovieSlider">
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
  );
};

export { MovieSlider };
