import React, { useState } from 'react';
import img1 from '../assets/images/tv.jpg';
import homeCard3 from '../assets/images/smartwatches.jpg';
import img3 from '../assets/images/musics.jpg';
import img4 from '../assets/images/people.jpg';
import LeftArrow from '../assets/images/chevron-left.svg'
import RightArrow from '../assets/images/chevron-right.svg'




const images = [
  homeCard3,
  img1,
 
  img3,
  img4,
  // 'https://via.placeholder.com/600x400?text=Image+1,
  // 'https://via.placeholder.com/600x400?text=Image+2',
  // 'https://via.placeholder.com/600x400?text=Image+3'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-7xl  mx-auto justify-center">
      <div className="overflow-hidden relative h-60">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <img src={LeftArrow}></img>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <img src={RightArrow}></img>
      </button>
    </div>
  );
};

export default Carousel;
