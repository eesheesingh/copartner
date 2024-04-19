import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from framer-motion
import { flowImage, MicroChip } from '../../../assets';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AboutUs = () => {
  const controlsLeftColumn = useAnimation(); // Initialize controls for animation of left column
  const controlsRightColumn = useAnimation(); // Initialize controls for animation of right column
  const aboutUsRef = useRef(null); // Reference to the AboutUs section
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = aboutUsRef.current.offsetTop;
      if (scrollPosition > elementPosition) {
        controlsLeftColumn.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 } // Animation duration
        });
        controlsRightColumn.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.2 } // Animation duration with a delay
        });
        window.removeEventListener('scroll', handleScroll); // Remove scroll event listener after animation triggers
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controlsLeftColumn, controlsRightColumn]);
  return (
    <div id="about-us" className="py-4 px-4" ref={aboutUsRef}> {/* Add ref to AboutUs section */}
      <div className="section3-heading text-center">
        <h2 className='subheading-color font-bold md:text-5xl text-3xl md:leading-[80px] leading-[40px]'>About Our Portal & Features.</h2>
        <p className="text-90 md:text-xl text-[#ffffff7d] mb-6 md:px-[3rem] px-4">Our platform blends expert analysis, real-time insights, and seamless trader{" "} <br/>  collaboration,
         ensuring every move is a step toward financial success in the stock market.</p>
      </div>
      <div className="section3-content flex flex-col md:flex-row items-center justify-center md:justify-center">
        <motion.div // Wrap the left column with motion.div
          className="left-column md:w-1/2 md:max-w-[600px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -50 }} // Initial animation state
          animate={controlsLeftColumn} // Animation controlled by controlsLeftColumn
        >
          <img src={flowImage} alt="Flow" className="flow-image" />
        </motion.div>
        <motion.div // Wrap the right column with motion.div
          className="right-column md:w-1/2 md:max-w-[600px] text-left mt-4 md:mt-0 md:ml-8"
          initial={{ opacity: 0, x: 50 }} // Initial animation state
          animate={controlsRightColumn} // Animation controlled by controlsRightColumn
        >
          <h3 className="text-xl font-semibold text-[#56C2FF] flex items-center">
            <img src={MicroChip} alt="MicroChip" className="head-icon mr-2" /> In Depth Analysis
          </h3>
          <h4 className='md:text-[30px] font-semibold text-white mt-2'>Unlocking Your Trading Potential: A Guide to Our Platform:-</h4>
          <p className="text-[#ffffff80]">
            In this fast-paced world of stock trading, having the right tools and insights can make all the difference between success and missed opportunities. That is where our platform comes in, especially designed to empower traders of all levels with the resources they need to thrive in the market. One of the standout features of our platform is the access to real-time market insights with SEBI registered expert analysis.
          </p>
          <div className='explore-more-btn mt-4'>
            <Link to="about-us" onClick={scrollToTop} className='flex items-center'>Explore More <FaArrowRight className='ml-2' /></Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutUs;