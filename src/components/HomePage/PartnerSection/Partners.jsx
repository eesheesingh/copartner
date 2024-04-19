import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Trusted1, Trusted2, Trusted3, Trusted4 } from '../../../assets';

const Partners = () => {
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('partners').offsetTop;
      if (scrollPosition > elementPosition) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        });
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <motion.div
      id="partners"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="section2 flex flex-col items-center justify-center p-2 md:p-0"
    >
      <motion.div
        className="trusted-logos md:flex flex-wrap justify-center items-center md:gap-20 hidden" // Increased gap to 12
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <motion.img
          src={Trusted1} alt="Trusted 1" className="trusted-logo w-20 md:w-[150px]"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        />
        <motion.img
          src={Trusted2} alt="Trusted 2" className="trusted-logo w-20 md:w-[300px]"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        />
        <motion.img
          src={Trusted3} alt="Trusted 3" className="trusted-logo w-20 md:w-[100px]"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        />
        <motion.img
          src={Trusted4} alt="Trusted 3" className="trusted-logo w-20 md:w-[150px]"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        />
      </motion.div>
      <p className="text-90 md:text-xl text-[#ffffff7d] mb-6 md:px-20 px-4 md:block hidden">Featured In</p>
    </motion.div>
  );
};

export default Partners;
