import React from 'react';
import { motion } from 'framer-motion';
import { AD2, AdMob, WhyUs1, WhyUs2, WhyUs3 } from '../../../assets';

const WhyUs = () => {

  const stock_data = [
    {
      id: "1",
      content:
        "Our platform offers easy-to-use tools and customised services to traders, authorised by SEBI registered Research Analysts, making it simple to execute trades and manage the portfolio.",
      title: "For Traders",
      img: WhyUs1,
    },
    {
      id: "2",
      content:
        "Connect with traders actively seeking valuable information, ensuring your analysis reaches an interested audience that enhances your visibility and credibility.",
      title: "For RAs",
      img: WhyUs2,
    },
    {
      id: "3",
      content:
        "A one stop solution platform that provides a transparent access to comprehensive analysis and a vibrant network of traders and experts and resources needed for informed decision-making and profitable trading journeys.",
      name: "Kenn Gallagher",
      title: "For Customers",
      img: WhyUs3,
    },
  ];

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
        <div className="md:gap-[5rem] gap-[1rem] md:flex grid grid-cols-2 md:mt-[6rem] md:py-0 py-[2rem] mx-auto">
          {stock_data.map((stock) => (
            <div
              key={stock.id}
              className={`mx-auto md:p-4 p-3 gap-[1rem] ${
                stock.id === "3" ? 'col-span-2' : ''
              } py-[8px] items-center md:w-[337px] max-h-full rounded-[11px] hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out`}
            >
              <img
                src={stock.img}
                alt="STOCK_IMAGES"
              />
              <div className="flex flex-col gap-[0.4rem]">
                <span className="text-lightWhite md:px-4 md:w-[190px] font-[600] md:text-[20px] text-[18px] leading-[27px] text-left">
                  {stock.title}
                </span>
                <span className="text-dimWhite md:px-4 max-h-full md:text-base text-sm text-left">
                  {stock.content}
                </span>
              </div>
            </div>
          ))}
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
