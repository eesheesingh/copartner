import React from "react";
import { expertise_data } from "../../constants/data";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const ExpertiseData = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`flex flex-col sm:py-[1rem] py-6`}>
        <div className={`{styles.flexStart} flex-col gap-2 xl:px-0`}>
          <div className="md:text-left text-center">
            <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[80px] leading-[40px] md:pl-[10px]">
              Our Expertise
            </h2>
            <p className="text-90 md:text-xl text-[#ffffffbb] md:px-[10px] px-4 py-2">
              Guiding your investments to Greatness: Our Expertise, Your
              Financial Advantage!
            </p>
          </div>
        </div>

        <div className="p-[1rem] gap-[1rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-2">
  {expertise_data.map((expert, id) => {
    return (
      <Link to={`/subscriptionRA/${expert.id}`}>
        <div className="sm:h-[460px] h-[300px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out">
          <div className="h-[98px] sm:h-[219px] relative profile-image mb-4">
            <img
              src={expert.icon}
              alt="background"
              className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
            />
            <img
              src={expert.userImg}
              alt="User"
              className="top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
              style={{
                maskImage:
                  "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
              }}
            />
          </div>

          <div className="w-[154px] h-[35px] sm:w-[319px] sm:h-[40px] flex justify-between px-[5px] sm:px-[1rem]">
            <div className="flex flex-col w-[154px] sm:w-[319px] gap-2">
              <span className="sm:text-[16px] text-[12px] sm:leading-[18px] md:py-0 py-[1px] leading-[10px] font-[500] text-lightWhite whitespace-normal sm:whitespace-nowrap sm:max-w-[154px] max-w-[100%]">
                {expert.name}
              </span>

              <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite whitespace-nowrap">
                {expert.title}
              </span>
            </div>
            <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
              <img
                src={expert.ratingIcon}
                className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                alt="rating"
              />
              <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[8px] leading-[10px]">
                {expert.rating}
              </span>
            </div>
          </div>

          <div className="sm:w-[256px] sm:h-[50px] w-[138px] h-[22px] flex items-start mt-2 justify-between">
            <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[40px] h-[22px] items-center">
              <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[10px] leading-[10px]">
                {expert.experience}
              </span>
              <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[8px] leading-[10px]">
                {expert.totalExp}
              </span>
            </div>
            <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
            <div className="flex">
              <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[10px] leading-[10px]">
                  {expert.followers}
                </span>
                <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[8px] leading-[10px]">
                  {expert.totalFollowers}
                </span>
              </div>
            </div>
          </div>

          <div className="sm:w-[300px] sm:h-[25px] w-[144px] h-[32px] mb-4 sm:block hidden text-center">
            <span className="text-dimWhite sm:text-[14px] text-[7px] sm:w-[278px] sm:h-[24px] sm:leading-[24px] leading-[11px] mb-[5px]">
              {expert.content}
            </span>
          </div>

          <div className="md:w-[211px] md:h-[40px] w-[146px] h-[40px] mb-1 flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0" onClick={() => window.open(expert.telegramLink, "_blank")}>
            <div className="flex justify-center items-center gap-2">
              {/* <img
                src={expert.telegram}
                alt="Telegram"
                className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
              /> */}
              <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
                {expert.greet}
              </button>
              <img
                src={expert.arrowIcon}
                alt="arrow"
                className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
              />
            </div>
          </div>
          <Link to={`/subscriptionRA/${expert.id}`} onClick={scrollToTop} className="flex text-white md:text-[15px] text-[10px] button-animation justify-center ">
            View More
            <div className="flex items-center">
              <FiChevronRight className="text-[15px]" />
            </div>
          </Link>
        </div>
      </Link>
    );
  })}
</div>

      </div>
    </>
  );
};

export default ExpertiseData;
