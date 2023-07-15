import React, { Children, useEffect, useState } from 'react';

const gradientDirections = ['to bottom right', 'to bottom left', 'to top right', 'to top left'];

const RandomGradientBlock = ({ children }) => {
  const [gradientDirection, setGradientDirection] = useState('to bottom right');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gradientDirections.length);
    setGradientDirection(gradientDirections[randomIndex]);
  }, []);

  const style = {
    background: `linear-gradient(${gradientDirection}, #f8efe5, #f3e9d2, #eae7da)`,
  };

  return (
    <div style={style}>
        {children}
    </div>
  );
};

export default RandomGradientBlock;
