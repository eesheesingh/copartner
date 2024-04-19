import React, { useEffect, useState } from 'react';
import { close } from '../../assets';

const CoursePaymentPopup = ({ onClose, selectedPlan, planPrice }) => {
  const [subtotal, setSubtotal] = useState(0);
  const gstRate = 0.18;
  
  useEffect(() => {
    // Calculate subtotal based on plan price
    const calculatedSubtotal = planPrice || 0;
    // Calculate total with GST
    const total = calculatedSubtotal + (calculatedSubtotal * gstRate);
    setSubtotal(calculatedSubtotal);
  }, [planPrice]);

  const handleClose = () => {
    // Call the onClose function provided by the parent component
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#18181be2] border-[1px] border-[#ffffff24] rounded shadow-md w-[400px] relative">
        <button className="absolute top-1 right-1" onClick={handleClose}>
          <img src={close} alt="" className="h-6 w-6" />
        </button>
        <div className='border-b-2 py-3 px-6'>
          <h2 className="text-2xl font-bold subheading-color text-left">Your Subscription Details</h2>
        </div>
        <div className="flex flex-col p-6">
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">Subscription</label>
            <span className="text-sm">{selectedPlan || "Monthly"}</span> {/* Show default "Monthly" if no plan selected */}
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">Amount</label>
            <span className="text-sm">₹{planPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">SubTotal</label>
            <span className="text-sm">₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm text-[#c9c9c9] font-normal">GST 18%</label>
            <span className="text-sm">₹{(subtotal * gstRate).toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 mb-4 border-b-[1px] border-t-[1px] border-[#c9c9c962]">
            <label className="block text-lg text-[#c9c9c9] font-semibold">Total</label>
            <span className="text-lg font-semibold">₹{(subtotal + (subtotal * gstRate)).toFixed(2)}</span>
          </div>
          <button className="main-button">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePaymentPopup;
