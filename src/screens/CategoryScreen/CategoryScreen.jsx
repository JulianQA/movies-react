import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../../api/api";
import { MoviePreview } from "../../components/MoviePreview/MoviePreview";
import { useFetch } from "../../hooks/useFetch";
import "./_categoriesScreen.scss";
const CategoryScreen = () => {
  const [page, setPage] = useState(2);
  const { id } = useParams();
  const { data, loading } = useFetch(
    "discover/movie",
    [id],
    `with_genres=${id}`
  );
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setMovies(data.results);
    }
  }, [data]);
  useEffect(() => {
    setPage(2);
  }, [id]);
  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const res = await getMoviesByGenre(id, page);
    setMovies((prevMovies) => [...prevMovies, ...res.results]);
    setPage(nextPage);
  };
  const { genres } = useSelector((state) => state.genres);
  const title = genres?.genres?.find((item) => item?.id == id);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="CategoryScreen main-content">
      <p className="CategoryScreen__title">{title?.name}</p>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={page < 15 ? true : false}
      >
        <div className="CategoryScreen__movies-container">
          {movies?.map((movie) => (
            <MoviePreview movie={movie} key={movie?.id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export { CategoryScreen };
