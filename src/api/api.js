export const URL_API = "https://api.themoviedb.org/3/";
export const key = process.env.REACT_APP_API_KEY;
export const URL_IMAGES = "https://image.tmdb.org/t/p/w500";

export const fetchData = async (endPoints) => {
  try {
    const response = await fetch(`${URL_API}${endPoints}?api_key=${key}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const getListOfGenres = async () => {
  const response = await fetchData("genre/movie/list");
  return response;
};

export const getMoviesByGenre = async (id, page) => {
  const response = await fetch(
    `${URL_API}discover/movie?api_key=${key}&page=${page}&with_genres=${id}`
  );
  const data = await response.json();
  return data;
};

export const getMoviesBySearch = async (query, page) => {
  const response = await fetch(
    `${URL_API}search/movie?api_key=${key}&page=${page}&query=${query}`
  );
  const data = await response.json();
  return data;
};
