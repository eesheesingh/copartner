import { useState } from 'react';
import { steps } from './constants/data';

const Product = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleExpand = (index) => {
    setExpandedStep((prevExpandedStep) =>
      prevExpandedStep === index ? null : index
    );
  };

  return (
    <div className="p-8 mb-4">
      {/* Container 1 */}
      <div className="flex md:flex-row flex-col mb-8 md:text-left text-center">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[80px] leading-[40px] md:pl-[50px]">
            How Our Product Works?
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p className="text-90 md:text-xl text-[#ffffff7d] mb-6 md:px-[3rem] px-4">
            Our portal seamlessly connects stock market analysts with traders,
            offering real-time insights and empowering informed decisions.
            Traders access advanced tools, while analysts expand their reach.
            Our affiliate partners earn by promoting this dynamic ecosystem.
            <span className="text-white">
              It's a collaborative hub where knowledge thrives, strategies align
              and financial success unfolds.
            </span>
          </p>
        </div>
      </div>

      {/* Container 2 */}
      <div className="space-x md:flex hidden px-4 ml-[10rem]">
        {/* Column 1 */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-700 flex-1 p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-4 text-3xl font-bold text-[#ffffff92]">
                Step {index + 1}
              </h3>
              <h4 className="text-xl font-semibold py-2">{step.title}</h4>
              <p className="mb-4 text-lg">{step.content}</p>
              
              {/* Image */}
              
                <img
                  src={step.image}
                  alt={`Product ${index + 1}`}
                  className="w-30 self-end mx-auto"
                />
             
            </div>
          </div>
        ))}
      </div>

      {/* Container 3 */}
      <div className="md:hidden">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-row text-left border border-[#ffffff39]`}
          >
            {/* Left Column */}
            <div className="w-1/3 p-2 flex flex-col justify-between">
              <h4 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h4>
              {/* Image */}
              {expandedStep === index && (
                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={`Product ${index + 1}`}
                    className="w-30 self-end mx-auto"
                  />
                </div>
              )}
            </div>
            {/* Right Column */}
            <div className="w-2/3 p-2" onClick={() => toggleExpand(index)}>
              <div className="cursor-pointer">
                <p className="text-sm">
                  {expandedStep === index
                    ? step.content
                    : `${step.content.slice(0, 50)}...`}
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;