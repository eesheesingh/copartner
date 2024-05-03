import React from "react";
import { course_data } from "../../constants/data";
import { arrow, bookmark, stars, telegram } from "../../../assets";

const ExpertCard = () => {
  return (
    <div>
      {course_data.map((expert) => (
        <section key={expert.id} className="subscription-RA-bg flex flex-row justify-between bg-[#18181B80] relative w-full md:p-[30px] p-[16px] border-2 border-[#f4f4f50e] rounded-xl mb-8">
          <div className="text-white">
            <div className="flex flex-col md:mb-6 mb-1">
              <div className="flex justify-between items-center w-full">
                <span className="flex-1 font-bold md:text-[72px] text-[26px] text-gradient md:leading-[88px] leading-[30px] md:pb-3">
                  {expert.name}
                </span>
              </div>
              
              <span className="font-normal opacity-60 md:leading-[28px] md:text-[22px] text-[12px]">
                {expert.role}
              </span>
            </div>
            <div className="flex justify-between md:w-[350px] w-[176px] md:h-16 h-10 md:mb-6 mb-4">
              <div className="flex flex-col items-center justify-around">
                <div className="md:text-xl text-[12px] text-[#C6CDD5]">Experience</div>
                <div className="md:text-xl text-xs font-semibold">{expert.totalExp}</div>
              </div>
              <div className="w-[1px] md:h-16 h-10 bg-white"></div>
              <div className="flex flex-col items-center justify-around">
                <div className="md:text-xl text-[12px] text-[#C6CDD5]">Followers</div>
                <div className="md:text-xl text-xs font-semibold">{expert.totalFollowers}</div>
              </div>
            </div>
            <div className="md:text-lg text-[13px] md:font-semibold md:w-[508px] md:mb-4 py-3 mb-2">
              {expert.content}
            </div>
            <div onClick={() => window.open(expert.telegramLink, "_blank")} className="border-[1px] border-[#f4f4f535] border-opacity-30 md:rounded-3xl rounded-2xl md:w-44 w-32 md:mb-6">
              <button className="flex mx-auto md:py-2 py-1 items-center">
                <span className="md:text-base text-xs">Get Free Calls</span>
                <img className="w-4 ms-3" src={arrow} alt="arrow icon" />
              </button>
            </div>
            <div className="md:block hidden">
              <button className="flex items-center md:text-base text-xs mt-2">
                Explore More
                <img className="w-4 ms-3" src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="flex mx-auto">
            <img className="subscription-RA-img md:w-[400px] w-[470px] my-auto" src={expert.userImg} alt=""
             style={{
                  maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)'
                }}/>
          </div>
          <div className="flex text-white items-end absolute top-6 right-6">
            <img className="md:w-8 w-4 md:h-8 h-4 me-1" src={stars} alt="star icon" />
            <span className="md:text-3xl text-sm">{expert.rating}</span>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ExpertCard;
