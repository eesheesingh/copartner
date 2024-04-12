import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import SignUp from './SignUp';

const Login = ({ onClose, openSignUp }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#18181B] border-[#ffffff27] border-[1.5px] p-8 rounded-lg w-96 h-96 relative">
        <IoClose className="text-gray-400 cursor-pointer hover:text-white absolute top-4 right-4" onClick={onClose} />
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-white">Login</h2>
          <p className='py-2 text-[#ffffff96]'>Full access to in any of our products Full access to in any of </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent"
          />
           <input
            type="text"
            placeholder="Referral Code (If any)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent"
          />
          <button
            type="submit"
            className="bg-white hover:bg-black hover:text-white text-black transition duration-300 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Continue
          </button>
        </form>
        <p className="text-gray-300 mt-4 text-center">
          Didn't have an account?{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setShowSignUpPopup(true)}
          >
            Create One
          </button>
        </p>
      </div>
      {showSignUpPopup && (
        <SignUp onClose={() => setShowSignUpPopup(false)} />
      )}
    </div>
  );
};

export default Login;
