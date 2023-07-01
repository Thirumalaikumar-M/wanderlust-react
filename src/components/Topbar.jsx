import React from 'react';
import { AiOutlineClockCircle, AiOutlinePhone} from 'react-icons/ai';
import { wanderlustLogo } from '../assets';

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <img src={wanderlustLogo} alt='wanderlust-logo' className='w-20 h-10 sm:w-40 sm:h-10' />
      <div className='flex'>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
          <p className='text-sm text-gray-700'>9:00 AM - 6:00 PM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlinePhone size={20} className='mr-2 text-[var(--primary-dark)]' />
          <p className='text-sm text-gray-700'>1-555-444-1234</p>
        </div>
        <button>Quick book</button>
      </div>
    </div>
  );
};

export default Topbar;