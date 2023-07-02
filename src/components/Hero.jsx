import React from 'react';
import { heroBg } from '../assets';

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img 
        src={heroBg} 
        alt='Hero-Bg'
        className='w-full h-full object-cover'
      />
      <div className='max-w-[1140px] m-auto'>
        <div className='flex flex-col absolute top-[40%] w-full h-full md:-[50%] max-w-[600px] text-white p-4'>
          <h1 className='text-4xl font-bold'>Find Your Special Trip</h1>
          <h2 className='text-4xl py-4 italic'>With Wanderlust</h2>
          <p>
            Experience the world like never before with our travel website. Discover breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories. Whether you're seeking thrilling adventures, serene landscapes, or vibrant cityscapes, our platform offers a curated selection of extraordinary experiences. Embark on your next journey with us and let the wanderlust in you be ignited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;