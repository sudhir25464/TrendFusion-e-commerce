import React, { useState , useContext, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/newprojectLogo.png'

import CreateContexts from '../context/CreateContexts';
import { useSelector } from 'react-redux';




const Navbar = () => {

  const state= useSelector((state)=>state.handleCart)
  const [themes,settheme] = useState('light')
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  const { theme, toggleTheme}= useContext(CreateContexts);
 
 

  return (
    <nav className="bg-slate-100 p-4 sticky top-0 z-30">
      <div className="container mx-w-9xl mx-auto flex justify-between items-center">
        <div className="text-blue-900  text-sm sm:text-2xl font-bold"><img className='h-[50px] w-50' src={Logo}></img></div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-grey-400 focus:outline-none">
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
        {/* <button 
                className="ml-4 py-2 px-4 bg-blue-500 text-white dark:bg-yellow-500 dark:text-black rounded"
                onClick={toggleTheme}
            >
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button> */}
        <div className={`md:flex md:items-center  ${isOpen ? 'block' : 'hidden'} absolute md:static top-12 left-0 right-0 bg-gray-200 md:bg-transparent `}>
          <NavLink 
            to="/" 
            exact 
            className={({ isActive }) => 
              `flex justify-center mt-4 md:mt-0 md:ml-6 ${isActive ? 'text-blue-500 underline' : 'text-black hover:text-blue-500 '}`
            } 
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/product" 
            className={({ isActive }) => 
              `flex justify-center mt-4 md:mt-0 md:ml-6 ${isActive ? 'text-blue-500 underline ' : 'text-black hover:text-blue-500'}`
            } 
            onClick={closeMenu}
          >
            Product
          </NavLink>
          <NavLink 
            to="/youritem" 
            className={({ isActive }) => 
              `flex justify-center mt-4 md:mt-0 md:ml-6 ${isActive ? 'text-blue-500 underline' : 'text-black hover:text-blue-500'}`
            } 
            onClick={closeMenu}
          >
            Card ({state.length})
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
