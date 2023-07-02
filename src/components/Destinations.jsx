import React from 'react';
import { burjkhalifa, libertystatue, tajmahal, paris, machupicchu, mysorepalace } from '../assets';
import { MdOutlineLocationOn, MdStarOutline } from 'react-icons/md';

const Destinations = () => {
  return (
    <div id='destinations' className='max-w-[1140px] m-auto w-full p-4'>
      <h2 className='text-center text-gray-700 p-4'>Popular Destinations</h2>
      <div className='sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-4'>

        <div className='p-3 shadow-lg my-2'>
          <div className='relative'>
            <img
              className='w-full h-full object-cover relative'
              src={burjkhalifa}
              alt='burjkhalifa'
            />
            <h2 className='absolute bottom-0 left-0 text-white text-2xl font-bold p-4'>Burjkhalifa</h2>
          </div>
          <div className='flex py-2 my-2 justify-start items-center'>
            <div className='flex justify-between items-center px-2'>
              <MdStarOutline size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p className='text-[var(--primary-dark)] mr-1'>4.89</p>
              <span>(12.5k)</span>
            </div>
            <div className='flex items-center justify-between px-2'>
              <MdOutlineLocationOn size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p>Dubai, UAE</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <button className='max-w-[120px]'>Book Now</button>
            <p className='py-3 text-justify text-gray-600'>
              Standing tall in the mesmerizing city of Dubai, the Burj Khalifa is an architectural marvel and the tallest building in the world. Take an elevator ride to the observation deck on the 148th floor and witness breathtaking panoramic views of the city's skyline. Experience the luxurious lifestyle of Dubai, indulge in world-class shopping at the Dubai Mall, and immerse yourself in the vibrant culture of the United Arab Emirates.
            </p>
          </div>
        </div>

        <div className='p-3 shadow-lg my-2'>
          <div className='relative'>
            <img
              className='w-full h-full object-cover relative'
              src={machupicchu}
              alt='machupicchu'
            />
            <h2 className='absolute bottom-0 left-0 text-white text-2xl font-bold p-4'>Machupicchu</h2>
          </div>
          <div className='flex py-2 my-2 justify-start items-center'>
            <div className='flex justify-between items-center px-2'>
              <MdStarOutline size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p className='text-[var(--primary-dark)] mr-1'>4.50</p>
              <span>(7.2k)</span>
            </div>
            <div className='flex items-center justify-between px-2'>
              <MdOutlineLocationOn size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p>Cordillera</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <button className='max-w-[120px]'>Book Now</button>
            <p className='py-3 text-justify text-gray-600'>
              Hidden high in the Andes Mountains, Machu Picchu is an ancient Inca citadel that continues to captivate visitors with its mystical allure. Trek along the Inca Trail, marvel at the intricate stone craftsmanship, and soak in the awe-inspiring views of the surrounding mountains. Discover the rich history and spiritual significance of this UNESCO World Heritage site and experience the enchanting beauty of the Peruvian Andes.
            </p>
          </div>
        </div>

        <div className='p-3 shadow-lg my-2'>
          <div className='relative'>
            <img
              className='w-full h-full object-cover relative'
              src={libertystatue}
              alt='libertystatue'
            />
            <h2 className='absolute bottom-0 left-0 text-white text-2xl font-bold p-4'>Liberty statue</h2>
          </div>
          <div className='flex py-2 my-2 justify-start items-center'>
            <div className='flex justify-between items-center px-2'>
              <MdStarOutline size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p className='text-[var(--primary-dark)] mr-1'>4.99</p>
              <span>(15.7k)</span>
            </div>
            <div className='flex items-center justify-between px-2'>
              <MdOutlineLocationOn size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p>New York</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <button className='max-w-[120px]'>Book Now</button>
            <p className='py-3 text-justify text-gray-600'>
              A symbol of freedom and democracy, the Statue of Liberty stands proudly in New York Harbor, welcoming millions of visitors each year. Take a ferry ride to Liberty Island and admire the majestic statue up close. Learn about its historical significance at the museum and enjoy panoramic views of the city from the observation deck. Explore the vibrant neighborhoods of Lower Manhattan and immerse yourself in the rich cultural tapestry of the city.
            </p>
          </div>
        </div>

        <div className='p-3 shadow-lg my-2'>
          <div className='relative'>
            <img
              className='w-full h-full object-cover relative'
              src={tajmahal}
              alt='tajmahal'
            />
            <h2 className='absolute bottom-0 left-0 text-white text-2xl font-bold p-4'>Taj Mahal</h2>
          </div>
          <div className='flex py-2 my-2 justify-start items-center'>
            <div className='flex justify-between items-center px-2'>
              <MdStarOutline size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p className='text-[var(--primary-dark)] mr-1'>4.77</p>
              <span>(10.5k)</span>
            </div>
            <div className='flex items-center justify-between px-2'>
              <MdOutlineLocationOn size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p>Agra, India</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <button className='max-w-[120px]'>Book Now</button>
            <p className='py-3 text-justify text-gray-600'>
              Regarded as one of the Seven Wonders of the World, the Taj Mahal is a breathtaking masterpiece of Mughal architecture. Located in the city of Agra, India, this UNESCO World Heritage site is a testament to love and beauty. Marvel at the intricate marble work, stroll through the serene gardens, and witness the changing hues of the iconic monument at sunrise or sunset. The Taj Mahal is a symbol of eternal love and a must-visit destination for cultural enthusiasts.
            </p>
          </div>
        </div>

        <div className='p-3 shadow-lg my-2'>
          <div className='relative'>
            <img
              className='w-full h-full object-cover relative'
              src={paris}
              alt='Eiffel Tower'
            />
            <h2 className='absolute bottom-0 left-0 text-white text-2xl font-bold p-4'>Eiffel Tower</h2>
          </div>
          <div className='flex py-2 my-2 justify-start items-center'>
            <div className='flex justify-between items-center px-2'>
              <MdStarOutline size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p className='text-[var(--primary-dark)] mr-1'>4.50</p>
              <span>(17.8k)</span>
            </div>
            <div className='flex items-center justify-between px-2'>
              <MdOutlineLocationOn size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p>Paris</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <button className='max-w-[120px]'>Book Now</button>
            <p className='py-3 text-justify text-gray-600'>
              As an iconic symbol of Paris and a global landmark, the Eiffel Tower attracts millions of visitors each year. Ascend to its observation decks for panoramic views of the romantic city, enjoy a picnic in the nearby Champ de Mars park, and experience the charm of the surrounding neighborhoods. Discover the art and culture of Paris in world-class museums, indulge in French cuisine, and stroll along the Seine River for a truly memorable experience.
            </p>
          </div>
        </div>

        <div className='p-3 shadow-lg my-2'>
          <div className='relative'>
            <img
              className='w-full h-full object-cover relative'
              src={mysorepalace}
              alt='mysore palace'
            />
            <h2 className='absolute bottom-0 left-0 text-white text-2xl font-bold p-4'>Mysore Palace</h2>
          </div>
          <div className='flex py-2 my-2 justify-start items-center'>
            <div className='flex justify-between items-center px-2'>
              <MdStarOutline size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p className='text-[var(--primary-dark)] mr-1'>4.89</p>
              <span>(12.5k)</span>
            </div>
            <div className='flex items-center justify-between px-2'>
              <MdOutlineLocationOn size={20} className='mr-2 text-[var(--primary-dark)]'/>
              <p>Mysore, India</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <button className='max-w-[120px]'>Book Now</button>
            <p className='py-3 text-justify text-gray-600'>
              Located in the southern state of Karnataka, Mysore Palace is a stunning example of Indo-Saracenic architecture and is renowned for its grandeur and opulence. Explore the intricate artwork, vibrant murals, and ornate interiors as you delve into the royal history of Mysore. Witness the palace come alive during the dazzling Dasara festival, when it is illuminated with thousands of lights. Experience the rich cultural heritage of Mysore and immerse yourself in its regal ambiance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;