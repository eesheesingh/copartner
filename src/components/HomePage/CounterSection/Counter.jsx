import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from framer-motion
import { CounterMobBg } from '../../../assets';

const Counter = ({ count, title }) => {
  return (
    <div className="counter text-center">
      <div className="counter-number text-6xl font-normal">
        {count}
      </div>
      <p className="text-lg w-full text-center">{title}</p>
    </div>
  );
};

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [registeredRAs, setRegisteredRAs] = useState(0);
  const [apEarnings, setApEarnings] = useState(0);
  const controls = useAnimation(); // Initialize controls for animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 } // Animation duration
          });
          observer.unobserve(entry.target); // Stop observing once animation triggers
        }
      },
      { threshold: 0.5 } // Intersection threshold
    );

    observer.observe(document.querySelector('.counter-container'));

    return () => observer.disconnect();
  }, [controls]);

  useEffect(() => {
    if (isVisible && userCount < 100) {
      const interval = setInterval(() => {
        setUserCount(prevCount => prevCount + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, userCount]);

  useEffect(() => {
    if (isVisible && registeredRAs < 1200) {
      const interval = setInterval(() => {
        setRegisteredRAs(prevCount => prevCount + 10);
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isVisible, registeredRAs]);

  useEffect(() => {
    if (isVisible && apEarnings < 25) {
      const interval = setInterval(() => {
        setApEarnings(prevCount => prevCount + 1);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isVisible, apEarnings]);

  // Check if the window width is less than or equal to 768px (mobile)

  return (
    <div className="counter-container max-w-7xl mx-auto flex justify-center py-40" style={{ backgroundImage: `url(${CounterMobBg})`, backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat' }}>
      {/* Wrap the counter section with motion.div to apply animation */}
      <motion.div
        className="counter-section flex flex-col items-center md:max-w-[1000px] md:w-[100%]"
        initial={{ opacity: 0, y: 50 }} // Initial animation state
        animate={controls} // Animation controlled by controls
      >
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[20rem] gap-[5rem] " >
          <div className="counter">
            <Counter count={userCount + 'K+'} title="" />
            <p className='text-lg w-full text-center'>Total Number Of users</p>
          </div>
          <div className="counter text-center">
            <Counter count={registeredRAs + '+'} title="" />
            <p className='text-lg w-full text-center'>Total registered RAs</p>
          </div>
          <div className="counter text-center">
            <Counter count={apEarnings + 'K+'} title="AP Earning" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CounterSection;
