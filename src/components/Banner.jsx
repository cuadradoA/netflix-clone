/**
 * Componente Banner - Hero principal de Netflix
 * Muestra la película destacada con botones de acción
 */
import { useApp } from '../context/AppContext';
import './Banner.css';

const Banner = ({ movie }) => {
  const { addToMyList, removeFromMyList, isInMyList, openModal } = useApp();

  const handleAddToList = () => {
    if (isInMyList(movie.id)) {
      removeFromMyList(movie.id);
    } else {
      addToMyList(movie);
    }
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  if (!movie) return null;

  return (
    <header 
      className="banner"
      style={{
        backgroundImage: `url(${movie.poster_path?.startsWith('http')
          ? movie.poster_path
          : movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : movie.backdrop_path
        })`,
      }}
    >
      <div className="banner__fade-top" />
      
      <div className="banner__contents">
        <div className="banner__info">
          <h1 className="banner__title">
            {movie.title || movie.name}
          </h1>
          
          <div className="banner__meta">
            <span className="banner__rating">
              <svg viewBox="0 0 24 24" className="banner__star">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {movie.vote_average?.toFixed(1)}
            </span>
            <span className="banner__year">
              {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}
            </span>
            <span className="banner__type">
              {movie.media_type === 'tv' ? 'SERIE' : 'PELÍCULA'}
            </span>
            <span className="banner__hd">HD</span>
          </div>

          <p className="banner__description">
            {truncate(movie.overview || movie.overview_es, 180)}
          </p>
        </div>

        <div className="banner__buttons">
          <button 
            className="banner__btn banner__btn--play"
            onClick={() => openModal(movie)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Reproducir
          </button>
          
          <button 
            className={`banner__btn banner__btn--info ${isInMyList(movie.id) ? 'banner__btn--added' : ''}`}
            onClick={handleAddToList}
          >
            <svg viewBox="0 0 24 24">
              {isInMyList(movie.id) ? (
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              ) : (
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              )}
            </svg>
            {isInMyList(movie.id) ? 'Añadida' : 'Mi lista'}
          </button>

          <button 
            className="banner__btn banner__btn--more"
            onClick={() => openModal(movie)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
            </svg>
            Más información
          </button>
        </div>
      </div>

      <div className="banner__fade-bottom" />
    </header>
  );
};

export default Banner;
