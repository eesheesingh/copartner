// // SignUp.jsx
// import React, { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import Otp from "./Otp"; // Import the Otp component

// const SignUp = () => {
//   const [mobile, setMobile] = useState("");
//   const [showOtp, setShowOtp] = useState(false); // State to manage the visibility of the OTP popup
//   const [error, setError] = useState(""); // State to manage the error message

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (mobile.length !== 10) {
//       setError("Mobile number should have exactly 10 digits.");
//     } else {
//       setError("");

//       const postData = {
//         countryCode: "IN",
//         mobileNumber: mobile,
//         otp: ""
//       };

//       try {
//         const response = await fetch(
//           "https://copartners.in:5181/api/SignIn/GenerateOTP",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(postData),
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log(data);
//         setShowOtp(true);
//       } catch (error) {
//         console.error("There was a problem with your fetch operation:", error);
//       }
//     }
//   };

//   // Function to check if the form fields are empty
//   const isFormEmpty = () => {
//     return !mobile;
//   };

//   // Function to close both the OTP and sign-up popups
//   const handleClosePopups = () => {
//     setShowOtp(false);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-6 rounded-lg w-96 relative text-center">
//         <div className="absolute top-3 right-0 text-right ">
//           <div
//             onClick={handleClosePopups}
//             className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white"
//           >
//             <IoClose />
//           </div>
//         </div>
//         <div className="mb-4">
//           <h2 className="text-2xl font-semibold text-white">Sign Up</h2>
//         </div>
//         <p className="text-gray-300 text-center mb-4">
//           Full access to any of our products.
//         </p>
//         {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
//         {/* Display error message if exists */}
//         {showOtp ? ( // Render OTP component if showOtp is true
//           <Otp mobileNumber={mobile} onClose={handleClosePopups} />
//         ) : (
//           <form
//             className="flex flex-col gap-4 text-white"
//             onSubmit={handleSubmit}
//           >
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               className="px-4 py-3 border border-[#ffffff34] rounded-xl focus:outline-none focus:border-white-500 bg-transparent"
//             />
//             <button
//               type="submit"
//               className={`bg-white hover:bg-black hover:text-white text-black transition duration-300 font-semibold text-[20px] py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                 isFormEmpty() ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={isFormEmpty()}
//             >
//               Continue
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SignUp;
