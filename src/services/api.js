const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQ3ZjcxOTRjZDU0ZTk2ODJlZDI4YWRiYTg2ZjBmNSIsIm5iZiI6MTc3NDU1ODYwNi42MjQsInN1YiI6IjY5YzU5ZDhlN2EyZTMyYTU0Mzg5YmM2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7R4dJB85EycLDc7iEwXZUgRkEc1A3H6TKZ9vaHKIvHI';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const getHeaders = () => ({
  'Authorization': `Bearer ${TMDB_TOKEN}`,
  'Content-Type': 'application/json'
});

export const getConfig = async () => {
  try {
    const response = await fetch(`${BASE_URL}/configuration`, { headers: getHeaders() });
    return await response.json();
  } catch (error) {
    console.error('Error fetching config:', error);
    return null;
  }
};

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?page=${page}&language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformMovieData) || [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const getTrendingMovies = async (timeWindow = 'week') => {
  try {
    const response = await fetch(`${BASE_URL}/trending/movie/${timeWindow}?language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformMovieData) || [];
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/top_rated?page=${page}&language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformMovieData) || [];
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/upcoming?language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformMovieData) || [];
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/now_playing?language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformMovieData) || [];
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};

export const getPopularTVShows = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/tv/popular?page=${page}&language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformTVData) || [];
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    return [];
  }
};

export const getTopRatedTVShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tv/top_rated?language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformTVData) || [];
  } catch (error) {
    console.error('Error fetching top rated TV shows:', error);
    return [];
  }
};

export const getTrendingTVShows = async (timeWindow = 'week') => {
  try {
    const response = await fetch(`${BASE_URL}/trending/tv/${timeWindow}?language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformTVData) || [];
  } catch (error) {
    console.error('Error fetching trending TV shows:', error);
    return [];
  }
};

export const getMoviesByGenre = async (genreId, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/discover/movie?with_genres=${genreId}&page=${page}&language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformMovieData) || [];
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    return [];
  }
};

export const getTVShowsByGenre = async (genreId, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/discover/tv?with_genres=${genreId}&page=${page}&language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformTVData) || [];
  } catch (error) {
    console.error('Error fetching TV shows by genre:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?append_to_response=videos,credits&language=es-ES`, { headers: getHeaders() });
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getTVShowDetails = async (tvId) => {
  try {
    const response = await fetch(`${BASE_URL}/tv/${tvId}?append_to_response=videos,credits&language=es-ES`, { headers: getHeaders() });
    return await response.json();
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    return null;
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}&language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformMovieData) || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const searchTVShows = async (query, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/search/tv?query=${encodeURIComponent(query)}&page=${page}&language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.results?.map(transformTVData) || [];
  } catch (error) {
    console.error('Error searching TV shows:', error);
    return [];
  }
};

export const getGenres = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genre/movie/list?language=es-ES`, { headers: getHeaders() });
    const data = await response.json();
    return data.genres || [];
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

const transformMovieData = (movie) => {
  const trailer = movie.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');
  return {
    id: movie.id,
    tmdb_id: movie.id,
    title: movie.title,
    name: movie.title,
    original_title: movie.original_title,
    poster_path: movie.poster_path ? `${IMAGE_BASE_URL}/w500${movie.poster_path}` : null,
    backdrop_path: movie.backdrop_path ? `${IMAGE_BASE_URL}/w1280${movie.backdrop_path}` : null,
    overview: movie.overview || 'No hay descripción disponible.',
    overview_es: movie.overview || 'No hay descripción disponible.',
    vote_average: movie.vote_average || 0,
    vote_count: movie.vote_count || 0,
    release_date: movie.release_date || null,
    first_air_date: null,
    media_type: 'movie',
    genre_ids: movie.genre_ids || [],
    genres: movie.genres || [],
    original_language: movie.original_language,
    popularity: movie.popularity || 0,
    adult: movie.adult || false,
    trailer_url: trailer ? `https://www.youtube.com/embed/${trailer.key}` : null,
    featured: movie.popularity > 500
  };
};

const transformTVData = (tv) => {
  const trailer = tv.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');
  return {
    id: tv.id,
    tmdb_id: tv.id,
    title: tv.name,
    name: tv.name,
    original_title: tv.original_name,
    poster_path: tv.poster_path ? `${IMAGE_BASE_URL}/w500${tv.poster_path}` : null,
    backdrop_path: tv.backdrop_path ? `${IMAGE_BASE_URL}/w1280${tv.backdrop_path}` : null,
    overview: tv.overview || 'No hay descripción disponible.',
    overview_es: tv.overview || 'No hay descripción disponible.',
    vote_average: tv.vote_average || 0,
    vote_count: tv.vote_count || 0,
    release_date: tv.first_air_date || null,
    first_air_date: tv.first_air_date || null,
    media_type: 'tv',
    genre_ids: tv.genre_ids || [],
    genres: tv.genres || [],
    original_language: tv.original_language,
    popularity: tv.popularity || 0,
    adult: false,
    trailer_url: trailer ? `https://www.youtube.com/embed/${trailer.key}` : null,
    number_of_seasons: tv.number_of_seasons,
    number_of_episodes: tv.number_of_episodes,
    featured: tv.popularity > 500
  };
};

export const getCategories = () => [
  { id: 'originals', title: 'Netflix Originals', type: 'tv', fetch: getPopularTVShows },
  { id: 'trending', title: 'Tendencias', type: 'movie', fetch: () => getTrendingMovies() },
  { id: 'toprated', title: 'Películas mejor valoradas', type: 'movie', fetch: getTopRatedMovies },
  { id: 'nowplaying', title: 'En cartelera', type: 'movie', fetch: getNowPlayingMovies },
  { id: 'upcoming', title: 'Próximamente', type: 'movie', fetch: getUpcomingMovies },
  { id: 'action', title: 'Acción', type: 'movie', fetch: () => getMoviesByGenre(28) },
  { id: 'comedy', title: 'Comedia', type: 'movie', fetch: () => getMoviesByGenre(35) },
  { id: 'horror', title: 'Terror', type: 'movie', fetch: () => getMoviesByGenre(27) },
  { id: 'romance', title: 'Romance', type: 'movie', fetch: () => getMoviesByGenre(10749) },
  { id: 'documentary', title: 'Documentales', type: 'movie', fetch: () => getMoviesByGenre(99) },
  { id: 'animation', title: 'Animación', type: 'movie', fetch: () => getMoviesByGenre(16) },
  { id: 'scifi', title: 'Ciencia ficción', type: 'movie', fetch: () => getMoviesByGenre(878) },
];

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export default {
  getPopularMovies,
  getTrendingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getPopularTVShows,
  getTopRatedTVShows,
  getTrendingTVShows,
  getMoviesByGenre,
  getMovieDetails,
  searchMovies,
  searchTVShows,
  getCategories,
  getImageUrl
};