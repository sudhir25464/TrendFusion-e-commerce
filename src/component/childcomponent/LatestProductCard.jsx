import React from 'react'

function LatestProductCard() {
    return (
        <div class="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
            <div class="h-full w-full md:h-[200px] md:w-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                    alt="Laptop"
                    class="h-full w-full rounded-md object-cover"
                />
            </div>
            <div>
                <div class="p-4">
                    <h1 class="inline-flex items-center text-lg font-semibold">
                        About Macbook{" "}
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
                            class="ml-2 h-4 w-4"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </h1>
                    <p class="mt-3 text-sm text-gray-600">
                        Processor: Apple M2 Pro / M2 Max Chip
                        RAM: 16GB / 32GB / 64GB
                        Storage: 512GB / 1TB / 2TB / 4TB SSD
                        Price: Starting at $1,999
                    </p>
                    <div class="mt-4">
                        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Macbook
                        </span>
                        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Apple
                        </span>
                        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            #Laptop
                        </span>
                        <span class="mb-2 mr-2 inline-block rounded-full bg-cyan-200 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            read -more
                        </span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default LatestProductCard
