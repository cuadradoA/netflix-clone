/**
 * Componente de autenticación simulada
 * Pantalla de login al estilo de Netflix
 */
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const { login, loading: authLoading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await login(email, password);
    setIsSubmitting(false);
  };

  return (
    <div className="login">
      <div className="login__background">
        <img 
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1920&h=1080&fit=crop" 
          alt="Background" 
          className="login__bg-image"
        />
        <div className="login__overlay" />
      </div>

      <div className="login__container">
        <div className="login__logo">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix" 
          />
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>
          
          {error && <div className="login__error">{error}</div>}

          <input
            type="email"
            placeholder="Email o número de teléfono"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login__input"
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__input"
            required
          />

          <button 
            type="submit" 
            className="login__submit"
            disabled={isSubmitting || authLoading}
          >
            {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>

          <div className="login__help">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>

          <div className="login__signup">
            <p>¿Nuevo en Netflix? <a href="#">Suscríbete ahora</a></p>
          </div>
        </form>
      </div>

      <footer className="login__footer">
        <div className="login__footer-content">
          <p>¿Preguntas? Llama al 1-800-012-398</p>
          <div className="login__footer-links">
            <a href="#">Centro de ayuda</a>
            <a href="#">Términos de uso</a>
            <a href="#">Privacidad</a>
            <a href="#">Preferencias de cookies</a>
            <a href="#">Información corporativa</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
