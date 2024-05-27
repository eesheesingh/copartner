import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Confirmation from "./Confirmation";

const JoinTeam = () => {
  const form = useRef();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [copartnerChecked, setCopartnerChecked] = useState(true);
  const [formValues, setFormValues] = useState({
    legalName: "",  // Added state for legal name
    name: "",
    expertsType: "",
    sebiNo: "",
    email: "",
    experience: "",
    mobile: "",
    channelName: "",
    panCard: "",
    address: "",
    state: "",
    gstNumber: "",
    telegramLink: "",
    premiumTelegramLink: "",
    telegramMembers: "",
    profileImage: null,
    signature: null,
    my_file: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormValues({ ...formValues, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShowConfirmation();
  };

  const handleConfirmSubmit = () => {
    emailjs
      .sendForm("service_kjbfrlb", "template_0q7an8s", form.current, {
        publicKey: "t93NEg-srlerr1Vbm",
      })
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessPopup(true);
          setFormValues({
            legalName: "",
            name: "",
            expertsType: "",
            sebiNo: "",
            email: "",
            experience: "",
            mobile: "",
            channelName: "",
            panCard: "",
            address: "",
            state: "",
            gstNumber: "",
            telegramLink: "",
            premiumTelegramLink: "",
            telegramMembers: "",
            profileImage: null,
            signature: null,
            my_file: null,
          });
        },
        (error) => {
          console.error("Email sending error:", error.text);
        }
      );

    handleCloseConfirmation();
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCopartnerChange = () => {
    setCopartnerChecked(!copartnerChecked);
  };

  const handleShowTerms = () => {
    setShowTerms(true);
  };

  const handleCloseTerms = () => {
    setShowTerms(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 mt-[5rem] header-bg">
      <div className=" border-[1px] border-[#ffffff3c] p-8 rounded-lg w-full max-w-5xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Join Our Expert Team
        </h2>
        <form
          ref={form}
          id="myForm"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="relative">
              <label
                htmlFor="legalName"
                className="block text-sm font-medium text-gray-300"
              >
                LEGAL Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="legalName"
                id="legalName"
                value={formValues.legalName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your legal name"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="expertsType"
                className="block text-sm font-medium text-gray-300"
              >
                Experts Type <span className="text-red-500">*</span>
              </label>
              <select
                name="expertsType"
                id="expertsType"
                value={formValues.expertsType}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="" disabled>
                  Select Expertise
                </option>
                <option value="Future & Options">Future & Options</option>
                <option value="Equity">Equity</option>
                <option value="Commodity">Commodity</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="relative">
              <label
                htmlFor="sebiNo"
                className="block text-sm font-medium text-gray-300"
              >
                SEBI Number. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="sebiNo"
                id="sebiNo"
                value={formValues.sebiNo}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter SEBI number"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-300"
              >
                Experience (in years) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="experience"
                id="experience"
                value={formValues.experience}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your experience"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-300"
              >
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formValues.mobile}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="channelName"
                className="block text-sm font-medium text-gray-300"
              >
                Channel Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="channelName"
                id="channelName"
                value={formValues.channelName}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter channel name"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="panCard"
                className="block text-sm font-medium text-gray-300"
              >
                PAN Card <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="panCard"
                id="panCard"
                value={formValues.panCard}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter PAN card number"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-300"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formValues.address}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your address"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-300"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={formValues.state}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your state"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="gstNumber"
                className="block text-sm font-medium text-gray-300"
              >
                GST Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="gstNumber"
                id="gstNumber"
                value={formValues.gstNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter GST number"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="telegramLink"
                className="block text-sm font-medium text-gray-300"
              >
                Free Telegram Channel Link <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="telegramLink"
                id="telegramLink"
                value={formValues.telegramLink}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your Telegram channel link"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="premiumTelegramLink"
                className="block text-sm font-medium text-gray-300"
              >
                Premium Telegram Channel Link <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="premiumTelegramLink"
                id="premiumTelegramLink"
                value={formValues.premiumTelegramLink}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your premium Telegram channel link"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="telegramMembers"
                className="block text-sm font-medium text-gray-300"
              >
                Followers on Telegram Channel <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="telegramMembers"
                id="telegramMembers"
                value={formValues.telegramMembers}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter number of followers"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="profileImage"
                className="block text-sm font-medium text-gray-300"
              >
                Profile Image <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 border-2 border-dashed rounded-lg p-4">
                <input
                  type="file"
                  name="profileImage"
                  id="profileImage"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="profileImage"
                  className="block w-full text-center text-gray-400 cursor-pointer"
                >
                  Select File
                </label>
                {formValues.profileImage && (
                  <p className="text-gray-500 text-sm mt-2 text-center">
                    Uploaded: {formValues.profileImage.name}
                  </p>
                )}
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="signature"
                className="block text-sm font-medium text-gray-300"
              >
                Signature (Image) <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 border-2 border-dashed rounded-lg p-4">
                <input
                  type="file"
                  name="signature"
                  id="signature"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="signature"
                  className="block w-full text-center text-gray-400 cursor-pointer"
                >
                  Select File
                </label>
                {formValues.signature && (
                  <p className="text-gray-500 text-sm mt-2 text-center">
                    Uploaded: {formValues.signature.name}
                  </p>
                )}
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="my_file"
                className="block text-sm font-medium text-gray-300"
              >
                SEBI Registration Certificate (Image, Doc) <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 border-2 border-dashed rounded-lg p-4">
                <input
                  type="file"
                  name="my_file"
                  id="my_file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="my_file"
                  className="block w-full text-center text-gray-400 cursor-pointer"
                >
                  Select File
                </label>
                {formValues.my_file && (
                  <p className="text-gray-500 text-sm mt-2 text-center">
                    Uploaded: {formValues.my_file.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="relative flex items-center my-4">
            <input
              type="checkbox"
              id="copartnerCheckbox"
              checked={copartnerChecked}
              onChange={handleCopartnerChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <label
              htmlFor="copartnerCheckbox"
              className="ml-3 text-sm text-gray-400"
            >
              Become Copartner
              <div>
                Read our{" "}
                <span
                  className="text-blue-500 cursor-pointer underline"
                  onClick={handleShowTerms}
                >
                  Terms & Conditions
                </span>
              </div>
            </label>
          </div>
          <Confirmation isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="px-6 pb-6 text-center">
              <img className="w-12 mx-auto mb-4" src="tick2" alt="tick2" />
              <p className="text-sm text-gray-300">
                Your documents have been successfully submitted for
                verification.
              </p>
              <p className="mt-2 text-sm text-gray-300">
                Kindly wait 72 to 96 hours for the verification email.
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white text-black py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </Confirmation>
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-black py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        {showTerms && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-4 bg-gray-800 rounded-lg max-w-lg w-full text-white">
              <button
                onClick={handleCloseTerms}
                className="float-right font-bold"
              >
                X
              </button>
              <h2 className="text-lg font-bold">Terms & Conditions</h2>
              <div className="max-h-40 max-w-md mx-auto overflow-y-auto mt-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac lorem ac risus elementum sodales. Fusce vestibulum ante id
                  velit dictum, a ultricies odio fermentum. Morbi porta eros vel
                  lacus iaculis, a interdum sapien posuere. Nunc interdum, enim
                  nec scelerisque convallis, nisi turpis mollis est, nec
                  faucibus nunc ex et nunc. Ut id dolor sapien.
                </p>
                <p>
                  Integer venenatis viverra neque, et eleifend metus blandit
                  nec. Phasellus consequat arcu vel tortor consequat, id
                  dignissim dui vehicula. Duis ut urna vel ligula consequat
                  congue ac in arcu. Duis auctor auctor felis, vel posuere quam
                  ultrices at. Nam ullamcorper nisl vitae arcu condimentum
                  suscipit.
                </p>
              </div>
              <div className="mt-4 text-center">
                By clicking this button, you accept our terms & conditions.
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCloseTerms}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-4 bg-gray-800 rounded-lg max-w-lg w-full text-white">
              <button
                onClick={handleCloseConfirmation}
                className="float-right font-bold"
              >
                X
              </button>
              <h2 className="text-lg font-bold">Terms & Conditions</h2>
              <div className="max-h-40 max-w-md mx-auto overflow-y-auto mt-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac lorem ac risus elementum sodales. Fusce vestibulum ante id
                  velit dictum, a ultricies odio fermentum. Morbi porta eros vel
                  lacus iaculis, a interdum sapien posuere. Nunc interdum, enim
                  nec scelerisque convallis, nisi turpis mollis est, nec
                  faucibus nunc ex et nunc. Ut id dolor sapien.
                </p>
                <p>
                  Integer venenatis viverra neque, et eleifend metus blandit
                  nec. Phasellus consequat arcu vel tortor consequat, id
                  dignissim dui vehicula. Duis ut urna vel ligula consequat
                  congue ac in arcu. Duis auctor auctor felis, vel posuere quam
                  ultrices at. Nam ullamcorper nisl vitae arcu condimentum
                  suscipit.
                </p>
              </div>
              <div className="mt-4 text-center">
                By clicking this button, you accept our{" "}
                <span className="text-blue-500 cursor-pointer underline">
                  terms & conditions
                </span>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    handleConfirmSubmit();
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
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
