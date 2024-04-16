import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
// import Login from './Login';

const SignUp = ({ onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  // const [showLoginPopup, setShowLoginPopup] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  // Function to check if the form fields are empty
  const isFormEmpty = () => {
    return !mobile;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-6 rounded-lg w-96 relative text-center">
        <div className='absolute top-3 right-0 text-right '>
          <div onClick={onClose} className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white">
            <IoClose />
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">Sign Up</h2>
        </div>
        <p className="text-gray-300 text-center mb-4">Full access to any of our products.</p>
        <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
          {/* <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent"
          /> */}
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent"
          />
          {/* <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent"
          /> */}
          <button
            type="submit"
            className={`bg-white hover:bg-black hover:text-white text-black transition duration-300 font-semibold text-[20px] py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFormEmpty() ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isFormEmpty()}
          >
            Continue
          </button>
        </form>
        
      </div>
      
    </div>
  );
};

export default SignUp;
