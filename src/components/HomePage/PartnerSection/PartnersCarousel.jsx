import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Trusted1, Trusted2, Trusted3, Trusted4 } from '../../../assets';

const PartnersCarousel = () => {
  const images = [Trusted1, Trusted2, Trusted3, Trusted4];

  // Pair images
  const pairedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    pairedImages.push([images[i], images[i + 1]]);
  }

  // Calculate the tallest image height
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    let tallest = 0;
    pairedImages.forEach(pair => {
      pair.forEach(image => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          if (img.height > tallest) {
            tallest = img.height;
            setMaxHeight(tallest);
          }
        };
      });
    });
  }, [pairedImages]);

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
          <div key={index} className="flex justify-center items-center" style={{ height: `${maxHeight}px` }}>
            {pair.map((image, subIndex) => (
              <div key={subIndex} className="flex justify-center items-center w-1/2 px-2">
                {image && (
                  <img
                    src={image}
                    alt={`Trusted ${index * 2 + subIndex + 1}`}
                    className="h-full"
                    style={{ maxWidth: `${subIndex === 1 ? "300px" : "100px"}` }}
                  />
                )}
              </div>
            ))}
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
