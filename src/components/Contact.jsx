import React from 'react';
import { contactImg } from '../assets';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4'>
      <h2 className='text-center text-gray-700 p-4'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src={contactImg} alt='contact-img' />
        <form>
          <div className='grid grid-cols-2'>
            <input className='border m-2 p-2' type='text' placeholder='First name' />
            <input className='border m-2 p-2' type='text' placeholder='Last name' />
            <input className='border m-2 p-2' type='email' placeholder='Email' />
            <input className='border m-2 p-2' type='tel' placeholder='Phone number' />
            <textarea className='border col-span-2 m-2 p-2' cols={30} rows={10} />
            <button className='col-span-2 m-2'>Send Message</button>
          </div>
        </form> 
      </div>
    </div>
  );
};

export default Contact;