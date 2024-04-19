import React from 'react';
import { motion } from 'framer-motion';
import { AD2, AdMob, WhyUs1, WhyUs2, WhyUs3 } from '../../../assets';

const WhyUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      {/* Columns Section */}
      <section className="p-2 mx-auto">
        <div className='text-center'>
          <h2 className="subheading-color font-bold md:text-5xl text-3xl md:leading-[80px] leading-[40px]">Why Choose Us?</h2>
          <div className='md:px-[5rem]'>
          <p className="text-90 md:text-xl text-[#ffffffbb] mb-6 md:px-[3rem] px-4">
            Copartner unlocks the gateway to financial success - where expertise meets innovation,
            empowering you to thrive in every market opportunity.
          </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
          {/* Column 1 */}
          <div className="column rounded-lg shadow-md p-6 hover:bg-[#ffffff12] transition duration-300">
            <img src={WhyUs1} alt="img1" style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)' }} className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">For Traders</h3>
            <p className="text-base text-[#ffffffbb]">Our platform offers easy-to-use tools and customised services to traders, authorised by SEBI registered Research Analysts, making it simple to execute trades and manage the portfolio.</p>
          </div>

          {/* Column 2 */}
          <div className="column rounded-lg shadow-md p-6 hover:bg-[#ffffff12] transition duration-300">
            <img src={WhyUs2} alt="img2" style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)' }} className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">For RAs</h3>
            <p className="text-base text-[#ffffffbb]">Connect with traders actively seeking valuable information, ensuring your analysis reaches an interested audience that enhances your visibility and credibility.</p>
          </div>

          {/* Column 3 */}
          <div className="column rounded-lg shadow-md p-6 hover:bg-[#ffffff12] transition duration-300">
            <img src={WhyUs3} alt="img3" style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)' }} className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">For Customers</h3>
            <p className="text-base text-[#ffffffbb]">A one stop solution platform that provides a transparent access to comprehensive analysis and a vibrant network of traders and experts and resources needed for informed decision-making and profitable trading journeys.</p>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="w-[100%] py-10 mx-5">
        <img src={AD2} alt="Banner" className="w-full md:block hidden rounded-lg shadow-md" />
        <img src={AdMob} alt="AdMob" className="md:hidden rounded-lg" /> {/* Apply rounded corners to AdMob image */}
      </section>
    </motion.div>
  );
};

export default WhyUs;
