import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../../api/api";
import { InfiniteScrolling } from "../../components/InfiniteScrolling/InfiniteScrolling";
import "./_categoriesScreen.scss";
const CategoryScreen = () => {
  const { id } = useParams();
  const { genres } = useSelector((state) => state.genres);
  const title = genres?.genres?.find((item) => item?.id == id);

  useEffect(() => {
    document.title = title.name;
  }, [id]);
  return (
    <div className="CategoryScreen main-content">
      <p className="CategoryScreen__title">{title?.name}</p>
      <InfiniteScrolling
        identifier={id}
        endPoint={"discover/movie"}
        queries={`with_genres=${id}`}
        functionFetch={getMoviesByGenre}
      />
    </div>
  );
};

export { CategoryScreen };
