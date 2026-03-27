/**
 * Contexto de autenticación
 * Comparte el estado del usuario entre componentes
 */
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('netflix_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password) {
      const userData = {
        id: 1,
        email,
        name: email.split('@')[0],
        avatar: 'https://i.pravatar.cc/150?u=' + email
      };
      
      setUser(userData);
      localStorage.setItem('netflix_user', JSON.stringify(userData));
      setLoading(false);
      return true;
    } else {
      setError('Por favor ingresa email y contraseña');
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('netflix_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

export default AuthContext;
