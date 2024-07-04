import React from 'react'
import LatestProductCard from './LatestProductCard'
import Carousel from '../Carousel'

function HomeProduct() {
  return (
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">

        <h2 class="mt-6 md:mt-4 text-3xl font-bold leading-tight text-blue sm:text-4xl lg:text-3xl">
          Our latest product
        </h2>
        <p class="mt-4 text-base leading-relaxed text-gray-600">
          Check out our newest arrivals now and enjoy top-notch products without breaking the bank. Shop today and save big!
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {/* Here add new card  */}
        <div className='sm:p-2  mb-4 py-4 md:mt-9 justify-center md:pt-20' >
          <LatestProductCard />
        </div>
        <div className='sm:p-2  mb-4 py-4 md:mt-9'>
          <Carousel />
        </div>

      </div>

    </div>

  )
}

export default HomeProduct
