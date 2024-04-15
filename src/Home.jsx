import React from 'react';
import Hero from './components/Hero';
import Partner from "./components/Partners";
import styles from './style';
import PartnersCarousel from './components/PartnersCarousel';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import IconBox from './components/IconBox';
import Counter from './components/Counter';
import CounterMob from './components/CounterMob';
import WhyUs from './components/WhyUs';
import Expertise from './components/Expertise';
import ExpertMob from './components/ExpertMob';
import Product from './components/Product';
import Stock from './components/Stock';
import ReferEarn from './components/ReferEarn';
import Testimonial from './components/Testimonial';
import BlogSection from './components/BlogSection'
import ExpertiseData from './components/ExpertiseData';
// import BlogPage from './components/BlogPage';

const Home = () => {
  return (
    <div
      className={`flex md:flex-col flex-col ${styles.paddingX} md:px-[7rem] px-2 expertise-Bg`}
    >
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
      <div className={`md:mt-[3rem] mt-[1rem] ${styles.boxWidth}`}>
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

      <div className={`md:mt-[5rem] mt-[5rem] md:hidden ${styles.boxWidth}`}>
        <CounterMob />
      </div>

      <div className={`md:mt-[5rem] mt-[1rem] ${styles.boxWidth}`}>
        <WhyUs />
      </div>

      {/* <div className={`md:mt-[5rem] mt-[1rem] md:block hidden ${styles.boxWidth}`} id='expertise'>
        <Expertise />
      </div>

      <div className={`md:mt-[5rem] mt-[1rem] md:hidden ${styles.boxWidth}`} id='expertise'>
        <ExpertMob />
      </div> */}

      <div className={`md:mt-[1rem] mt-[1rem] ${styles.boxWidth}`} id='expertise'>
        <ExpertiseData />
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
{/* 
      <div className={`md:mt-[5rem] mt-[1rem] ${styles.boxWidth}`}>
        <BlogPage />
      </div> */}
    </div>
    </div>
    </div>
  )
}

export default Home;
