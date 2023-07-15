import React from 'react';
import kokwan_logo_2 from '../assets/images/FOOTER/kokwan_logo_2.svg'

const Footer = () => {
  return (
    <footer data-scroll-section className='h-52 bg-dark-background laptop:h-36'>
      <div name='inner' className='mx-[5%] p-3 laptop:p-5 mb-4 flex flex-col laptop:justify-center items-center'>
        <div name='logo-container'  className='flex justify-center mb-3'>
          <img src={kokwan_logo_2} alt={kokwan_logo_2} className='w-12 h-12' /> 
        </div>
        <p className='font-japan text-xs text-white-100'>© 2023 Ko-Kwan Mognkholtham. All Rights Reserved.</p>
      </div>
    </footer>
    
  );
};

export default Footer;