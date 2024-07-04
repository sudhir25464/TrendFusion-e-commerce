// src/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  bg-slate-100  p-4 sticky  top-0 z-30 ">
      <div className="container mx-w-9xl mx-auto flex justify-between items-center">
        <div className=" text-blue-900   text-sm sm:text-2xl  font-bold  ">TrendFusion</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className=" text-grey-400 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:static top-12 left-0 right-0 bg-gray-200 md:bg-transparent`}>
          <Link to="/" className="flex justify-center mt-4 md:mt-0 md:ml-6 text-[black]">Home</Link>
          <Link to="/product" className="flex justify-center mt-4 md:mt-0 md:ml-6 text-[black]"> Product</Link>

          <a to="/" className="flex justify-center mt-4 md:mt-0 md:ml-6 text-[black]">Card</a>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
