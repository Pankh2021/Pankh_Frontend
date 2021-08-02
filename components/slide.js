
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
  <div class="container mx-auto h-84 relative">
  <img src={'/static/images/1.png'} alt="" class="w-full h-96  "/>
  <button class="bg-white absolute bottom-32 left-7 rounded-lg p-4">See all drones</button>
</div>

  </SwiperSlide>
  <SwiperSlide>
    <div class='w-full bg-cover bg-center' >
    <img src={'/static/images/2.jpg'} />
    <button class="bg-white absolute bottom-6 left-5 rounded-lg p-4">Type your Requirements</button>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class='w-full bg-cover bg-center' >
    <img src={'/static/images/3.jpg'} />
    <button class="bg-white absolute bottom-32 left-5 rounded-lg p-4">Register if you are a Drone pilot</button>
    </div>
  </SwiperSlide>
  </Swiper>

    </>
  )
}


export default Slide;
  