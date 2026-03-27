/**
 * Hook personalizado para detectar cuando el usuario hace scroll
 * @param {number} threshold - Pixeles de scroll para activar el estado
 * @returns {Array} [isScrolled, scrollPosition]
 */
import { useState, useEffect } from 'react';

export const useScroll = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return [isScrolled, scrollPosition];
};

export default useScroll;
