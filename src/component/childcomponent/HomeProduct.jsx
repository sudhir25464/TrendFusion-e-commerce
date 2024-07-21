import React, { useEffect, useState } from 'react';
import LatestProductCard from './LatestProductCard';
import Carousel from '../Carousel';
import HomeLattestProduct from './HomeLattestProduct';
import alertProduct from '../../assets/images/headphones.jpg';

import { Link } from 'react-router-dom';
function HomeProduct() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Timer to show the alert after 2 seconds
    const showAlertTimer = setTimeout(() => {
      setShowAlert(true);
    }, 3000); // 2 seconds delay

    // Timer to hide the alert after 20 seconds
    const hideAlertTimer = setTimeout(() => {
      setShowAlert(false);
    }, 20000); // 20 seconds after alert is shown

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(showAlertTimer);
      clearTimeout(hideAlertTimer);
    };
  }, []);

  const Alert = () => (
    <div className="fixed inset-0 flex items-center justify-center md:py-20  z-50 ">
     
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <button
          onClick={() => setShowAlert(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <Link to='product' >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Alert</h2>
        <p className="text-gray-700 mb-4">
          Check out this amazing product! It has all the features you need to enhance your experience.
        </p>
        <div className="flex items-center justify-between">
          <img
            src={alertProduct} // Replace with actual image URL
            alt="Product"
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800">Awesome Product</h3>
            <p className="text-sm text-gray-600">$99.99</p>
          </div>
        
        </div>
        </Link>
      </div>
   
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4">
      {showAlert && <Alert />}
      <div className="mx-auto max-w-7xl p-5 sm:p-10 md:p-20 text-center bg-orange-300 rounded mt-2">
        <h2 className="mt-6 md:mt-4 text-3xl font-bold leading-tight text-blue sm:text-4xl lg:text-3xl text-white">
          Our Latest Products
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-100 font-semibold sm:text-lg">
          Check out our newest arrivals now and enjoy top-notch products without breaking the bank. Shop today and save big!
        </p>
      </div>

      <HomeLattestProduct />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Slider */}
        <div className="sm:p-2 mb-4 py-4 md:mt-9 flex justify-center">
          <LatestProductCard />
        </div>
        {/* Second Slider */}
        <div className="sm:p-2 mb-4 py-4 md:mt-9 ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
