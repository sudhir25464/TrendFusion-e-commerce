// src/components/ImageSlider.jsx

import ecard from '../assets/ecard.jpg';
import homeCard from '../assets/images/homebag.jpg'
import homeCard2 from '../assets/images/bagcard.jpg';
import homeCard3 from '../assets/images/people.jpg';


import React, { useState, useEffect } from 'react';


const images = [
  'https://cdn.pixabay.com/photo/2019/09/30/15/22/shopping-cart-4516039_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_1280.jpg',
 


  // Add more image paths as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" relative h-100 md:h-[200px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full ">
            <img src={image} alt={`Slide ${index}`} className="w-full  rounded h-100 md:h-[400px]  object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
