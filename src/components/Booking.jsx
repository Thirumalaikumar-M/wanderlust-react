import React from 'react';

const Booking = () => {
  return (
    <div id='booking' className='max-w-[1140px] m-auto w-full p-4'>
      <form className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2 py-2'>
          <label>Destinations</label>
          <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
            <option>Dubai</option>
            <option>Maldives</option>
            <option>Paris</option>
            <option>Rome</option>
            <option>India</option>
          </select>
        </div>
        <div className='w-full flex'>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label>Check-In</label>
            <input type='date' />
          </div>
          <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
            <label>Check-Out</label>
            <input type='date' />
          </div>
        </div>
        <div className='flex flex-col my-2 p-2 w-full'>
          <label>Search</label>
          <button className='w-full'>Check Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;