import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollUp(lastScrollPosition >= currentScrollPosition);
      setScrollPosition(currentScrollPosition);
      lastScrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollUp, scrollPosition };
};

export default useScroll;
