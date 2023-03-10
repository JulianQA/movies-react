import React from "react";
import { useNavigate } from "react-router-dom";
import "./_genresMovieDetail.scss";

const GenreMovieDetail = ({ name, id }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/category/${id}`);
  };
  return (
    <div className="GenreMovieDetail" onClick={() => handleNavigate(id)}>
      {name}
    </div>
  );
};

export { GenreMovieDetail };
