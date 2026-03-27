import { useState, useEffect, useCallback } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppProvider } from './context/AppContext';
import * as api from './services/api';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import Modal from './components/Modal';
import { SkeletonRow, SkeletonBanner } from './components/Skeleton';
import Login from './components/Login';

import './index.css';

const categories = [
  { id: 'originals', title: 'Netflix Originals', type: 'tv', fetch: api.getPopularTVShows, large: true },
  { id: 'trending', title: 'Tendencias', type: 'movie', fetch: () => api.getTrendingMovies() },
  { id: 'toprated', title: 'Películas mejor valoradas', type: 'movie', fetch: api.getTopRatedMovies },
  { id: 'nowplaying', title: 'En cartelera', type: 'movie', fetch: api.getNowPlayingMovies },
  { id: 'upcoming', title: 'Próximamente', type: 'movie', fetch: api.getUpcomingMovies },
  { id: 'action', title: 'Acción', type: 'movie', fetch: () => api.getMoviesByGenre(28) },
  { id: 'comedy', title: 'Comedia', type: 'movie', fetch: () => api.getMoviesByGenre(35) },
  { id: 'horror', title: 'Terror', type: 'movie', fetch: () => api.getMoviesByGenre(27) },
  { id: 'romance', title: 'Romance', type: 'movie', fetch: () => api.getMoviesByGenre(10749) },
  { id: 'documentary', title: 'Documentales', type: 'movie', fetch: () => api.getMoviesByGenre(99) },
  { id: 'animation', title: 'Animación', type: 'movie', fetch: () => api.getMoviesByGenre(16) },
  { id: 'scifi', title: 'Ciencia ficción', type: 'movie', fetch: () => api.getMoviesByGenre(878) },
];

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const { user } = useAuth();

  const fetchAllMovies = useCallback(async () => {
    setLoading(true);
    const movieData = {};

    const [trending, originals] = await Promise.all([
      api.getTrendingMovies(),
      api.getPopularTVShows()
    ]);

    if (trending.length > 0) {
      const randomMovie = trending[Math.floor(Math.random() * trending.length)];
      const details = await api.getMovieDetails(randomMovie.id);
      setFeaturedMovie(details ? { ...randomData(details), ...details } : randomMovie);
    } else if (originals.length > 0) {
      const randomShow = originals[Math.floor(Math.random() * originals.length)];
      const details = await api.getTVShowDetails(randomShow.id);
      setFeaturedMovie(details ? { ...transformTVData(details), ...details } : randomShow);
    }

    for (const cat of categories) {
      try {
        const results = await cat.fetch();
        movieData[cat.id] = results.slice(0, 20);
      } catch (err) {
        console.error(`Error fetching ${cat.id}:`, err);
        movieData[cat.id] = [];
      }
    }

    setMovies(movieData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      fetchAllMovies();
    }
  }, [user, fetchAllMovies]);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <Navbar />
      
      {loading ? (
        <>
          <SkeletonBanner />
          <SkeletonRow title="Cargando..." />
          <SkeletonRow title="Cargando..." />
          <SkeletonRow title="Cargando..." />
        </>
      ) : (
        <>
          {featuredMovie && <Banner movie={featuredMovie} />}
          
          <div className="app__content">
            {categories.map((cat) => (
              movies[cat.id]?.length > 0 && (
                <Row 
                  key={cat.id} 
                  title={cat.title} 
                  movies={movies[cat.id]} 
                  large={cat.large || false} 
                />
              )
            ))}
          </div>
        </>
      )}

      <Modal />

      <footer className="footer">
        <div className="footer__social">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </a>
        </div>
        <div className="footer__links">
          <a href="#" className="footer__link">Audio Description</a>
          <a href="#" className="footer__link">Help Center</a>
          <a href="#" className="footer__link">Gift Cards</a>
          <a href="#" className="footer__link">Media Center</a>
          <a href="#" className="footer__link">Investor Relations</a>
          <a href="#" className="footer__link">Jobs</a>
          <a href="#" className="footer__link">Terms of Use</a>
          <a href="#" className="footer__link">Privacy</a>
          <a href="#" className="footer__link">Legal Notices</a>
          <a href="#" className="footer__link">Cookie Preferences</a>
          <a href="#" className="footer__link">Corporate Information</a>
          <a href="#" className="footer__link">Contact Us</a>
        </div>
        <p className="footer__copyright">Netflix Clone - Demo Project</p>
      </footer>
    </div>
  );
};

const randomData = (data) => ({
  id: data.id,
  tmdb_id: data.id,
  title: data.title,
  name: data.title,
  original_title: data.original_title,
  poster_path: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null,
  backdrop_path: data.backdrop_path ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}` : null,
  overview: data.overview,
  overview_es: data.overview,
  vote_average: data.vote_average,
  vote_count: data.vote_count,
  release_date: data.release_date,
  media_type: 'movie',
  genres: data.genres || [],
  trailer_url: data.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube') ? `https://www.youtube.com/embed/${data.videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube').key}` : null,
  featured: true
});

const transformTVData = (tv) => ({
  id: tv.id,
  tmdb_id: tv.id,
  title: tv.name,
  name: tv.name,
  original_title: tv.original_name,
  poster_path: tv.poster_path ? `https://image.tmdb.org/t/p/w500${tv.poster_path}` : null,
  backdrop_path: tv.backdrop_path ? `https://image.tmdb.org/t/p/w1280${tv.backdrop_path}` : null,
  overview: tv.overview,
  overview_es: tv.overview,
  vote_average: tv.vote_average,
  vote_count: tv.vote_count,
  release_date: tv.first_air_date,
  first_air_date: tv.first_air_date,
  media_type: 'tv',
  genres: tv.genres || [],
  trailer_url: tv.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube') ? `https://www.youtube.com/embed/${tv.videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube').key}` : null,
  featured: true
});

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;