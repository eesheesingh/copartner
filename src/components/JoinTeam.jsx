import React, { useState } from 'react';
import { close } from '../assets';

const JoinTeam = ({ closeModal }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    mobile: '',
    email: '',
    expertise: '',
    experience: '',
    telegramLink: '',
    telegramMembers: '',
    sebiCertificate: null
});

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      setUploadedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    // For demonstration purposes, we'll just show the success popup and reset the form
    setShowSuccessPopup(true);
    setFormValues({
        name: '',
        mobile: '',
        email: '',
        expertise: '',
        experience: '',
        telegramLink: '',
        telegramMembers: '',
        sebiCertificate: null
    });
};

const handleInputChange = (e) => {
  const { id, value } = e.target;
  setFormValues({ ...formValues, [id]: value });
};
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-[#18181B] p-6 rounded-lg relative">
        <button onClick={closeModal} className="absolute top-2 right-2">
            <img src={close} alt="Close" className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-bold mb-4 subheading-color">Join Our Expert Team</h2>
        {/* Add your form here */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="relative">
                            <input type="text" id="name" value={formValues.name} onChange={handleInputChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer" placeholder=" " />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
                        </div>
            {/* Mobile Number Field */}
            <div className="relative">
              <input type="tel" id="mobile" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer" placeholder=" " />
              <label htmlFor="mobile" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Mobile Number</label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input type="email" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fffff49]appearance-none dark:text-white dark:border-[#ffffff49] dark:focus:border-[#fffff49] focus:outline-none focus:ring-0 focus:border-[#fffff49] peer" placeholder=" " />
              <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
            </div>

            {/* Expertise In Field */}
            <div className="relative">
              <select id="expertise" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer">
                <option value="" disabled selected>Select Expertise</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="technology">Technology</option>
                {/* Add more options as needed */}
              </select>
              <label htmlFor="expertise" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Expertise In</label>
            </div>

            {/* Experience Field */}
            <div className="relative">
            <select id="experience" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer">
                <option value="" disabled selected>How Much Expertise</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="technology">Technology</option>
                {/* Add more options as needed */}
              </select>
              <label htmlFor="experience" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Experience</label>
            </div>

            {/* Free Telegram Channel Link Field */}
            <div className="relative">
              <input type="text" id="telegramLink" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer" placeholder=" " />
              <label htmlFor="telegramLink" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Free Telegram Channel Link</label>
            </div>

            {/* Members in Telegram Channel Field */}
            <div className="relative">
              <input type="text" id="telegramMembers" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-2 border-[#fff] appearance-none dark:text-white dark:border-[#fff4] dark:focus:border-[#fff] focus:outline-none focus:ring-0 focus:[#fff] peer" placeholder=" " />
              <label htmlFor="telegramMembers" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-0 bg-[#18181B] px-2 peer-focus:px-2 peer-focus:text-[#fff] peer-focus:dark:text-[#fff] peer-focus:border-2 rounded-md peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Members in Telegram Channel</label>
            </div>

            {/* SEBI Registration Certificate Field */}
            
            <div className="relative col-span-2">
            <label htmlFor="sebiCertificate" className="text-[#ffffff88] block mb-2">Select SEBI Registration Certificate</label>
            <div className='border-2 border-dashed rounded-lg'>
                <input type="file" id="sebiCertificate" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="hidden" />
                <label htmlFor="sebiCertificate" className="block w-full bg-transparent text-white p-20 rounded-md text-center cursor-pointer">Select</label>
                {uploadedFile && <p className="text-gray-500 text-sm text-center">Uploaded: {uploadedFile.name}</p>}
                </div>
            </div>
          </div>

          {/* Become Copartner Checkbox */}
          <div className="relative flex items-start">
            <input type="checkbox" id="copartnerCheckbox" className="mr-2 appearance-none bg-transparent border-2 border-[#fff] rounded-md w-4 h-4 focus:outline-none focus:ring-0 focus:[#fff] peer" />
            <label htmlFor="copartnerCheckbox" className="text-sm text-gray-500 dark:text-gray-400">Become Copartner <br/> Take your team up a level with easy-to-use tools, effortless templates and Terms & Conditions.</label>
          </div>

          <div className='text-center'>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                    </div>
                </form>
                {/* Success Popup */}
                {showSuccessPopup && (
                    <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
                        Successfully Sent
                    </div>
                )}
            </div>
        </div>
    );
};

export default JoinTeam;
