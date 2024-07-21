import React, { useEffect, useState } from 'react';
// import ecard from '../../assets/images/ecard.jpg';
import homeCard from '../../assets/images/homebag.jpg';
import homeCard2 from '../../assets/images/bagcard.jpg';
import homeCard3 from '../../assets/images/people.jpg';

const images = [ homeCard, homeCard2, homeCard3];

const AutoSliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full flex justify-center p-1">
            <img className="rounded-lg h-[300px] w-full object-cover" src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSliders;
