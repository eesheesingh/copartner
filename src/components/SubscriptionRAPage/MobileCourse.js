import React from 'react';

function MobileCourse ({showMobilePopup}) {
  
  return (
    <div>
      {showMobilePopup && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
          <div className="flex rounded-2xl p-4 bg-[#18181B80] border-2 border-[#F4F4F51A]">
            <div className="flex-1 text-left">
              <p className="text-lg subheading-gradient">Monthly</p>
              <p className="text-[#C6CDD5] text-sm">1 Month Access</p>
            </div>
            <p className="flex-1 text-3xl font-bold">₹1,999</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileCourse;
