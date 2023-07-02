import React from 'react';
import { adventure, wildlife, culture, foods, themepark, viewpoint } from '../assets';

const Activities = () => {
  return (
    <div id='activities' className='max-w-[1140px] m-auto w-full md:grid grid-cols-3 mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Adventures</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={adventure}
          alt='adventure'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Viewpoints</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={viewpoint}
          alt='viewpoint'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cultures</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={culture}
          alt='culture'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Foods</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={foods}
          alt='foods'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Wildlife</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={wildlife}
          alt='wildlife'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Themeparks</h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src={themepark}
          alt='themepark'
        />
      </div>
    </div>
  );
};

export default Activities;