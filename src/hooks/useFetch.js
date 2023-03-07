import { useEffect, useState } from "react";
import { key, URL_API } from "../api/api";

export const useFetch = (endPoints, dependencies = []) => {
  const abortController = new AbortController();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
    console.log("fired once");
    return () => abortController.abort();
  }, dependencies);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${URL_API}${endPoints}?api_key=${key}`, {
        signal: abortController.signal,
      });
      const results = await response.json();
      setData(results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
};
