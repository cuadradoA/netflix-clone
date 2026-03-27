import { useState, useEffect } from 'react';
import { searchMovies } from '../services/api';

export const useMovies = (categoryQuery, type = 'movie') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await searchMovies(categoryQuery, type);
        setMovies(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (categoryQuery) {
      fetchMovies();
    }
  }, [categoryQuery, type]);

  return { movies, loading, error };
};

export const fetchMovieDetails = async (imdbID) => {
  const { fetchMovieById } = await import('../services/api');
  return await fetchMovieById(imdbID);
};

export default useMovies;