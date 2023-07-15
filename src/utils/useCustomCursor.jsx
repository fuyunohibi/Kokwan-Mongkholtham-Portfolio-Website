import React, { useEffect, useRef } from 'react';

const useCustomCursor = () => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    if (cursorRef.current && cursor2Ref.current) {
      document.addEventListener('mousemove', (e) => {
        cursorRef.current.setAttribute(
          'style',
          `top: ${e.clientY}px; left: ${e.clientX}px;`
        );
        cursor2Ref.current.setAttribute(
          'style',
          `top: ${e.clientY}px; left: ${e.clientX}px;`
        );
      });
    }
  }, []);

  return [cursorRef, cursor2Ref];
}

export default useCustomCursor;
