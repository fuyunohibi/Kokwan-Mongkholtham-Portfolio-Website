import React, { useState, useEffect } from 'react';

const useCheckScreenSize = (size) => {
  const [isTablet, setIsTablet] = useState(() => window.innerWidth >= 640);
  const [isBreakpoint, setIsBreakpoint] = useState(() => window.innerWidth >= 767);
  const [isLaptop, setIsLaptop] = useState(() => window.innerWidth >= 1024);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 640);
      setIsBreakpoint(window.innerWidth >= 767);
      setIsLaptop(window.innerWidth >= 1024);
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(size === 'tablet') return isTablet;
  if(size === 'breakpoint') return isBreakpoint;
  if(size === 'laptop') return isLaptop;
  if(size === 'desktop') return isDesktop;
};

export default useCheckScreenSize;
