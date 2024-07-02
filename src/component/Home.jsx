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
function Home() {

  // const images = [
  //   'https://via.placeholder.com/800x400?text=Slide+1',
  //   'https://via.placeholder.com/800x400?text=Slide+2',
  //   'https://via.placeholder.com/800x400?text=Slide+3',
  // ];
  return (
    <>

      <div className=' w-full bg-white mx-auto lg-px-8' >
        <div className='max-w-7xl mx-auto'>
          <div className='grid sm:grid-cols-2  justify-center'>
            <div className=' sm:px-7 h-[300px] sm:h-[400px] md:mt-8 px-4 mt-2 sm:mt-7 mx-2  mb-0 '>
              <h1 className='mt-8 text-3xl font-bold tracking-tight text-black md:text-3xl lg:text-4xl '>Explore our curated collection of products to elevate your daily life</h1>

              <p className='py-2 md:py- md:text-2xl sm:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, odio?</p>
              <button className='sm:mt-5 mt-3 bg-orange-400 p-2 px-5'><Link to='product'>SHOP NOW </Link></button>
            </div>
            {/* h-[410px] sm:h-[400px] */}
            <div className=' overflow-hidden items-center justify-center mt-2 sm:mt-2 '>

              <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4  justify-center  overflow-x-scroll md:overflow-hidden mx-auto mt-3 gap-2 '>

                {/* <div className='flex md:flex-rows-3 gap-2 md:gap-4'> */}
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

        <HomeProduct />

        <Card2x />

        {/* <section className='bg-slate-200'>
          <div className='flex flex-col sm:flex-row'>
            <div className='sm:w-1/5 w-full bg-slate-800  '>
              first

            </div>
            <div className='sm:4/5 w-full sm:h-[500px] h-[500px]'>
              hii
              <div className=' absolute'></div>
            </div>
          </div>
        </section>

        <section className=' bg-zinc-200'>

          <div class="flex flex-col md:flex-row ">
            <div class="md:w-2/4 w-full bg-blue-500 h-[400px] ">1/4</div>
            <div class="md:w-3/5 w-full bg-green-500  h-[400px]">3/4</div>
          </div>

        </section> */}
        
        
      </div>
      <div className=''>

      <ServiceDetails/>
      </div>
    </>
  )
}

export default Home
