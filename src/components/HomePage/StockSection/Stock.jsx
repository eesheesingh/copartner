import React from "react";
import { Group } from "../../../assets";
import { Link } from "react-router-dom";

const Stock = () => {
  return (
    <div className="p-1 mb-4">
      {/* Container 1 */}
      <div className="flex flex-col md:flex-row mb-8 md:text-left text-center items-center justify-start">
        {/* Left Column */}
        <div className="w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[70px] leading-[40px]">
            Our Stock Market <br />
            Expertise
          </h2>
          <p className="text-90 md:text-xl text-md text-[#ffffffbb] md:px-1 px-1 md:hidden">
            Guiding traders towards profitable decisions in the dynamic stock
            market landscape.
          </p>
          <p className="text-90 md:text-xl text-[#ffffffbb] mb-6 md:px-1 px-4 md:block hidden">
            Tap into our stock market expertise and elevate your trading journey
            with informed insights and strategic guidance.
            <br />
            Guiding traders towards profitable decisions in the dynamic stock
            market landscape.
          </p>
          <div className="ml-1 md:block hidden">
            <Link to="/joinTeam" className="main-button">
              Join Expert Team
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 relative">
          {/* Add your stock image here */}
          <img
            src={Group}
            alt="Stock"
            className="w-90"
            style={{
              maskImage: "linear-gradient(rgba(0, 0, 0, 1) 70%, transparent)",
            }}
          />
          <div className="md:hidden">
            {/* <Link to="/joinTeam" className="main-button">
              Join Expert Team
            </Link> */}
            <a href="https://forms.gle/kx5TwUbSUwHFEGZcA" target="_blank" rel="noreferrer" className="main-button">
              Join Expert Team
            </a> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;


// import React, { useState } from 'react';
// import JoinTeam from './JoinTeam';
// import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";
// import { expertise_data } from '../../constants/data';

// const Stock = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {/* Left Column */}
//       <div className="p-4">
//         <h2 className="subheading-color font-bold md:text-6xl text-4xl md:leading-[70px] leading-[40px]">Our Stock Market <br/>Expertise</h2>
//         <p className='text-90 md:text-xl text-md text-[#ffffffbb] md:px-1 px-1 md:hidden'>Guiding traders towards profitable decisions in the dynamic stock market landscape.</p> 
//         <p className="text-90 md:text-xl text-[#ffffffbb] mb-6 md:px-1 px-4 md:block hidden">Tap into our stock market expertise and elevate your trading journey with informed insights and strategic guidance.
//         <br/>
//         Guiding traders towards profitable decisions in the dynamic stock market landscape.
//         </p>
//         <div className='ml-1 md:block hidden'>
//           <button onClick={openModal} className='main-button'>Join Expert Team</button>
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="p-4 flex justify-center items-center overflow-hidden ">
//         <div style={{ overflowY: 'hidden', maxHeight: '100%' }}>
//           <Marquee fade={true} direction="up">
//             {expertise_data.map(expert => (
//               <div key={expert.id} className='flex flex-col justify-center items-center bg-[#ffffff19] p-5 rounded-lg'>
//                 <div className='border-b flex flex-col justify-center items-center p-2 border-[#fff]'>
//                 <div className="rounded-full overflow-hidden text-center w-20 h-20 flex items-center justify-center bg-[#ffffff61]">
//                   <img src={expert.userImg} alt={expert.name} className="object-cover w-full h-full" />
//                 </div>
//                 <div className='text-xl mt-2'>{expert.name}</div>
//                 <div className='text-sm'>{expert.role}</div>
//                 </div>
//                 <div className=' flex flex-row mt-2 py-2'>
//                   <div className='exp flex flex-col text-center'>
//                     <h1>Experience</h1>
//                     <h1>{expert.totalExp}</h1>
//                   </div>
//                   <div className='h-12 mx-3 mr-4 border border-[#fff]'></div>
//                   <div className='exp flex flex-col text-center'>
//                     <h1>Followers</h1>
//                     <h1>{expert.totalFollowers}</h1>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </div>

//       {showModal && <JoinTeam closeModal={closeModal} />}
//     </div>
//   );
// };

// export default Stock;
