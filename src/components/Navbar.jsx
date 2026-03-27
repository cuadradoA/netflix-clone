/**
 * Componente Navbar - Barra de navegación principal
 * Incluye logo, menú, búsqueda y cambio de estilo al hacer scroll
 */
import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import './Navbar.css';

const Navbar = ({ onLoginClick }) => {
  const [isScrolled] = useScroll(50);
  const { user, logout } = useAuth();
  const { searchQuery, searchResults, handleSearch, clearSearch, openModal } = useApp();
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMovieClick = (movie) => {
    clearSearch();
    setShowSearch(false);
    openModal(movie);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__left">
          <div className="navbar__logo">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              alt="Netflix" 
            />
          </div>

          <ul className={`navbar__menu ${mobileMenuOpen ? 'navbar__menu--open' : ''}`}>
            <li className="navbar__menu-item navbar__menu-item--active">Inicio</li>
            <li className="navbar__menu-item">Series</li>
            <li className="navbar__menu-item">Películas</li>
            <li className="navbar__menu-item">Novedades populares</li>
            <li className="navbar__menu-item">Mi lista</li>
          </ul>

          <button 
            className="navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>

        <div className="navbar__right">
          <div className={`navbar__search ${showSearch ? 'navbar__search--active' : ''}`}>
            <button 
              className="navbar__search-btn"
              onClick={() => setShowSearch(!showSearch)}
            >
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
            
            <input
              type="text"
              placeholder="Buscar películas, series..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="navbar__search-input"
            />

            {showSearch && searchQuery && (
              <div className="navbar__search-results">
                {searchResults.length > 0 ? (
                  searchResults.map(movie => (
                    <div 
                      key={movie.id}
                      className="navbar__search-result"
                      onClick={() => handleMovieClick(movie)}
                    >
                      <img src={movie.poster_path} alt={movie.title} />
                      <div className="navbar__search-result-info">
                        <span className="navbar__search-result-title">{movie.title}</span>
                        <span className="navbar__search-result-meta">
                          {movie.release_date?.split('-')[0]} • {movie.media_type === 'tv' ? 'Serie' : 'Película'}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="navbar__search-no-results">No se encontraron resultados</div>
                )}
              </div>
            )}
          </div>

          <div className="navbar__notifications">
            <svg viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
          </div>

          {user ? (
            <div className="navbar__user">
              <div className="navbar__avatar">
                <img src={user.avatar} alt={user.name} />
              </div>
              <button className="navbar__logout" onClick={logout}>
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button className="navbar__login-btn" onClick={onLoginClick}>
              Iniciar sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
