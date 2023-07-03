import React from 'react';
import { gallery1, gallery2, gallery3, gallery4, gallery5 } from '../assets';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full p-4'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover' src={gallery1} alt='gallery-img' />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={gallery2} alt='gallery-img' />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={gallery3} alt='gallery-img' />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={gallery4} alt='gallery-img' />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={gallery5} alt='gallery-img' />
        </div>
      </div>
    </div>
  );
};

export default Gallery;