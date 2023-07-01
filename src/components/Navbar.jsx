import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav((prev) => !prev)
  };
  
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='hidden sm:flex px-4'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='#gallery'>Gallery</a>
        </li>
        <li>
          <a href='#deals'>Deals</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4' />
        <FaGooglePlusG className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaInstagram className='mx-4' />
      </div>
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>
      <div 
        onClick={handleNav}
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 bg-black/90 left-0 top-0 w-full h-screen px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className='w-full h-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <a href='/'>Home</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#gallery'>Gallery</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#deals'>Deals</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;