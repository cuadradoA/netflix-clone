/**
 * Componente Card - Tarjeta de película/serie
 * Muestra la imagen con efectos hover
 */
import { useApp } from '../context/AppContext';
import './Card.css';

const Card = ({ movie, large = false, onClick }) => {
  const { addToMyList, removeFromMyList, isInMyList } = useApp();
  const inMyList = isInMyList(movie.id);

  const handleAddToList = (e) => {
    e.stopPropagation();
    if (inMyList) {
      removeFromMyList(movie.id);
    } else {
      addToMyList(movie);
    }
  };

  return (
    <div 
      className={`card ${large ? 'card--large' : ''}`}
      onClick={onClick}
    >
      <img 
        className="card__image"
        src={movie.poster_path}
        alt={movie.title || movie.name}
        loading="lazy"
      />
      
      <div className="card__overlay">
        <div className="card__actions">
          <button className="card__btn card__btn--play" aria-label="Reproducir">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          
          <button 
            className={`card__btn ${inMyList ? 'card__btn--added' : ''}`}
            onClick={handleAddToList}
            aria-label={inMyList ? 'Quitar de mi lista' : 'Añadir a mi lista'}
          >
            <svg viewBox="0 0 24 24">
              {inMyList ? (
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              ) : (
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              )}
            </svg>
          </button>
          
          <button className="card__btn card__btn--expand" aria-label="Más información">
            <svg viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>
        </div>

        <div className="card__info">
          <h3 className="card__title">{movie.title || movie.name}</h3>
          
          <div className="card__meta">
            <span className="card__rating">
              <svg viewBox="0 0 24 24" className="card__star">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              {movie.vote_average?.toFixed(1)}
            </span>
            <span className="card__year">
              {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}
            </span>
            <span className="card__hd">HD</span>
          </div>

          <div className="card__genres">
            {movie.genre_ids?.slice(0, 3).map((genreId, index) => (
              <span key={index} className="card__genre">
                {getGenreName(genreId)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getGenreName = (id) => {
  const genres = {
    28: 'Acción',
    12: 'Aventura',
    35: 'Comedia',
    18: 'Drama',
    27: 'Terror',
    53: 'Suspenso',
    80: 'Crimen',
    99: 'Documental',
    10749: 'Romance',
    878: 'Ciencia ficción',
    9648: 'Misterio',
    10765: 'Fantasía',
    10770: 'TV Movie',
    16: 'Animación',
    10751: 'Familia',
    14: 'Fantasía',
    36: 'Historia',
    10752: 'Guerra',
    10402: 'Música',
  };
  return genres[id] || 'Otro';
};

export default Card;
