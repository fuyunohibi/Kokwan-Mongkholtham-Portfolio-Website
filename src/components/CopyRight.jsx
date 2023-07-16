import React from 'react';

const CopyRight = ({ borderColor, textColor }) => {
   return (
      <div 
         name='copyright' 
         className={`${borderColor ? borderColor : 'border-primary'} fixed left-[-5.1rem] transform rotate-90 translate-y-[20rem] smallMobile:translate-y-[18rem] breakpoint:translate-y-[25rem] border-b-4 z-[999] text-center leading-3 pl-[2px] breakpoint:left-[-7.18rem]`}
      >
         <p 
            className={`${textColor ? textColor: 'text-primary'} text-[10px] font-japan tracking-[0.2em] mb-1 breakpoint:text-[14px]`}
         >
            @Ko-Kwan Mognkholtham
         </p>
      </div>
   );
};

export default CopyRight;
