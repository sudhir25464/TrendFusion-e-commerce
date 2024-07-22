import React from 'react'

function ServiceDetails() {
  return (
    <>
      
    
    <div className='flex max-w-7xl  mx-auto justify-center justify-items-center mb-4 '>
      <div class=" mt-1   sm:px-3 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div className='alert-card  py-5 px-2'>
          <div class="mx-auto flex h-20 w-20  items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-9 w-9 text-gray-700"
            >
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
          <p class="mt-4 text-sm text-gray-600">
          Experience peace of mind with our secured payment options, ensuring your transactions are safe and protected. Shop confidently with robust encryption and fraud prevention measures.
          </p>
        </div>
        <div className='alert-card  py-5 px-2'>
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-9 w-9 text-gray-700"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">
            Fast &amp; Easy to Load
          </h3>
          <p class="mt-4 text-sm text-gray-600">
          Quickly refine your search with our lightning-fast filter blocks, ensuring you find exactly what you need in no time
          </p>
        </div>
        <div className='alert-card  py-5 px-2'>
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-9 w-9 text-gray-700"
            >
              <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">
            Light &amp; Dark Version
          </h3>
          <p class="mt-4 text-sm text-gray-600">
          Effortlessly refine your search with our dynamic filter blocks, ensuring you find exactly what you need. Enjoy a seamless and efficient shopping experience
          </p>
        </div>
        <div className='alert-card  py-5 px-2'>
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-9 w-9 text-gray-700"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </div>
          <h3 class="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
          <p class="mt-4 text-sm text-gray-600 h-40">
          Discover and shop with ease using our dynamic filter blocks, designed to refine your search and find exactly what you're looking for. Enjoy a seamless browsing experience with real-time updates and precise results tailored to your preferences.
          </p>
        </div>
      </div> 
      </div>
    </>
  )
}

export default ServiceDetails
