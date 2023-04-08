import { useEffect, useState } from 'react';

const useScrollPosition = (id: string): number => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      const handleScroll = () => setScrollPosition(element.scrollTop);
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [id]);

  return scrollPosition;
};

export default useScrollPosition;