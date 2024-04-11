import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "../style";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <div className={`md:mt-[5rem] md:px-[2rem] mt-[1rem]${styles.boxWidth}`}>
        <Testimonial />
      </div> */}
      <div className={`md:my-[5rem] mt-[1rem] ${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
