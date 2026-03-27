/**
 * Componente Modal - Detalles y reproductor simulado
 * Muestra información de la película con video de YouTube
 */
import { useApp } from '../context/AppContext';
import './Modal.css';

const Modal = () => {
  const { selectedMovie, showModal, closeModal, addToMyList, removeFromMyList, isInMyList } = useApp();
  
  if (!showModal || !selectedMovie) return null;

  const inMyList = isInMyList(selectedMovie.id);

  const handleAddToList = () => {
    if (inMyList) {
      removeFromMyList(selectedMovie.id);
    } else {
      addToMyList(selectedMovie);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}>
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        <div className="modal__video-container">
          <img
            className="modal__poster"
            src={selectedMovie.backdrop_path?.startsWith('http')
              ? selectedMovie.backdrop_path
              : selectedMovie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`
                : selectedMovie.poster_path?.startsWith('http')
                  ? selectedMovie.poster_path
                  : `https://image.tmdb.org/t/p/w780${selectedMovie.poster_path}`
            }
            alt={selectedMovie.title || selectedMovie.name}
          />
        </div>

        <div className="modal__info">
          <div className="modal__header">
            <h1 className="modal__title">{selectedMovie.title || selectedMovie.name}</h1>
            <div className="modal__actions">
              <button className="modal__btn modal__btn--play">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Reproducir
              </button>
              
              <button 
                className={`modal__btn modal__btn--check ${inMyList ? 'modal__btn--added' : ''}`}
                onClick={handleAddToList}
              >
                <svg viewBox="0 0 24 24">
                  {inMyList ? (
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  ) : (
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  )}
                </svg>
              </button>
              
              <button className="modal__btn modal__btn--volume">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="modal__meta">
            <span className="modal__match">{Math.round(selectedMovie.vote_average * 10)}% coincidence</span>
            <span className="modal__year">
              {selectedMovie.release_date?.split('-')[0] || selectedMovie.first_air_date?.split('-')[0]}
            </span>
            <span className="modal__hd">HD</span>
            <span className="modal__duration">
              {selectedMovie.media_type === 'tv' ? '1 Season' : '2h 32m'}
            </span>
          </div>

          <p className="modal__description">
            {selectedMovie.overview || selectedMovie.overview_es}
          </p>

          <div className="modal__details">
            <div className="modal__detail">
              <span className="modal__detail-label">Reparto:</span>
              <span className="modal__detail-value">Kevin Costner, Gary Oldman, Michael Douglas</span>
            </div>
            <div className="modal__detail">
              <span className="modal__detail-label">Géneros:</span>
              <span className="modal__detail-value">
                {selectedMovie.genre_ids?.slice(0, 3).map(id => getGenreName(id)).join(', ')}
              </span>
            </div>
            <div className="modal__detail">
              <span className="modal__detail-label">Incluye:</span>
              <span className="modal__detail-value">Audio en Español Latino, Subtitulos</span>
            </div>
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
  };
  return genres[id] || 'Otro';
};

export default Modal;
