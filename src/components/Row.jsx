/**
 * Componente Row - Fila de contenido horizontal
 * Carrusel de películas con scroll lateral
 */
import { useRef, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Card from './Card';
import './Row.css';

const Row = ({ title, movies, large = false }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const { openModal } = useApp();

  const handleScroll = () => {
    const row = rowRef.current;
    if (!row) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = row;
    setShowLeftBtn(scrollLeft > 0);
    setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const row = rowRef.current;
    if (row) {
      row.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => row?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (direction) => {
    const row = rowRef.current;
    if (!row) return;

    const scrollAmount = large ? 400 : 300;
    
    if (direction === 'left') {
      row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    
    setIsMoved(true);
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      
      <div className="row__posters-container">
        {showLeftBtn && (
          <button 
            className="row__btn row__btn--left"
            onClick={() => handleClick('left')}
            aria-label="Desplazar a la izquierda"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        )}

        <div 
          className={`row__posters ${large ? 'row__posters--large' : ''}`}
          ref={rowRef}
        >
          {movies.map((movie) => (
            <Card 
              key={movie.id} 
              movie={movie} 
              large={large}
              onClick={() => openModal(movie)}
            />
          ))}
        </div>

        {showRightBtn && (
          <button 
            className="row__btn row__btn--right"
            onClick={() => handleClick('right')}
            aria-label="Desplazar a la derecha"
          >
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Row;
