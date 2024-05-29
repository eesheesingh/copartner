import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import axios from 'axios';
import styles from '../../style';
import { User, arrow, stars, telegram, userBack } from '../../assets';

const ExpertisePage = () => {
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
      behavior: 'smooth',
    });
  };

  return (
    <section className={`flex flex-col ${styles.paddingX}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-0 px-6 z-10 md:bottom-[10rem] text-center`}>
        <div className="justify-between items-center w-full md:pt[5rem] py-10 pt-[5rem]">
          <span className="flex-1 font-poppins font-semibold md:text-[62px] text-[36px] text-gradient md:leading-[84px] leading-[48px]">
            Your team, <br /> reimagined.
          </span>
          <p className="mt-4 text-center text-white md:text-xl text-sm md:block hidden">
            Take your team up a level with easy-to-use tools, effortless
            <br />
            templates, and efficient workflows.
          </p>

          <p className="mt-4 text-center text-white md:text-xl text-sm md:hidden">
            Take your team up a level with easy-to-use tools, effortless templates, and efficient workflows.
          </p>
        </div>
        <div className="md:text-left text-center text-white">
          <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[80px] leading-[40px] md:pl-[10px]">
            Our Expertise
          </h2>
          <p className="text-90 md:text-xl text-[#ffffffbb] md:px-[10px] px-4">
            Guiding your investments to Greatness: Our Expertise, Your Financial Advantage!
          </p>
        </div>
      </div>

      <div className="p-[1rem] gap-[1rem] grid sm:grid-cols-3 grid-cols-2 sm:px-2 px-2">
        {experts.map((expert) => {
          return (
            <Link to={`/subscriptionRA/${expert.id}`} key={expert.id} onClick={scrollToTop}>
              <div className="sm:w-[384px] sm:h-[460px] w-[172px] h-[229px] rounded-[11px] p-2 relative flex flex-col items-center hover:bg-[#18181B] hover:opacity[50%] transition duration-150 ease-in-out">
                <div className="w-[72px] h-[98px] sm:w-[384px] sm:h-[219px] relative profile-image mb-4">
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

                <div className="w-[154px] h-[35px] sm:w-[319px] sm:h-[40px] flex justify-between px-[5px] sm:px-[1rem]">
                  <div className="flex flex-col w-[154px] sm:w-[319px] gap-2">
                    <span className="sm:text-[16px] text-[12px] sm:leading-[18px] md:py-0 py-[1px] leading-[10px] font-[500] text-lightWhite whitespace-normal sm:whitespace-nowrap sm:max-w-[154px] max-w-[100%]">
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

                <div className="sm:w-[256px] sm:h-[50px] w-[138px] h-[22px] flex items-start mt-2 justify-between">
                  <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[40px] h-[22px] items-center">
                    <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[10px] leading-[10px]">
                      Experience
                    </span>
                    <span className="text-lightWhite font-[600] sm:text-[15px] sm:leading-[18px] text-[10px] leading-[10px]">
                      {expert.experience}
                    </span>
                  </div>
                  <div className="sm:w-[1.4px] sm:h-[40px] w-[0.4px] h-[16px] bg-lightWhite"></div>
                  <div className="flex">
                    <div className="flex flex-col sm:w-[78px] sm:h-[50px] w-[43px] h-[22px] items-center">
                      <span className="text-dimWhite font-[400] sm:text-[13px] sm:leading-[16px] text-[10px] leading-[10px]">
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
                <Link to={`/subscriptionRA/${expert.id}`} onClick={scrollToTop} className="flex text-white md:text-[15px] text-[10px] button-animation justify-center">
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
    </section>
  );
}

export default ExpertisePage;
