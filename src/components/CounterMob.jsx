import React, { useState, useEffect, useRef } from 'react';
import { CounterBg, CounterMobBg } from '../assets';

const Counter = ({ count, title }) => {
  return (
    <div className="counter text-center">
      <div className="counter-number md:text-6xl text-3xl font-normal">
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
  const counterContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = counterContainerRef.current.offsetTop;
      const sectionHeight = counterContainerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div ref={counterContainerRef} className="counter-container max-w-7xl mx-auto flex justify-center py-20" style={{ backgroundImage: `url(${CounterBg})`, backgroundSize: '90%', backgroundPosition:'center', backgroundRepeat:'no-repeat' }}>
      <div className={`counter-section flex flex-col items-center md:max-w-[1000px] md:w-[100%] ${isVisible ? 'animate__fadeInUp' : ''}`}>
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
      </div>
    </div>
  );
};

export default CounterSection;
