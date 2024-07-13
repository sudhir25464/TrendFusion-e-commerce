import React from 'react';

import image1 from '../../assets/images/camra.jpg';
import image2 from '../../assets/images/gTishirt.jpg';

import image3 from '../../assets/images/tishirt.jpg';

import image4 from '../../assets/images/smartman.jpg';



  const HomeLattestProduct  = () => {
    const products = [
      { id: 1, image: image1, title: 'new model Camra' }, // Use imported image
      { id: 2, image: image2, title: 'T-shirt' }, // Use imported image
      { id: 3, image: image3, title: 'new Cotton blend' }, // Use imported image
      { id: 4, image: image4, title: 'mens t-shirt' }, // Use imported image
      // Additional products with placeholder images
     
    ];

  return (
    <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-2xl font-bold mb-6'>Latest Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <div key={product.id} className='group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300'>
            <img src={product.image} alt={product.title} className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <h3 className='text-white text-lg font-bold'>{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeLattestProduct;
