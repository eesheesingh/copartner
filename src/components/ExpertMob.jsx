// src/components/assets/expertise/expertise.js

import React from 'react';
import './css/Expertise.css';
import { background } from '../assets';
import { IoChevronForwardOutline } from "react-icons/io5";
import { useState } from 'react';
import { expertsData } from './constants/data';

const formatFollowers = (followers) => {
  if (followers > 999) {
    return (followers / 1000).toFixed(1) + 'K';
  } else {
    return followers.toFixed(0);
  }
};

const ExpertCard = ({ expert }) => {
  return (
    <div className="bg-transparent hover:bg-[#ffffff16] p-2 rounded-lg">
      <div className="background-wrapper">
        <img src={background} alt="Background" className="background-image" />
        <div className='dark-overlay'>
          <img src={expert.image} alt={`Profile of ${expert.name}`} className="max-h-[80px] object-contain" />
        </div>
      </div>
      <div className="">
        <div className="name-rating">
          <div className="">
            <h3 className='text-sm'>{expert.name}</h3>
            <p className='text-[10px] text-[#ffffff6c]'>{expert.role}</p>
          </div>
          <div className="flex flex-row text-[10px]">🌟{expert.rating}</div>
        </div>
        <div className="flex py-1">
          <div className="text-[1px] text-center border-[#fff] border-r-[1px] pr-7"> <span className='  text-[10px] text-center'>Experience</span> <br/>
          <div className='text-[10px]'>{expert.experience}</div></div>
          <div className="text-[1px] text-center pl-8"> <span className='  text-[10px] text-center'>Followers </span><br/><div className='text-[10px]'>{formatFollowers(expert.followers)}</div></div>
        </div>
        <div className="text-[10px] text-[#ffffff6d]">{expert.description}</div>
        <div className="flex flex-row gap-3 py-2">
          <div className=""><span className='text-sm font-semibold'>₹{expert.prize}</span><span className='text-lg'>/-</span></div>
          <a href="#home" className='flex justify-center items-center text-[10px] bg-[#fff] text-black py-1 rounded-md px-1'>Subscription <IoChevronForwardOutline className='' /></a>
        </div> 
        
      </div>
    </div>
  );
};

const Expertise = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section>
      <div className='md:text-left text-center'>
        <h2 className="subheading-color font-bold md:text-5xl text-4xl md:leading-[80px] leading-[40px] md:pl-[50px]">Our Expertise</h2>
        <p className="text-90 md:text-xl text-[#ffffff7d] mb-6 md:px-[3rem] px-4">
          Guiding your investments to Greatness: Our Expertise, Your Financial Advantage!
        </p>
      </div>

      <div className="expert-grid grid-5">
        {expertsData.slice(0, showMore ? expertsData.length : 4).map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>

      {/* Show More button */}
      {!showMore && (
        <div className='justify-center items-center text-center py-2 pb-5'>
          <button className='main-button text-sm' onClick={toggleShowMore}>Show More</button>
        </div>
      )}
    </section>
  );
};

export default Expertise;