import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from framer-motion
import { Trusted1, Trusted2, Trusted3, Trusted4, Trusted5, Trusted6 } from '../assets';

const Partners = () => {
  const controls = useAnimation(); // Initialize controls for animation

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('partners').offsetTop;
      if (scrollPosition > elementPosition) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 } // Animation duration
        });
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <motion.div // Wrap the entire Partners component with motion.div
      id="partners"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={controls} // Animation controlled by controls
      className="section2 flex flex-col items-center justify-center p-2 md:p-0"
    >
     
      <motion.div // Wrap the div containing trusted logos with motion.div
        className="trusted-logos md:flex flex-wrap justify-center items-center md:gap-8 hidden"
        initial={{ opacity: 0, y: 50 }} // Initial animation state
        animate={controls} // Animation controlled by controls
      >
        <motion.img // Wrap each image with motion.img
          src={Trusted1} alt="Trusted 1" className="trusted-logo w-20 md:w-28"
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={controls} // Animation controlled by controls
        />
        <motion.img
          src={Trusted2} alt="Trusted 2" className="trusted-logo w-20 md:w-28"
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={controls} // Animation controlled by controls
        />
        <motion.img
          src={Trusted3} alt="Trusted 3" className="trusted-logo w-20 md:w-28"
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={controls} // Animation controlled by controls
        />
        <motion.img
          src={Trusted4} alt="Trusted 4" className="trusted-logo w-20 md:w-28"
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={controls} // Animation controlled by controls
        />
        <motion.img
          src={Trusted5} alt="Trusted 5" className="trusted-logo w-20 md:w-28"
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={controls} // Animation controlled by controls
        />
        <motion.img
          src={Trusted6} alt="Trusted 6" className="trusted-logo w-20 md:w-28"
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          animate={controls} // Animation controlled by controls
        />
      </motion.div>
      <p className="text-90 md:text-xl text-[#ffffff7d] mb-6 md:px-20 px-4 md:block hidden">Featured In</p>
    </motion.div>
  );
};

export default Partners;
