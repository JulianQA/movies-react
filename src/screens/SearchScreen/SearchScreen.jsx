import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesBySearch } from "../../api/api";
import { InfiniteScrolling } from "../../components/InfiniteScrolling/InfiniteScrolling";
import "./_searchesScreen.scss";

const SearchScreen = () => {
  const { query } = useParams();

  useEffect(() => {
    document.title = query;
  }, [query]);
  return (
    <div className="SearchScreen main-content">
      <p className="SearchScreen__title">{query}</p>
      <InfiniteScrolling
        identifier={query}
        endPoint={"search/movie"}
        queries={`query=${query}`}
        functionFetch={getMoviesBySearch}
      />
    </div>
  );
};

export { SearchScreen };
