import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Trusted1, Trusted2, Trusted3, Trusted4, Trusted5, Trusted6 } from '../assets';

const PartnersCarousel = () => {
  const images = [Trusted1, Trusted2, Trusted3, Trusted4, Trusted5, Trusted6];
  const pairedImages = [];
  
  // Pair images
  for (let i = 0; i < images.length; i += 2) {
    if (i + 1 < images.length) {
      pairedImages.push([images[i], images[i + 1]]);
    } else {
      pairedImages.push([images[i], null]);
    }
  }

  return (
    <div className="md:hidden">
      <Carousel 
        showArrows={false} 
        showStatus={false} 
        showThumbs={false} 
        showIndicators={false}
        infiniteLoop 
        autoPlay 
        interval={3000} 
        dynamicHeight={false} // Prevents image stretching
        emulateTouch // Enable swipe gestures on mobile
      >
        {pairedImages.map((pair, index) => (
          <div key={index}>
            <div className="flex justify-center items-center">
              {pair[0] && (
                <img 
                  src={pair[0]} 
                  alt={`Trusted ${index * 2 + 1}`} 
                  className="max-w-[150px] md:max-w-full h-auto mr-4" // Adjust size as needed
                />
              )}
              {pair[1] && (
                <img 
                  src={pair[1]} 
                  alt={`Trusted ${index * 2 + 2}`} 
                  className="max-w-[100px] md:max-w-full h-auto" // Adjust size as needed
                />
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PartnersCarousel;
