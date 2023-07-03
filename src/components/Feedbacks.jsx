import React from 'react';
import { person1, person2, person3 } from '../assets'
import { BsChatSquareQuote } from 'react-icons/bs';

const Feedbacks = () => {
  return (
    <div id='feedbacks' className='max-w-[1140px] m-auto w-full p-4'>
      <h2 className='text-center text-gray-700 p-4'>Feedbacks</h2>
      <div className='grid sm:grid-cols-3 gap-4'>

        <div className='flex flex-col items-center justify-center my-4'>
          <BsChatSquareQuote size={30} className='text-[var(--primary-dark)]' />
          <p className='py-5 text-center text-gray-600'>
            Our trip with your travel company exceeded all expectations! From the seamless booking process to the personalized itinerary, every aspect of our journey was well-planned and executed. The destinations we visited were stunning, and the accommodations were top-notch.
          </p>
          <div className='flex items-center gap-3'>
            <img className='w-20 h-20 rounded-full object-cover' src={person1} alt='person-img' />
            <h3 className='text-xl font-semibold'>Emily</h3>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center my-4'>
          <BsChatSquareQuote size={30} className='text-[var(--primary-dark)]' />
          <p className='py-5 text-center text-gray-600'>
            We can't thank your team enough for the remarkable travel experience! From the initial inquiry to the final farewell, everything was handled with utmost professionalism. We wholeheartedly recommend your services to fellow travelers seeking an unforgettable expedition.
          </p>
          <div className='flex items-center gap-3'>
            <img className='w-20 h-20 rounded-full object-cover' src={person2} alt='person-img' />
            <h3 className='text-xl font-semibold'>Benjamin</h3>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center my-4'>
          <BsChatSquareQuote size={30} className='text-[var(--primary-dark)]' />
          <p className='py-5 text-center text-gray-600'>
            Our journey with your travel company was nothing short of incredible! The level of attention and care we received was unparalleled. Our knowledgeable guide made each step of the trip engaging and informative. We can't wait to embark on another adventure with you!
          </p>
          <div className='flex items-center gap-3'>
            <img className='w-20 h-20 rounded-full object-cover' src={person3} alt='person-img' />
            <h3 className='text-xl font-semibold'>Sophia</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feedbacks;