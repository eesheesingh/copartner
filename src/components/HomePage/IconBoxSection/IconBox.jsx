import React from 'react';
import { User, AP, Search, AD1, AdMob2 } from '../../../assets';

const IconBox = () => {
  return (
    <div>
      {/* Features Section */}
      <div className="flex md:flex-row flex-col py-4 px-1">
        <div className="icon-box w-full md:w-1/3 p-8 rounded-lg shadow-md hover:bg-[#ffffff44] transition duration-300">
          <img src={User} alt="" />
          <div className="text mt-4">
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-[#ffffffbb]">Stay on top of your growing company by making it easy to search and get to know your teammates.</p>
          </div>
        </div>

        <div className="icon-box w-full md:w-1/3 p-8 rounded-lg shadow-md hover:bg-[#ffffff44] transition duration-300">
          <img src={Search} alt="" />
          <div className="text mt-4">
            <h3 className="text-xl font-semibold">Research Analysis</h3>
            <p className="text-[#ffffffbb]">Keep your visuals consistently on-brand with easily accessible colors, icons, screenshots, and more for the whole team.</p>
          </div>
        </div>

        <div className="icon-box w-full md:w-1/3 p-8 rounded-lg shadow-md hover:bg-[#ffffff44] transition duration-300">
          <img src={AP} alt="" />
          <div className="text mt-4">
            <h3 className="text-xl font-semibold">A.P <span className='text-[#ffffff71]'>(Coming Soon)</span></h3>
            <p className="text-[#ffffffbb]">Set up template bug report forms to give timely and actionable feedback on features and projects in development.</p>
          </div>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="w-full md:h-full h-20 p-2 mb-2 flex justify-center items-center md:pt-20 pt-[7rem] rounded-lg">
        <img src={AD1} alt="" className="md:max-w-full md:block hidden md:h-full object-cover rounded-lg" />
        <img src={AdMob2} alt="AdMob" className="md:hidden rounded-lg mt-10 py-10" /> {/* Apply rounded corners to AdMob image */}
      </div>
    </div>
  );
};

export default IconBox;
