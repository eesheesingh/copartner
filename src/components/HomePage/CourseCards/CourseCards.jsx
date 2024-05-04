import React from 'react';
import { stars, telegram } from '../../../assets';
import '../../css/Course.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ courseData }) => {
  const { imageUrl, name, totalFollowers, totalExp, duration, session, price, userImg } = courseData;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:w-full md:p-2 p-2 rounded-md mb-8 md:mb-0 flex justify-center">
      <Link to="course" onClick={scrollToTop}>
        <div className="w-full overflow-hidden relative rounded-lg bg-transparent transition duration-300 ease-in-out transform hover:bg-[#ffffff19]">
          <img
            src={imageUrl}
            alt="Course_Image"
            className="w-full h-52 md:h-60 object-cover rounded-md"
            style={{
              maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)'
            }}
          />

          {/* Ratings */}
          <div className="absolute top-0 right-0 m-2 flex items-center justify-center rounded-full bg-opacity-50 text-white">
            <img src={stars} alt="Star" className="w-4 h-4 mr-1" />
            <span className="mr-1">4.4</span>
          </div>

          <div className="md:p-4 p-2 relative z-10">
            {/* Course Title */}
            <h3 className="text-lg font-semibold text-left">{courseData.courseTitle}</h3>

            <div className="flex items-center mt-3">
              {/* Instructor's Profile Picture */}
              <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                <img src={userImg} alt="Profile" className="h-full w-full object-cover" />
              </div>

              {/* Instructor's Name */}
              <div className="flex-1 flex items-center">
                <p className="text-sm font-medium text-dimWhite">{courseData.name}</p>
              </div>
            </div>

            {/* Experience and Followers */}
            <div className="border-white mt-2 pt-1 flex justify-center">
              <div className="border-r border-white px-10 md:px-4 text-center">
                <p className="mb-1">Experience</p>
                <p>{totalExp}</p>
              </div>
              <div className="px-10 md:px-4 text-center">
                <p className="mb-1">Followers</p>
                <p>{totalFollowers}</p>
              </div>
            </div>

            {/* Duration and Session */}
            <div className="mt-2 pt-2 flex justify-between">
              <div className="pl-1">
                <p className="mb-1 text-dimWhite">Duration: <span className="text-white">{duration}</span></p>
              </div>
              <div className="px-3 md:px-4">
                <p className="mb-1 text-dimWhite text-right">Session: <span className="text-white">{session}</span></p>
              </div>
            </div>

            {/* Price and Buy Now Button */}
            <div className="mt-3 pt-2 flex justify-between items-center">
              <div>
                <p className="text-dimWhite"><span className="text-white text-xl font-bold">{price}</span></p>
              </div>
              <div>
                <button className="bg-white rounded-md hover:bg-white text-sm text-black py-1 px-4">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
