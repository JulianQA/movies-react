import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { URL_IMAGES } from "../../api/api";
import { AiFillStar } from "react-icons/ai";
import "./_moviesPreview.scss";
import imageDefault from "../../assets/imgs/default_image.jpg";

const MoviePreview = ({ movie }) => {
  const [imageError, setImageError] = useState(false);

  const { genres } = useSelector((state) => state.genres);
  const filteredList = genres?.genres?.filter((item) => {
    return movie?.genre_ids.some((ids) => ids === item?.id);
  });
  const categories = filteredList?.map((item) => item?.name).join(", ");

  const handleIamgeError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };
  return (
    <div className="MoviePreview">
      <figure className="MoviePreview__img-container">
        <LazyLoadImage
          src={imageError ? imageDefault : `${URL_IMAGES}${movie?.poster_path}`}
          alt={movie?.title}
          title={movie?.title}
          onError={handleIamgeError}
        />
      </figure>
      <div className="MoviePreview__details">
        <span>{movie?.title}</span>
        <span>{categories}</span>
      </div>
      <div className="MoviePreview__stars">
        <span>{movie?.vote_average.toFixed(1)}</span>
        <AiFillStar />
      </div>
    </div>
  );
};

export { MoviePreview };
