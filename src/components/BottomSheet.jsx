import React from 'react';

const BottomSheet = ({ show, children }) => {
  return (
    <div className={`glass-navbar fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[90vw] mobile:w-[25rem] z-50  rounded-[2rem] 
        tablet:w-[30rem] flex flex-col justify-start items-center p-4 transition-all duration-300 ease-in-out
        ${ show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0' } `}
    >
      {children}
    </div>
  );
};

export default BottomSheet;

