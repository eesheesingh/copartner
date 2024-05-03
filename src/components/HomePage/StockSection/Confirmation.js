import React from 'react';

const Confirmation = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="p-4 bg-[#18181B] rounded-lg max-w-lg w-full">
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
