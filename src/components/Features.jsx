import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from framer-motion
import { FeaturesImage, Ad } from '../assets';

const Features = () => {
  const [showVideo, setShowVideo] = useState(false);
  const imageRef = useRef(null);
  const controls = useAnimation(); // Initialize controls for animation

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 } // Animation duration
          });
          observer.unobserve(imageRef.current); // Stop observing once animation triggers
        }
      },
      { threshold: 0.5 } // Intersection threshold
    );

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, [controls]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center rounded-lg">
      {/* Wrap the image with motion.div to apply animation */}
      <motion.img
        src={FeaturesImage}
        alt="Features"
        className="cursor-pointer hover:opacity-75"
        onClick={toggleVideo}
        ref={imageRef}
        initial={{ opacity: 0, y: 50 }} // Initial animation state
        animate={controls} // Animation controlled by controls
      />
      {showVideo && (
        <div className="absolute inset-0 flex justify-center items-center">
          <iframe
            width={imageRef.current.clientWidth}
            height={imageRef.current.clientHeight}
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Features;
