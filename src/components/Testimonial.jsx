// src/components/Testimonial.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coin, LeftIcon, profile, rightIcon } from '../assets';
import './Testimonial.css'

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
      author: "Atthakrit Chimplapibul",
      image: profile,
      designation: "CEO, Company A",
    },
    {
      id: 2,
      text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
      author: "Jane Smith",
      image: profile,
      designation: "CTO, Company B",
    },
    {
      id: 3,
      text: "Becoming an affiliate partner was a great decision. The referral program is rewarding and easy to use.",
      author: "Bob Johnson",
      image: profile,
      designation: "COO, Company C",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const Dots = () => (
    <div className="pagination-dots mt-4">
      {testimonialsData.map((_, index) => (
        <span
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={index === currentTestimonial ? 'dot active-btn' : 'dot'}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="refer-earn-section py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:text-left text-center lg:flex-row justify-between items-center">
            <div className="flex-1 lg:mr-8">
              <div className="flex items-center mb-4 ">
                <h2 className="subheading-color font-bold md:text-5xl text-3xl md:leading-[80px] leading-[40px]">Refer & Earn</h2>
                <img src={Coin} alt="Coin" className="h-6 w-6 ml-2" />
              </div>
              <p className="text-gray-400 md:text-xl text-[#ffffff7d]">Empower your teams to build better processes, for a better workplace.</p>
            </div>
            <div className="flex-1 lg:ml-8 mt-8 lg:mt-0">
              <p className="text-gray-400 md:text-lg text-[#ffffff7d]">
                Invite fellow traders to join our platform using your unique referral link. As they actively engage and trade, you earn rewarding perks.{" "}
                <span className="text-white">It's a win-win – expand the trading community and boost your earnings effortlessly. Start referring, start earning.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-center">
        <h2 className='subheading-color font-bold md:text-5xl text-3xl md:leading-[80px] leading-[40px]'>Testimonials</h2>
        <p className='text-gray-400 md:text-lg text-[#ffffff7d]'>Our partnerships have delivered great value to our projects, and <br/>we’re happy to share some of their feedback below</p>
        <div className="testimonial-slider">
          <motion.img
            src={LeftIcon}
            className="testimonial-arrow"
            onClick={prevTestimonial}
            alt=""
            whileTap={{ scale: 0.9 }}
          />
          <AnimatePresence exitBeforeEnter={false} mode="wait">
            <motion.div
              key={currentTestimonial}
              className="testimonial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>{testimonialsData[currentTestimonial].text}</p>
              <div className="author-info">
                <motion.img
                  src={testimonialsData[currentTestimonial].image}
                  alt={`Author ${testimonialsData[currentTestimonial].author}`}
                  className="author-image"
                  whileTap={{ scale: 0.9 }}
                />
                <div className="author-details">
                  <h5 className="author-name">{testimonialsData[currentTestimonial].author}</h5>
                  <h6 className="author-designation">{testimonialsData[currentTestimonial].designation}</h6>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.img
            src={rightIcon}
            className="testimonial-arrow"
            onClick={nextTestimonial}
            alt=""
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <Dots />
      </div>
    </div>
  );
};

export default Testimonial;
