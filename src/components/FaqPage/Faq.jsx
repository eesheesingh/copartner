import React, { useState, useEffect } from "react";
import { faq_data } from "../constants/data";
import styles from "../../style";

const FAQs = () => {
  const [expandedId, setExpandedId] = useState(1);

  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleAccordion = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className={`flex md:flex-col flex-col ${styles.paddingX} md:px-[7rem] px-0 expertise-Bg`}>
       <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:mt-[6rem] mt-0 md:bottom-[10rem] text-center `}
      >
        <div className="justify-between items-center w-full md:pt-0 pt-[5rem]">
          <h1 className="flex-1 font-bold md:text-[60px] text-[40px] text-gradient md:leading-[78px] leading-[48px]">
          FAQs
          </h1>
          

          <p className="mt-4 text-center text-white md:text-xl text-sm">
          Empower your teams to build better processes, for a better workplace.
          </p>
        </div>
      </div>

      {smallScreen ? (
        <div className="grid grid-cols-1 mt-8 gap-4 px-[8px]">
          {faq_data.map((faq) => (
            <div
              key={faq.id}
              className="flex flex-col border py-6 gap-4 border-solid border-[rgba(255,255,255,0.3)] p-4 items-center rounded-md"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="text-lightWhite font-semibold text-lg outline-none focus:outline-none"
              >
                {faq.title}
              </button>
              {expandedId === faq.id && (
                <>
                  <div className="w-full h-0.5 bg-[rgba(255,255,255,0.3)]"></div>
                  <p className="text-dimWhite text-base">{faq.des}</p>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[1204px] h-[556px] grid grid-cols-2 mt-[2rem] mb-[12rem] gap-[1rem]">
          {faq_data.map((faq) => {
            return (
              <div className="w-[592px] h-[256px] flex flex-col border py-[3rem] gap-[1rem] border-solid border-[rgba(255,255,255,0.3)] p-[4rem] items-center rounded-[8px]">
                <span className="text-lightWhite w-[517px] h-[21px] font-[500] text-[17px] leading-[20px]">
                  {faq.title}
                </span>
                <div className="w-[517px] h-[0.9px] bg-[rgba(255,255,255,0.3)]"></div>
                <span className="text-dimWhite w-[517px] h-[15px] font-[400] text-[15px] leading-[22px]">
                  {faq.des}
                </span>
              </div>
            );
          })}
        </div>
      )}


    </div>
  );
};

export default FAQs;
