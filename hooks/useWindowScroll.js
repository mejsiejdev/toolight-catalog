import React, { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [scroll, setScroll] = useState(0);
  useLayoutEffect(() => {
    const updateSize = (e) => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', updateSize);
    updateSize();
    return () => window.removeEventListener('scroll', updateSize);
  }, []);
  return scroll;
};

export default useWindowSize;
