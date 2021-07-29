
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);



function Slide(){

  return (
    <>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">
  <SwiperSlide>
    <div>
    <img src={'/static/images/cor1.png'} />
    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
    <img src={'/static/images/cor2.png'} />
    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div>
    <img src={'/static/images/cor3.png'} />
    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
    </div>
  </SwiperSlide>
  </Swiper>

    </>
  )
}


export default Slide;
  