/**
 * Contexto global de la aplicación
 * Gestiona el estado compartido entre componentes
 */
import { createContext, useContext, useState, useCallback } from 'react';
import { searchMovies as searchMoviesData } from '../data/movies';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem('netflix_mylist');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      setSearchResults(searchMoviesData(query));
    } else {
      setSearchResults([]);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  const openModal = useCallback((movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setSelectedMovie(null);
    document.body.style.overflow = 'auto';
  }, []);

  const addToMyList = useCallback((movie) => {
    setMyList(prev => {
      const exists = prev.find(m => m.id === movie.id);
      if (exists) return prev;
      const newList = [...prev, movie];
      localStorage.setItem('netflix_mylist', JSON.stringify(newList));
      return newList;
    });
  }, []);

  const removeFromMyList = useCallback((movieId) => {
    setMyList(prev => {
      const newList = prev.filter(m => m.id !== movieId);
      localStorage.setItem('netflix_mylist', JSON.stringify(newList));
      return newList;
    });
  }, []);

  const isInMyList = useCallback((movieId) => {
    return myList.some(m => m.id === movieId);
  }, [myList]);

  const value = {
    searchQuery,
    searchResults,
    selectedMovie,
    showModal,
    myList,
    handleSearch,
    clearSearch,
    openModal,
    closeModal,
    addToMyList,
    removeFromMyList,
    isInMyList,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe usarse dentro de AppProvider');
  }
  return context;
};

export default AppContext;
