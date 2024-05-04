import React from 'react';
import Hero from './components/HomePage/HeroSection/Hero';
import Partner from "./components/HomePage/PartnerSection/Partners";
import styles from './style';
import PartnersCarousel from './components/HomePage/PartnerSection/PartnersCarousel';
import AboutUs from './components/HomePage/AboutUsSection/AboutUs';
import Features from './components/HomePage/FeaturesSection/Features';
import IconBox from './components/HomePage/IconBoxSection/IconBox';
import Counter from './components/HomePage/CounterSection/Counter';
import CounterMob from './components/HomePage/CounterSection/CounterMob';
import WhyUs from './components/HomePage/WhyUsSection/WhyUs';
// import Expertise from './components/Expertise';
// import ExpertMob from './components/ExpertMob';
import Product from './components/HomePage/ProductSection/Product';
import Stock from './components/HomePage/StockSection/Stock';
// import ReferEarn from './components/ReferEarn';
import Testimonial from './components/Testimoials/Testimonial';
import BlogSection from './components/HomePage/BlogSection/BlogSection';
import ExpertiseData from './components/HomePage/ExpertSection/ExpertiseData';
import CoursesSection from './components/HomePage/CourseCards/CoursesSection'

const Home = () => {
  return (
    <div className={`flex md:flex-col flex-col ${styles.boxWidth} md:px-[7rem] px-2`}>
      <div className="flex flex-col md:gap-[2rem] gap-[1rem] text-white">
        <div className='text-white bg-[#06030E]s'> {/* Added padding-x */}
          <div className={`md:mt-[5rem] mt-[2rem] ${styles.boxWidth}`} id='home'>
            <Hero/>
          </div>
          <div className={`md:mt-[2rem] mt-[1rem] ${styles.boxWidth}`}>
            <Partner />
            <div className='md:hidden pt:0'>
              <PartnersCarousel />
            </div>
          </div>
          <div className={`md:mt-[0] mt-[1rem] ${styles.boxWidth}`}>
            <AboutUs />
          </div>
          <div className={`md:mt-[5rem] mt-[2rem] p-1 ${styles.boxWidth}`} id='features'>
            <Features />
          </div>
          <div className={`md:mt-[1rem] mt-[1rem] ${styles.boxWidth}`}>
            <IconBox />
          </div>
          <div className={`md:mt-[5rem] mt-[5rem] md:block hidden ${styles.boxWidth}`}>
            <Counter />
          </div>
          <div className={`md:mt-[5rem] mt-[8rem] md:hidden ${styles.boxWidth}`}>
            <CounterMob />
          </div>
          <div className={`md:mt-[5rem] mt-[1rem] ${styles.boxWidth}`}>
            <WhyUs />
          </div>
          <div className={`md:mt-[1rem] mt-[1rem] ${styles.boxWidth}`} id='expertise'>
            <ExpertiseData />
          </div>
          <div className={`md:mt-[1rem] flex justify-center mt-[1rem] ${styles.boxWidth}`} id='course'>
            <CoursesSection />
          </div>
          <div className={`md:mt-[5rem] mt-[1rem]${styles.boxWidth}`} >
            <Product />
          </div>
          <div className={`md:mt-[5rem] mt-[1.9rem] ${styles.boxWidth}`}>
            <Stock />
          </div>
          <div className={`md:mt-[5rem] mt-[1.9rem] ${styles.boxWidth}`}>
            <BlogSection />
          </div>
          <div className={`md:mt-[5rem] mt-[1rem]${styles.boxWidth}`}>
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
