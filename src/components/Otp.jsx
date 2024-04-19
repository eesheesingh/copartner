// Otp.jsx
import React, { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

const Otp = ({ onClose }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpInputs = Array.from({ length: 6 }); // Array to generate 6 OTP input boxes
  const otpInputRefs = useRef([]);

  // Function to handle input change for each OTP box
  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value.length === 1 && index < 5) {
        otpInputRefs.current[index + 1].focus();
      }
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    // Perform form submission logic here
  };

  // Function to check if the form fields are empty
  const isFormEmpty = () => {
    return otp.some(value => value === '');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-8 rounded-lg w-96 relative text-center">
        <div className='absolute top-3 right-0 text-right '>
          <div onClick={onClose} className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white">
            <IoClose />
          </div>
        </div>
        <div className="mb-1">
          <h2 className="text-2xl font-semibold text-white">OTP Verification</h2>
        </div>
        <p className="text-gray-300 text-center mb-4">Enter the verification code we just sent to your mobile number</p>
        <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-3 p-2">
            {otpInputs.map((_, index) => (
              <input
                key={index}
                ref={el => otpInputRefs.current[index] = el}
                type="text"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent text-center w-12"
              />
            ))}
          </div>
          <button
            type="submit"
            className={`bg-white hover:bg-black hover:text-white text-black transition duration-300 font-semibold text-[20px] py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFormEmpty() ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isFormEmpty()}
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
