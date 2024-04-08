// src/components/assets/expertise/expertise.js

import React from 'react';
import './Expertise.css';
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
    <div className="profile-card">
      <div className="background-wrapper">
        <img src={background} alt="Background" className="background-image" />
        <div className='dark-overlay'>
          <img src={expert.image} alt={`Profile of ${expert.name}`} className="profile-image" />
        </div>
      </div>
      <div className="info">
        <div className="name-rating">
          <div className="name-role">
            <h3>{expert.name}</h3>
            <p>{expert.role}</p>
          </div>
          <div className="rating">🌟{expert.rating}</div>
        </div>
        <div className="experience-followers">
          <div className="experience"> <span>Experience</span> <br/>{expert.experience}</div>
          <div className="followers"> <span>Followers </span><br/>{formatFollowers(expert.followers)}</div>
        </div>
        <div className="description">{expert.description}</div>
        <div className="prize-subscription">
          <div className="prize"><span>₹{expert.prize}</span>/-</div>
          <a href="#home" className='flex justify-center items-center text-md'>Subscription <IoChevronForwardOutline className='ml-2' /></a>
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

      <div className="expert-grid">
        {expertsData.slice(0, showMore ? expertsData.length : 3).map((expert) => (
          <ExpertCard key={expert.id} expert={expert} />
        ))}
      </div>

      {/* Show More button */}
      {!showMore && (
        <div className='justify-center items-center text-center'>
          <button className='main-button' onClick={toggleShowMore}>Show More</button>
        </div>
      )}
    </section>
  );
};

export default Expertise;