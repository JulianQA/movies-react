import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useFetch } from "../../hooks/useFetch";
import { MoviePreview } from "../MoviePreview/MoviePreview";
import "./_infinitiesScrolling.scss";

const InfiniteScrolling = ({
  identifier,
  endPoint,
  queries,
  functionFetch,
}) => {
  const [page, setPage] = useState(2);
  const [totalPages, SetTotalPages] = useState(1);
  const { data } = useFetch(endPoint, [identifier], queries);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setMovies(data.results);
      SetTotalPages(data.total_pages);
    }
  }, [data]);

  useEffect(() => {
    setPage(2);
  }, [identifier]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const res = await functionFetch(identifier, page);
    setMovies((prevMovies) => [...prevMovies, ...res.results]);
    setPage(nextPage);
  };
  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMoreData}
      hasMore={page <= totalPages ? true : false}
      className="InfiniteScrolling"
    >
      <div className="InfiniteScrolling__movies-container">
        {movies?.map((movie, index) => {
          if (movie.vote_average != "0.0") {
            return <MoviePreview movie={movie} key={`${movie?.id}_${index}`} />;
          }
        })}
      </div>
    </InfiniteScroll>
  );
};

export { InfiniteScrolling };
