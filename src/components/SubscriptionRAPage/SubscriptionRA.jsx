import React, { useEffect, useState } from "react";
import styles from "../../style";
import "../css/SubscriptionRA.css";
import { course_data, expertise_data } from "../constants/data";
import { useParams } from "react-router-dom";
import {
  arrow,
  stars,
  tick,
  layer,
  RA1,
  rate,
  devices,
  videoImg,
  time,
  chart,
} from "../../assets";
import Testimonials from "../Testimoials/Testimonial";
import CoursePaymentPopup from "./CoursePaymentPopup";
import SubscriptionPaymentPopup from "./SubscriptionPaymentPopup";

const SubscriptionRA = () => {
  const slicedCourses = course_data.slice(0, 5);
  const { id } = useParams();
  const [expertData, setExpertData] = useState(null);
  const [activeHoverIndex, setActiveHoverIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#18181B80");
  const [showMonthlyPopup, setShowMonthlyPopup] = useState(false);
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState(null);
  const [planMonthlyPrice, setPlanMonthlyPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planPrice, setPlanPrice] = useState(2999);

  const handleSelectPlan = (plan, price) => {
    setSelectedPlan(plan);
    setPlanPrice(price);

    console.log(`User has chosen: ${plan} plan with price ₹${price}`);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowMonthlyPopup(false);
  };

  const handleBuyNowClick = (plan, price) => {
    setSelectedMonthlyPlan(plan);
    setPlanMonthlyPrice(price);
    setShowMonthlyPopup(true);
  };

  const handleMouseOver = () => {
    setBackgroundColor("transparent");
  };

  const handleMouseOut = () => {
    setBackgroundColor("#18181B80");
  };

  useEffect(() => {
    const filteredData = expertise_data.find((expert) => expert.id === id);
    setExpertData(filteredData);
  }, [id]);

  if (!expertData) {
    return <div className="text-white">Loading...</div>;
  }

  const handleMouseEnter = (index) => {
    setActiveHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveHoverIndex(0);
  };

  return (
    <section
      className={`flex md:flex-col flex-col md:px-0 px-3 ${styles.paddingY} expertise-Bg`}
    >
      <div
        key={expertData.id}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-28 z-10 md:bottom-[10rem] font-inter`}
      >
        <div className="subscription-RA-bg flex flex-row justify-between bg-[#18181B80] relative w-full md:p-[30px] p-[16px] border-2 border-[#f4f4f50e] rounded-xl mb-8  ">
          <div className="text-white">
            <div className="flex flex-col md:mb-6 mb-1">
              <div className="flex justify-between items-center w-full">
                <span
                  className="flex-1 font-bold md:text-[72px] text-[26px]
        text-gradient md:leading-[88px] leading-[30px] md:pb-3"
                >
                  {expertData.name}
                </span>
              </div>
              <span className="font-normal opacity-60 md:leading-[28px] md:text-[22px] text-[12px]">
                {expertData.title}
              </span>
            </div>
            <div className="flex justify-between md:w-[350px] w-[176px] md:h-16 h-10 md:mb-6 mb-3">
              <div className="flex flex-col items-center justify-around">
                <div className="text-[15px] text-[#C6CDD5]">
                  {expertData.experience}
                </div>
                <div className="md:text-xl text-xs font-semibold">
                  {expertData.totalExp}
                </div>
              </div>
              <div className="w-[1px] md:h-16 h-10 bg-white"></div>
              <div className="flex flex-col items-center justify-around">
                <div className="text-[15px] text-[#C6CDD5]">
                  {expertData.followers}
                </div>
                <div className="md:text-xl text-xs font-semibold">
                  {expertData.totalFollowers}
                </div>
              </div>
            </div>
            <div className="md:text-lg text-sm md:font-semibold md:w-[508px] md:mb-4 mb-2">
              {expertData.content}
            </div>

            <div
              className="border-[1px] border-[#f4f4f535] border-opacity-30 md:rounded-3xl rounded-2xl md:w-44 w-33 md:mb-6"
              onClick={() => window.open(expertData.telegramLink, "_blank")}
            >
              <button className="flex mx-auto md:py-2 py-2  items-center">
                <img
                  className="md:w-6 w-4 me-3"
                  src={expertData.telegram}
                  alt="telegram icon"
                />
                <span className="md:text-base text-xs">Get Free Calls</span>
                <img className="w-4 ms-3" src={arrow} alt="arrow icon" />
              </button>
            </div>
            <div className="md:block hidden">
              <button className="flex items-center md:text-base text-xs">
                Explore More{" "}
                <img className="w-4 ms-3" src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="flex mx-auto">
            <img
              className="subscription-RA-img md:w-[400px] w-[470px] my-auto"
              src={RA1}
              style={{
                maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
              }}
              alt=""
            />
          </div>
          <div className="flex text-white items-end absolute top-6 right-6">
            <img
              className="md:w-8 w-4 md:h-8 h-4 me-1"
              src={stars}
              alt="star icon"
            />
            <span className="md:text-3xl text-sm">{expertData.rating}</span>
          </div>
          {/* <div className="absolute md:bottom-6 bottom-8 md:right-8 right-3 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:bg-[#ffffff5e] hover:rounded-full p-2">
              <img src={bookmark} alt="Save icon" className="w-6 h-6" />
            </div> */}
          <div className="md:hidden block absolute bottom-3 right-4 text-white">
            <button className="flex items-center md:text-base text-xs">
              Explore More <img className="w-4 ms-3" src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <section className="w-full">
          <div className="w-full flex flex-row bg-[#18181B80] rounded-2xl md:p-3 p-2">
            <div className="md:flex-col-6 md:text-[16px] text-[12px] flex flex-row my-3 md:mx-px mx-auto">
              <a href="#subscribePlan">
                <button className="text-white md:flex-col-3 md:mx-6 mx-2 md:text-[1rem]">
                  Subscriptions Plans
                </button>
              </a>
              <a href="#keyHighlights">
                <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[#A1A1AACC] hover:text-white">
                  Key Highlights
                </button>
              </a>
              <a href="#subsDetails">
                <button className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] text-[#A1A1AACC] hover:text-white">
                  About Subscriptions
                </button>
              </a>
              <a href="#reviews">
                <button
                  className="md:flex-col-3 md:mx-6 mx-2 md:text-[1rem] md:inline hidden text-[9.5px] text-[#A1A1AACC] hover:text-white"
                  id
                >
                  Reviews
                </button>
              </a>
            </div>
          </div>
        </section>

        <section
          className="md:flex md:flex-row md:justify-between text-center w-full md:mt-16 mt-10 md:mb-8 mb-3 gap-3"
          id="subscribePlan"
        >
          <div className="flex-col-6 font-inter font-bold md:text-[50px] text-[30px] subheading-color md:leading-[50px] leading-[51px] text-white md:mb-6">
            Subscriptions Plans
          </div>
          <div className="flex-col-6 md:w-1/2 font-normal md:text-left text-[#A1A1AACC] md:text-[18px] text-[15px] md:leading-[28px] leading-[17px] mb-3">
            Discover our subscription plans tailored for traders like you. Gain
            access to exclusive features, expert insights and community support
            to elevate your trading journey.{" "}
            <span className="text-white">
              Choose the plan that suits your needs and start trading with
              confidence today.
            </span>
          </div>
        </section>

        <div className="text-white flex flex-wrap justify-center md:gap-8 gap-2 w-full subscription-cards">
          <div
            className={`flex-1 rounded-2xl p-5 basic-div max-w-[400px] ${
              activeHoverIndex === 0 ? "hover:bg-[#18181B80]" : ""
            }`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <div className="text-center opacity-60 hidden">21 Days Left</div>
            <div className="text-center md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
              Monthly
            </div>
            <div className="text-center md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex justify-center">
              ₹1,999/<span className="md:flex hidden">-</span>
              <span className="md:hidden flex font-normal">mo</span>
            </div>
            <div className="text-center md:text-lg text-xs mt-auto opacity-60 mb-6">
              1 Month Access
            </div>
            {/* <div className="text-center md:mb-8 mb-4">
      <div className="flex md:mb-4 mb-2 font-medium items-center md:justify-center text-left">
        <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
        <span className="md:text-base text-xs">
          Voice messages anywhere
        </span>
      </div>
      <div className="flex md:mb-4 mb-2 font-medium items-center md:justify-center text-left">
        <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
        <span className="md:text-base text-xs">
          Voice messages anywhere
        </span>
      </div>
      <div className="flex md:mb-4 mb-2 font-medium items-center md:justify-center text-left">
        <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
        <span className="md:text-base text-xs">
          Voice messages anywhere
        </span>
      </div>
    </div> */}
            <div className="text-center">
              <button
                className="bg-white text-black md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-2"
                onClick={() => handleBuyNowClick("Monthly", 2999)}
              >
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="flex-1 rounded-2xl p-5 basic-div hover:bg-[#18181B80] relative"
            style={{ border: "2px solid #fff", backgroundColor }} // Added border style
          >
            <div className="text-center opacity-60 hidden">21 Days Left</div>
            <div className="text-center md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1">
              Quarterly
            </div>
            <div className="text-center md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex justify-center">
              ₹2,999/<span className="md:flex hidden">-</span>
              <span className="md:hidden flex font-normal">mo</span>
            </div>
            <div className="text-center md:text-lg text-xs mt-auto opacity-60 mb-6">
              3 Month Access
            </div>
            <div className="text-center md:mb-8 mb-4">
              {/* <div className="flex md:justify-center md:mb-4 mb-2 font-medium items-center text-left">
      <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
      <span className="md:text-base text-xs">
        Voice messages anywhere
      </span>
    </div>
    <div className="flex md:justify-center md:mb-4 mb-2 font-medium items-center text-left">
      <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
      <span className="md:text-base text-xs">
        Voice messages anywhere
      </span>
    </div>
    <div className="flex justify-center md:mb-4 mb-2 font-medium items-center text-left">
      <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
      <span className="md:text-base text-xs">
        Voice messages anywhere
      </span>
    </div> */}
            </div>
            <div className="text-center">
              <button
                className="text-white md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white border-2"
                onClick={() => handleBuyNowClick("Quarterly", 2999)}
              >
                Buy Now
              </button>
            </div>
            <div className="absolute top-1 md:left-[6.5rem] left-[6.8rem] md:text-md text-xs transform -translate-x-2/3 -translate-y-2/3 bg-[#ffffff] text-[#000] px-3 py-1 font-semibold rounded-lg">
              Recommended
            </div>
          </div>

          {/* <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={`flex-1 bg-opacity-5 p-5 hover:bg-[#18181B80] rounded-2xl standard-div ${
              activeHoverIndex === 3 ? "hover:bg-[#18181B80]" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1 md:mt-1 mt-0">
              Half-Yearly
            </div>
            <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex">
              ₹5,999/<span className="md:flex hidden">-</span>
              <span className="md:hidden flex font-normal">mo</span>
            </div>
            <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
              6 Month Access
            </div>
            <div className="md:mb-8 mb-4">
              <div className="flex md:mb-4 mb-2 font-medium items-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
            </div>
            <div className="text-center">
              <button className="text-white md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white border-2" onClick={() => handleBuyNowClick("Half-Yearly", 5999)}>
               Buy Now
              </button>
            </div>
          </div> */}

          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={`flex-1 bg-opacity-5 p-5 hover:bg-[#18181B80] rounded-2xl standard-div ${
              activeHoverIndex === 4 ? "hover:bg-[#18181B80]" : ""
            } text-center`}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="md:text-3xl text-lg font-bold subheading-gradient md:mb-4 mb-1 md:mt-1 mt-0">
              Yearly
            </div>
            <div className="md:text-5xl text-2xl font-bold md:mb-3 mb-1 flex justify-center">
              ₹9,999/<span className="md:flex hidden">-</span>
              <span className="md:hidden flex font-normal">mo</span>
            </div>
            <div className="md:text-lg text-xs mt-auto opacity-60 mb-6">
              12 Month Access
            </div>
            <div className="md:mb-8 mb-4">
              {/* <div className="flex md:mb-4 mb-2 font-medium items-center justify-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 1" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center justify-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 2" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div>
              <div className="flex md:mb-4 mb-2 font-medium items-center justify-center">
                <img className="w-4 h-4 me-2" src={tick} alt="tick 3" />
                <span className="md:text-base text-xs">
                  Voice messages anywhere
                </span>
              </div> */}
            </div>
            <div className="text-center">
              <button
                className="text-white md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-white border-2"
                onClick={() => handleBuyNowClick("Yearly", 5999)}
              >
                Buy Now
              </button>
            </div>
          </div>
          {showMonthlyPopup && (
            <SubscriptionPaymentPopup
              onClose={handleClosePopup}
              selectedMonthlyPlan={selectedMonthlyPlan}
              planMonthlyPrice={planMonthlyPrice}
              expertName={expertData.name}
            />
          )}
        </div>

        <section className="w-full md:my-8 my-2 flex gap-20 md:mb-24 mb-16">
          <div
            className="flex flex-col md:w-2/3 w-full text-white"
            id="keyHighlights"
          >
            <div className="subheading-color md:text-5xl text-3xl font-bold pb-4 md:text-left text-center">
              Key highlights to join this subscription
            </div>
            <div className="text-[#A1A1AACC] md:mb-9 mb-4 md:text-base text-xs md:text-left text-center">
              Experience the power of our subscription. Gain exclusive access to
              expert insights, advanced trading tools and personalised support.
            </div>
            <div className="flex md:flex-row flex-col md:gap-8 gap-3">
              <div className="flex-1 flex flex-col md:gap-6 gap-3">
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-28 h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Expert Insights
                    </p>
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
                      Gain exclusive access to expert analysis and insights from
                      SEBI Registered Research Analysts.{" "}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-28 h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Risk Management
                    </p>
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
                      Learn essential risk management techniques and gain access
                      to tools to help protect your investments.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col md:gap-6 gap-3">
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-[150px] h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Performance Tracking
                    </p>
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
                      Monitor your trading performance with detailed analytics
                      and reports to identify strengths and areas for
                      improvement.{" "}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl flex md:py-6 py-4 px-5 items-center gap-5 hover:bg-[#18181B80] border-2 border-transparent hover:border-[#F4F4F51A]">
                  <div className="w-28 h-14 border-2 rounded-xl border-[#F4F4F51A] flex items-center justify-center">
                    <img className="w-6 h-6" src={layer} alt="layer icon" />
                  </div>
                  <div>
                    <p className="text-[#E4E4E7] md:text-lg text-base">
                      Market Alerts
                    </p>
                    <p className="text-[#A1A1AACC] md:text-sm text-xs">
                      Stay informed with real-time market alerts and
                      notifications to capitalise on opportunities. {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 text-white md:block hidden">
            <div className="rounded-2xl flex flex-col gap-4 bg-[#18181B80] p-8 text-center">
              <div className="text-3xl font-bold subheading-gradient mb-4">
                Subscription Plan
              </div>
              <div
                onClick={() => handleSelectPlan("Monthly", 1999)}
                className={`flex rounded-2xl p-4 ${
                  selectedPlan === "Monthly"
                    ? "bg-[#18181B80] border-2 border-[#F4F4F51A]"
                    : "hover:bg-[#18181B80]"
                }`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Monthly</p>
                  <p className="text-[#C6CDD5] text-sm">1 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹1,999</p>
              </div>
              <div
                onClick={() => handleSelectPlan("Quarterly", 2999)}
                className={`flex rounded-2xl p-4 hover:bg-[#18181B80] ${
                  selectedPlan === "Quarterly"
                    ? "border-2 border-[#F4F4F51A]"
                    : ""
                }`}
              >
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Quarterly</p>
                  <p className="text-[#C6CDD5] text-sm">3 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹2,999</p>
              </div>
              {/* <div
            onClick={() => handleSelectPlan('Half-Yearly', 5999)}
            className={`flex rounded-2xl p-4 hover:bg-[#18181B80] ${
              selectedPlan === 'Half-Yearly' ? 'border-2 border-[#F4F4F51A]' : ''
            }`}
          >
            <div className="flex-1 text-left">
              <p className="text-lg subheading-gradient">Half-Yearly</p>
              <p className="text-[#C6CDD5] text-sm">6 Month Access</p>
            </div>
            <p className="flex-1 text-3xl font-bold">₹5,999</p>
          </div> */}
              <div
                onClick={() => handleSelectPlan("Yearly", 9999)}
                className={`flex rounded-2xl p-4 hover:bg-[#18181B80] ${
                  selectedPlan === "Yearly" ? "border-2 border-[#F4F4F51A]" : ""
                }`}
              >
                <div className="flex-1 text-left">
                  <p className="text-lg subheading-gradient">Yearly</p>
                  <p className="text-[#C6CDD5] text-sm">12 Month Access</p>
                </div>
                <p className="flex-1 text-3xl font-bold">₹9,999 </p>
              </div>
              <div className="text-center">
                <button
                  className="bg-white text-black md:px-12 px-6 md:text-base text-xs py-2 md:rounded-lg rounded border-2"
                  onClick={() => setShowPopup(true)}
                >
                  Buy Now
                </button>
                {showPopup && (
                  <CoursePaymentPopup
                    onClose={handleClose}
                    selectedPlan={selectedPlan}
                    planPrice={planPrice}
                    expertName={expertData.name}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section
          className="border-2 rounded-2xl border-[#f4f4f50e] md:p-8 px-4 py-6 md:mb-24 mb-12"
          id="subsDetails"
        >
          <p className="subheading-color md:text-5xl text-3xl font-bold pb-8">
            Subscriptions Details
          </p>
          <div className="text-[#A1A1AACC]">
            <p>
              Welcome to our subscription plans, tailored to cater to traders of
              all levels. Our plans are designed to provide you with the tools,
              resources and support you need to thrive in this dynamic world of
              trading. Whether you're a new trader, looking to learn the basics
              or an experienced trader seeking advanced analytics, there's a
              plan that's right for you. Each of our subscription plans offers a
              unique set of benefits. With our basic plan, you'll gain access to
              essential features such as market news updates and basic analytics
              tools. Our intermediate plan takes it a step further, offering
              access to expert insights and more advanced trading tools and
              exclusive access to in-depth market analysis and priority customer
              support. No matter which plan you choose, you'll also become part
              of our vibrant community of traders. Here, you can connect with
              fellow traders, share ideas and learn from each other's
              experiences. Our community is a valuable resource for support,
              inspiration and collaboration.
            </p>
          </div>
        </section>

        {slicedCourses.map((courses, index) => (
          <div
            key={index}
            className="text-white border border-solid border-white border-opacity-10 rounded-lg p-3 md:p-8 md:mb-16 mb-12 relative"
          >
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
                  src={courses.imageUrl}
                  alt="Course img"
                  className="w-full h-full object-cover rounded-lg"
                  style={{
                    maskImage:
                      "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
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
                  {courses.courseTitle}
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
                      {courses.level}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={time} alt="Time" className="w-4 h-4 mr-2" />
                    <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                      Duration:
                    </h4>
                    <p className="text-xs md:text-sm text-white ml-1">
                      {courses.duration}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={videoImg} alt="Video" className="w-5 h-4 mr-2" />
                    <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                      Sessions:
                    </h4>
                    <p className="text-xs md:text-sm text-white ml-1">
                      {courses.session}
                    </p>
                  </div>
                  {/* <div className="flex items-center">
              <img src={videoImg} alt="Video" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">Completed Sessions:</h4>
              <p className="text-xs md:text-sm text-white ml-1">{courses.completedSessions}</p>
            </div> */}
                  {/* <div className="flex items-center">
              <img src={calender} alt="Calendar" className="w-4 h-4 mr-2" />
              <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">Buy date:</h4>
              <p className="text-xs md:text-sm text-white ml-1">{courses.date}</p>
            </div> */}
                  <div className="flex items-center">
                    <img src={rate} alt="Rate" className="w-4 h-4 mr-2" />
                    <h4 className="md:text-base text-[12px] font-semibold text-[#e4e4e7a3]">
                      Access:
                    </h4>
                    <p className="text-xs md:text-sm text-white ml-1">
                      {courses.access}
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
                    {courses.price}
                  </h2>
                  <div className="items-center justify-center">
                    <button
                      onClick={() => {
                        setShowPopup(true);
                        handleSelectPlan("Course", 7999);
                      }}
                      className="px-10 py-3 rounded-lg bg-[#fff] text-[#000] text-[15px] font-semibold"
                    >
                      Buy Now
                    </button>
                    {showPopup && (
                      <CoursePaymentPopup
                        onClose={handleClose}
                        selectedPlan={selectedPlan}
                        planPrice={planPrice}
                        expertName={expertData.name}
                      />
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
                {courses.sessionsDetails.map((session) => (
                  <div
                    key={session.id}
                    className="bg-transparent p-5 rounded-lg flex items-center justify-between hover:bg-[#18181B] transition duration-300 ease-in-out"
                  >
                    <div className="flex">
                      <div className="border border-solid border-white border-opacity-10 rounded-2xl h-10 w-10 p-6 flex items-center justify-center mr-3">
                        <p className="text-3xl font-bold">{session.id}</p>
                      </div>
                      <div className="p-0">
                        <h5 className="text-xl font-semibold">
                          {session.title}
                        </h5>
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
              <p className="text-base text-[#c9c9c9]">{courses.aboutCourse}</p>
            </div>
          </div>
        ))}
      </div>

      <div id="reviews">
        <Testimonials />
      </div>
    </section>
  );
};

export default SubscriptionRA;
