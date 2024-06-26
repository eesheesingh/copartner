import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import axios from "axios";
import { User, arrow, stars, telegram, userBack } from "../../../assets";

const ExpertiseData = () => {
  const [experts, setExperts] = useState([]);

  const getExpertType = (typeId) => {
    switch (typeId) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Options";
      default:
        return "Unknown";
    }
  };

  const fetchExperts = async () => {
    try {
      const response = await axios.get("https://copartners.in:5132/api/Experts?page=1&pageSize=10");
      if (response.data.isSuccess) {
        setExperts(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching experts:", error);
    }
  };

  useEffect(() => {
    fetchExperts();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex flex-col sm:py-[1rem] py-6">
        <div className="flex flex-col gap-2 xl:px-0">
          <div className="md:text-left text-center">
            <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[80px] leading-[40px] md:pl-[10px]">
              Our Expertise
            </h2>
            <p className="text-90 md:text-xl text-[#ffffffbb] md:px-[10px] px-4 py-2">
              Guiding your investments to Greatness: Our Expertise, Your Financial Advantage!
            </p>
          </div>
        </div>

        <div className="flex p-[1rem] gap-[1rem] sm:p-[4rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-1 md:ml-0 ml-[-5px] md:mt-[-2rem]">
          {experts.map((expert) => {
            return (
              <Link
                onClick={scrollToTop}
                to="https://copartner.in/"
                key={expert.id}
                className="md:w-[384px] md:h-[400px] sm:w-[172px] h-[270px] rounded-[11px] md:mt-0 mt-[16px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out"
              >
                <div className="w-[72px] h-[98px] sm:w-[384px] sm:h-[219px] relative profile-image_1 mb-4">
                  <img
                    src={userBack}
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                  />
                  <img
                    src={expert.expertImagePath}
                    alt="User"
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                  />
                </div>

                <div className="w-[154px] h-[22px] sm:w-[319px] sm:h-[40px] flex justify-between px-[5px] sm:px-[1rem]">
                  <div className="flex flex-col h-[22px] w-full md:h-[40px] gap-2">
                    <span className="sm:text-[18px] text-[12px] sm:leading-[18px] leading-[8px] font-[500] text-lightWhite">
                      {expert.channelName}
                    </span>
                    <span className="sm:text-[13px] text-[10px] sm:leading-[16px] leading-[9.6px] font-[400] text-dimWhite">
                      {expert.name} - {getExpertType(expert.expertTypeId)}
                    </span>
                  </div>
                  <div className="sm:w-[48px] sm:h-[22px] w-[21px] h-[10px] flex">
                    <img
                      src={stars}
                      className="sm:w-[12.3px] sm:h-[12.3px] w-[8px] h-[8px]"
                      alt="rating"
                    />
                    <span className="text-lightWhite font-[600] sm:text-[11.5px] sm:leading-[14px] text-[10px] leading-[10px]">
                      {expert.rating}
                    </span>
                  </div>
                </div>

                <div className="md:w-[256px] w-[143px] h-[34px] flex items-start md:mt-2 mt-4 justify-between">
                  <div className="flex flex-col md:w-[78px] w-[43px] h-[22px] items-center justify-between">
                    <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                      Experience
                    </span>
                    <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                      {expert.experience}
                    </span>
                  </div>
                  <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                  <div className="flex">
                    <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[9px] leading-[10px]">
                        Followers
                      </span>
                      <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                        {`${(expert.telegramFollower / 1000).toFixed(1)}k`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-[300px] md:h-[32px] md:mt-2 w-full md:pl-[5px]">
                  <div className="text-dimWhite md:text-[14px] flex md:flex-row flex-col text-[11px] md:leading-[18px] leading-[14px] md:pl-0 pl-[2px]">
                    <span>SEBI:</span>{" "}
                    <span className="text-white md:ml-2">
                      {expert.sebiRegNo}
                    </span>
                  </div>
                </div>

                <div className="md:w-[211px] bg-[#0081F1] md:h-[40px] w-[146px] h-[38px] flex items-center justify-center rounded-[21.5px] mt-2 md:mt-0">
                  <div onClick={() => window.open(expert.telegramChannel, "_blank")} className="flex justify-center items-center gap-2">
                    <img
                      src={telegram}
                      alt="Telegram"
                      className="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
                    />
                    <button className="text-white font-[400] md:text-[15px] text-[12px] leading-[19px]">
                      Get Free Calls
                    </button>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="md:w-[16px] md:h-[16px] w-[11px] h-[11px]"
                    />
                  </div>
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
