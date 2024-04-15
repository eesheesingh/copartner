import React, { useState } from 'react';
import { Group } from '../assets';
import JoinTeam from './JoinTeam';

const Stock = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-1 mb-4">
      {/* Container 1 */}
      <div className="flex flex-col md:flex-row mb-8 md:text-left text-center items-center justify-start">
        {/* Left Column */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[70px] leading-[40px]">Our Stock Market <br/>Expertise</h2>
          <p className='text-90 md:text-xl text-md text-[#ffffffbb] md:px-1 px-1 md:hidden'>Guiding traders towards profitable decisions in the dynamic stock market landscape.</p> 
          <p className="text-90 md:text-xl text-[#ffffffbb] mb-6 md:px-1 px-4 md:block hidden">Tap into our stock market expertise and elevate your trading journey with informed insights and strategic guidance.
          <br/>
          Guiding traders towards profitable decisions in the dynamic stock market landscape.
          </p>
          <div className='ml-1 md:block hidden'>
            <button onClick={openModal} className='main-button'>Join Expert Team</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 relative">
          {/* Add your stock image here */}
          <img
            src={Group}
            alt="Stock"
            className="w-90"
            style={{
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)',
            }}
          />
          <div className='md:hidden'>
            <button onClick={openModal} className='main-button'>Join Expert Team</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <JoinTeam closeModal={closeModal} />}
    </div>
  );
};

export default Stock;
