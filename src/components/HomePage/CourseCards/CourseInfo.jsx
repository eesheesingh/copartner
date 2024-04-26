import { useState } from "react";
import {
  chart,
  videoImg,
  time,
  calender,
  rate,
  devices,
  stars,
} from "../../../assets";
import CoursePaymentPopup from "../../SubscriptionRAPage/CoursePaymentPopup";
import { expertise_data } from "../../constants/data";

const CourseInfo = ({ courseData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planPrice, setPlanPrice] = useState(2999);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleSelectPlan = (plan, price) => {
    setSelectedPlan(plan);
    setPlanPrice(price);

    console.log(`User has chosen: ${plan} plan with price ₹${price}`);
  };

  return (
    <div className="text-white border border-solid border-white border-opacity-10 rounded-lg p-3 md:p-8 relative">
      {/* Rating */}

      {/* Heading */}
      <h3 className="md:block hidden font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] md:mb-6">
        Course
      </h3>
      <div className="heading-course md:flex">
        <h3 className="md:hidden pb-5 font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[31px] md:mb-6">
          Course
        </h3>
        <div className="md:w-1/2 w-full md:bg-[#18181B] bg-transparent rounded-lg mb-4 md:mb-0 relative">
          {/* Course image */}
          <img
            src={courseData.imageUrl}
            alt="Course img"
            className="w-full h-full object-cover rounded-lg"
            style={{
              maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
            }}
          />

          {/* Star image with rating */}
          <div className="absolute top-0 right-0 flex items-center mt-2 mr-2">
            <img src={stars} alt="Stars" className="w-6 h-6 mr-1" />
            <p className="text-white text-sm font-semibold">4.4</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center md:pl-8">
          <h3 className="font-semibold md:text-[50px] text-[20px] md:leading-[50px] leading-[24px] md:mb-6 py-2">
            {courseData.courseTitle}
          </h3>
          <div className="custom-progress-bar md:mb-5 ">
            <div className="progress"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <img src={chart} alt="Chart" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                Level:
              </h4>
              <p className="text-xs md:text-sm text-white ml-1">
                {courseData.level}
              </p>
            </div>
            <div className="flex items-center">
              <img src={time} alt="Time" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                Duration:
              </h4>
              <p className="text-xs md:text-sm text-white ml-1">
                {courseData.duration}
              </p>
            </div>
            <div className="flex items-center">
              <img src={videoImg} alt="Video" className="w-5 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                Sessions:
              </h4>
              <p className="text-xs md:text-sm text-white ml-1">
                {courseData.session}
              </p>
            </div>
            {/* <div className="flex items-center">
              <img src={videoImg} alt="Video" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">Completed Sessions:</h4>
              <p className="text-xs md:text-sm text-white ml-1">{courseData.completedSessions}</p>
            </div> */}
            {/* <div className="flex items-center">
              <img src={calender} alt="Calendar" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">Buy date:</h4>
              <p className="text-xs md:text-sm text-white ml-1">{courseData.date}</p>
            </div> */}
            <div className="flex items-center">
              <img src={rate} alt="Rate" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                Access:
              </h4>
              <p className="text-xs md:text-sm text-white ml-1">
                {courseData.access}
              </p>
            </div>
            <div className="col-span-2 flex items-center">
              <img src={devices} alt="Rate" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                Access From Any Computer, Tablet, or Mobile
              </h4>
            </div>
          </div>
          <div className="py-3 flex md:flex-row items-center gap-5">
            <h2 className="md:text-[40px] text-[35px] font-bold font-inter">
              {courseData.price}
            </h2>
            <div className="items-center justify-center">
              <button onClick={() => { setShowPopup(true); handleSelectPlan("Course", 7999); }} className="px-10 py-3 rounded-lg bg-[#fff] text-[#000] text-[15px] font-semibold">
                Buy Now
              </button>
              {showPopup && (
                expertise_data.map((expert, index) => (
                  <CoursePaymentPopup
                    key={index}
                    onClose={handleClose}
                    selectedPlan={selectedPlan}
                    planPrice={planPrice}
                    expertName={expert.name}
                  />
                ))
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Sessions Details */}
      <div className="sessionsDetails mt-8">
        <h4 className="text-4xl font-bold subheading-color md:block hidden">
          Sessions Details
        </h4>
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
          {courseData.sessionsDetails.map((session) => (
            <div
              key={session.id}
              className="bg-transparent p-5 rounded-lg flex items-center justify-between hover:bg-[#18181B] transition duration-300 ease-in-out"
            >
              <div className="flex">
                <div className="border border-solid border-white border-opacity-10 rounded-2xl h-10 w-10 p-6 flex items-center justify-center mr-3">
                  <p className="text-3xl font-bold">{session.id}</p>
                </div>
                <div className="p-0">
                  <h5 className="text-xl font-semibold">{session.title}</h5>
                  <p className="text-xs md:text-sm text-gray-300 mt-1">
                    {session.description}
                  </p>
                  <p className="text-xs md:text-sm text-gray-300 mt-1">
                    Duration: {session.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Course */}
      <div className="aboutCourse mt-8">
        <h4 className="text-4xl font-bold subheading-color md:block">
          About Course
        </h4>
        <p className="text-base text-[#c9c9c9]">{courseData.aboutCourse}</p>
      </div>
    </div>
  );
};

export default CourseInfo;
