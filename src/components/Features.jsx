import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import motion and useAnimation from framer-motion
import { FeaturesImage, video } from '../assets';

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
          setShowVideo(true); // Set showVideo to true when the component becomes visible
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
          <video
            width={imageRef.current?.clientWidth}
            height={imageRef.current?.clientHeight}
            controls
            autoPlay={true}
            muted
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Features;
