import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Login from './Login';


const SignUp = ({ onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  // Function to check if the form fields are empty
  const isFormEmpty = () => {
    return !name || !mobile || !email;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#18181B] p-6 rounded-lg w-80 relative">
        <IoClose className="text-gray-400 cursor-pointer hover:text-white absolute top-4 right-4" onClick={onClose} />
        <div className="flex justify-between items-center mb-4 text-center">
          <h2 className="text-2xl font-semibold text-white">Sign Up</h2>
        </div>
        <p className="text-gray-300 text-left mb-4">Full access to any of our products.</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:border-white-500 bg-transparent"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent"
          />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent"
          />
          <button
            type="submit"
            className={`bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFormEmpty() ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isFormEmpty()}
          >
            Continue
          </button>
        </form>
        <p className="text-gray-300 mt-4 text-center">
          Already have an account?{' '}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={() => setShowLoginPopup(true)}
          >
            Login here
          </a>
        </p>
      </div>
      {showLoginPopup && (
        <Login onClose={() => setShowLoginPopup(false)} />
      )}
    </div>
  );
};


export default SignUp;
