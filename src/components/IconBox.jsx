import React from 'react';
import { User, AP, Search, AD1 } from '../assets';

const IconBox = () => {
  return (
    <div>
      {/* Features Section */}
      <div className="flex md:flex-row flex-col py-4 md:px-[8rem] px-1">
        <div className="icon-box w-full md:w-1/3 p-8 rounded-lg shadow-md hover:bg-[#ffffff44] transition duration-300">
          <img src={User} alt="" />
          <div className="text mt-4">
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-[#ffffff8f]">Stay on top of your growing company by making it easy to search and get to know your teammates.</p>
          </div>
        </div>

        <div className="icon-box w-full md:w-1/3 p-8 rounded-lg shadow-md hover:bg-[#ffffff44] transition duration-300">
          <img src={Search} alt="" />
          <div className="text mt-4">
            <h3 className="text-xl font-semibold">Research Analysis</h3>
            <p className="text-[#ffffff8f]">Keep your visuals consistently on-brand with easily accessible colors, icons, screenshots, and more for the whole team.</p>
          </div>
        </div>

        <div className="icon-box w-full md:w-1/3 p-8 rounded-lg shadow-md hover:bg-[#ffffff44] transition duration-300">
          <img src={AP} alt="" />
          <div className="text mt-4">
            <h3 className="text-xl font-semibold">A.P</h3>
            <p className="text-[#ffffff8f]">Set up template bug report forms to give timely and actionable feedback on features and projects in development.</p>
          </div>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="w-full md:h-96 h-20 p-2 mb-2 flex justify-center items-center">
        <img src={AD1} alt="" className="md:max-w-full md:h-full object-cover" />
      </div>
    </div>
  );
};

export default IconBox;
