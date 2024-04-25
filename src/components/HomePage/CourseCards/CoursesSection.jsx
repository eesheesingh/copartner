import React from 'react'
import CourseList from './CourseList'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <div
    className="text-center"
  >
    <div className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-1">
      <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6">
        Course By Expertise
      </div>
      <div className="flex-col-6 font-normal md:text-left text-center text-dimWhite md:text-[18px] text-[11px] md:leading-[28px] leading-[17px]">
        Dive into the expertise of our{" "}
        <span className="text-white">
          Uncover trading secrets with courses led by <br /> SEBI Registered
          research analysts.
        </span>
      </div>
    </div>
    <div className="flex md:flex-row justify-start mx-auto w-full md:w-3/3 mb-8">
      <div className="">
        <CourseList />
      </div>
    </div>
    {/* <Link to="">
      <button className="main-button">
        Explore More
      </button>
    </Link> */}
  </div>
  )
}

export default CoursesSection