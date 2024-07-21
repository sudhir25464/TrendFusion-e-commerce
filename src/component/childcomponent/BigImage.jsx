import React from 'react';
import image from '../../assets/images/musics.jpg';

function BigImage() {
  return (
    <div className="flex justify-center items-center">
      <img src={image} className="w-full h-96 md:h-400 object-cover" alt="Big" />
    </div>
  );
}

export default BigImage;
