import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Trusted1, Trusted2, Trusted3, Trusted4, trustTeam } from '../../../assets';

const PartnersCarousel = () => {
  const images = [Trusted1, Trusted2, Trusted3, Trusted4];

  // Pair images
  const pairedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    pairedImages.push([images[i], images[i + 1]]);
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
        dynamicHeight={false}
        emulateTouch
        renderThumbs={() => {}} // Hide thumbs
      >
        {pairedImages.map((pair, index) => (
          <div key={index}>
            <div className="flex justify-center items-center">
              {pair.map((image, subIndex) => (
                <div key={subIndex} className="flex justify-center items-center w-1/2 px-2">
                  {image && (
                    <img
                      src={image}
                      alt={`Trusted ${index * 2 + subIndex + 1}`}
                      className={`max-w-[${subIndex === 1 ? "300px" : "150px"}] md:max-w-full h-auto`}
                      // Increased max-width for Trusted2 image
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <div className="items-center justify-center p-2 md:p-0 text-center md:hidden">
        {/* <img src={trustTeam} alt="" /> */}
        <p className="text-[1.2rem] text-[#ffffffbb] mb-6 md:px-20 px-4">Featured In</p>
      </div>
    </div>
  );
};

export default PartnersCarousel;
