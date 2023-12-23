import { useEffect, RefObject, useState } from 'react';

function useClickOutside<T extends HTMLElement>(ref: RefObject<T>): boolean {
  const [isClickedOutside, setIsClickedOutside] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // console.log("yes")
        setIsClickedOutside(true);
      } else {
        // console.log("no")
        setIsClickedOutside(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  return isClickedOutside;
}

export default useClickOutside;
