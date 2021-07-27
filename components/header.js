import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

function Header() {

return (
<>


<header>
    <nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-3 ">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex justify-between items-center">
                    <div class="text-xl font-semibold text-gray-700">
                        <a href="#" class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Explore by</a>
                    </div>

                
                    <div class="flex md:hidden">
                        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>

                <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Brand
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Category
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Application
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Payload
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Endurance
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
               
              </div>
              </div>

    </div>
    </div>
    </nav>

<div>
    <Swiper navigation={true} className="mySwiper">
  <SwiperSlide className='height-200' > <img src="https://assets.kpmg/is/image/kpmg/white-drone-with-lights-flying-in-sky-with-clouds:cq5dam.web.1400.350" ></img> </SwiperSlide>
  <SwiperSlide className='height-200' > <img src="https://assets.kpmg/is/image/kpmg/white-drone-with-lights-flying-in-sky-with-clouds:cq5dam.web.1400.350" ></img> </SwiperSlide>
  <SwiperSlide className='height-200' > <img src="https://assets.kpmg/is/image/kpmg/white-drone-with-lights-flying-in-sky-with-clouds:cq5dam.web.1400.350" ></img> </SwiperSlide>
  <SwiperSlide className='height-200' > <img src="https://assets.kpmg/is/image/kpmg/white-drone-with-lights-flying-in-sky-with-clouds:cq5dam.web.1400.350" ></img> </SwiperSlide>
  </Swiper>
</div>
            
    
</header>

</>
);
}


export default Header;