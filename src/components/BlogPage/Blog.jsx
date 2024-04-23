import React from "react";
import styles from "../../style";
import BlogGrid from "./BlogExplore";

const Blog = () => {
  return (
    <section className={`flex flex-col ${styles.paddingX} expertise-Bg`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:bottom-[10rem] text-center `}
      >
        <div className="justify-between items-center w-full md:pt-0 pt-[5rem]">
          <h1 className="flex-1 font-bold md:text-[60px] text-[36px] text-gradient md:leading-[78px] leading-[48px]">
          Explore Our Insightful  <br />  Market Blogs
          </h1>
          <p className="mt-4 text-center text-white md:text-xl text-sm md:block hidden">
          Discover expert insights and tips through
            <br />
            our stock market blogs
          </p>

          <p className="mt-4 text-center text-white md:text-xl text-sm md:hidden">
            Take your team up a level with easy-to-use tools, effortless{" "}
            templates, and efficient workflows.
          </p>
        </div>
      </div>

      <section className=" w-full text-center md:mb-2 mt-12">
        <h2 className="md:text-[50px] text-[40px] md:leading-[50px] font-bold pb-0 md:text-left leading-[51px] md:py-2 px-4 subheading-color">
          Our Blog
        </h2>
        <p className="font-normal text-[#c9c9c9] md:text-[18px] md:text-left text-[15px] md:leading-[28px] leading-[17px] px-4 pb-2">
          Dive into the expertise of our SEBI registered research analysts,
          guiding you towards trading success with precision and insight.
        </p>
        <BlogGrid />
      </section>
    </section>
  );
};

export default Blog;
