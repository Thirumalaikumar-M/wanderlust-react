import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-5 m-auto border-t-4'>
      <p className='text-center text-gray-700'>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
    </div>
  );
};

export default Footer;