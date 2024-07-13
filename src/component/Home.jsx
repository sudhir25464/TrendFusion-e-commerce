import React from 'react'
import Carousel from './Carousel';
import ecard from '../assets/ecard.jpg';
import homeCard from '../assets/images/homebag.jpg'
import homeCard2 from '../assets/images/bagcard.jpg';
import homeCard3 from '../assets/images/people.jpg';

import { Link } from 'react-router-dom';
import Card2x from './childcomponent/Card2x';
import HomeProduct from './childcomponent/HomeProduct';
import ServiceDetails from './childcomponent/ServiceDetails';

import myVideo from '../assets/images/tiny.mp4';
import HomeLattestProduct from './childcomponent/HomeLattestProduct';
function Home() {

  // const images = [
  //   'https://via.placeholder.com/800x400?text=Slide+1',
  //   'https://via.placeholder.com/800x400?text=Slide+2',
  //   'https://via.placeholder.com/800x400?text=Slide+3',
  // ];
  return (
    <>


   
    <div>
        <div className='max-w-7xl mx-auto bg-white '>
    
          <div className='grid sm:grid-cols-2  justify-center'>

            <div className=' flex-row sm:px-7 h-[240px] sm:h-[400px] md:mt-8 px-4 mt-2 sm:mt-7 mx-2  mb-0 '>
              <h1 className='mt-8 text-3xl font-bold tracking-tight text-blue-950  md:text-4xl lg:text-5xl text-ellipsis-2 '>Explore our curated collection of products to elevate your daily life </h1>

              <button className='sm:mt-8 mt-5 bg-orange-400 p-2 px-5'><Link to='product '>SHOP NOW </Link></button>
            </div>

            <div className=' overflow-hidden items-center justify-center mt-2 sm:mt-2 '>

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
            </div>
          </div>

        </div>

        </div> 
 


       

        <HomeProduct />


        <Card2x />

    
        
   
     

      <ServiceDetails/>
  
    </>
  )
}

export default Home
