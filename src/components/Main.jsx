import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "../style";
import Navbar from "./Navbar";
// import Testimonial from "./TestimoialSection/Testimonial";

const Main = () => {
  return (
    <div>
      {/* <div className={`${styles.marginX}`}> */}
      <Navbar />
      {/* </div> */}
      <Outlet />
      
      {/* <div className={`md:mt-[5rem] md:px-[2rem] mt-[1rem]${styles.boxWidth}`}>
        <Testimonial />
      </div> */}
      <div className={`md:my-[2rem] mt-[1rem] ${styles.paddingX}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
