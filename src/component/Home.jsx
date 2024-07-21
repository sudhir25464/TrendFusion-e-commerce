import React from 'react'
// import Carousel from './Carousel';
// import ecard from '../../assets/ecard.jpg';
// import homeCard from '../assets/images/homebag.jpg'
// import homeCard2 from '../assets/images/bagcard.jpg';
// import homeCard3 from '../assets/images/people.jpg';

import { Link } from 'react-router-dom';
import Card2x from './childcomponent/Card2x';
import HomeProduct from './childcomponent/HomeProduct';
import ServiceDetails from './childcomponent/ServiceDetails';

import myVideo from '../assets/images/tiny.mp4';
import HomeLattestProduct from './childcomponent/HomeLattestProduct';
import BigImage from './childcomponent/BigImage';
import AutoSliders from './childcomponent/AutoSliders';


function Home() {


  return (
    <>
      <div className="relative">

<BigImage/>
        {/* <Carousel /> */}
        <div className="absolute md:px-20  inset-0 flex flex-col sm:items-center justify-center text-center bg-black bg-opacity-50 p-4">
          <h1 className='text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl'>
            Explore our curated <span className='text-blue-800'>  collection of products </span>to elevate your daily life
          </h1>
          <button className='mt-5 bg-orange-400 p-2 px-5 rounded  btn-advanced-hover '>
            <Link to='product '>SHOP NOW</Link>
          </button>
        </div>
      </div>

      
      <div className='max-w-7xl p-5 mx-auto bg-white'>
      <AutoSliders/>
        <div className='grid sm:grid-cols-1 justify-center'>

             {/* <div className='flex-row sm:px-7 h-[240px] sm:h-[400px]  mt-2  mx-2 mb-0'>
           
   

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  justify-center  overflow-x-scroll md:overflow-hidden mx-auto sm:mt-1 gap-2 '>

                <div className=' flex justify-center w-50%'>
                  <img className=' rounded-lg   h-[200px] w-full ' src={ecard}  ></img>
                </div>
                <div>
                  <img className=" rounded-lg  h-[200px] w-full" src={homeCard}></img>
                </div>
                <div>
                  <img className=" rounded-lg  h-[200px] w-full" src={homeCard2}></img>
                </div>
                <div>
                  <img className=" rounded-lg  h-[200px] w-full" src={homeCard3}></img>
                </div>

              </div> 
               
          </div>

           
           <div className='flex-row sm:px-7 h-[240px] sm:h-[400px] md:mt-8 px-4 mt-2 sm:mt-7 mx-2 mb-0'>
           
           
            <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4  justify-center  overflow-x-scroll md:overflow-hidden mx-auto sm:mt-1 gap-2 '>

                <div className=' flex justify-center'>
                  <img className=' rounded-lg   ' src={ecard}  ></img>
                </div>
                <div>
                  <img className=" rounded-lg" src={homeCard}></img>
                </div>
                <div>
                  <img className=" rounded-lg" src={homeCard2}></img>
                </div>
                <div>
                  <img className=" rounded-lg" src={homeCard3}></img>
                </div>

              </div>
               
          </div> */}
           
        </div>
      </div>
      
      <HomeProduct />
      <Card2x />
      <ServiceDetails />
    </>
  )
}

export default Home

