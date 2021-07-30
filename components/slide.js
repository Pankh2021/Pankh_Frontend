
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
  <button class="bg-red-300 absolute top-1/4 left-1/4 rounded-lg p-4">div</button>
</div>

  </SwiperSlide>
  <SwiperSlide>
    <div class='w-full bg-cover bg-center' >
    <img src={'/static/images/2.jpg'} />
    <button class="bg-red-300 absolute top-1/4 left-1/4 rounded-lg p-4">div</button>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class='w-full bg-cover bg-center' >
    <img src={'/static/images/3.jpg'} />
    <button class="bg-red-300 absolute top-1/4 left-1/4 rounded-lg p-4">div</button>
    </div>
  </SwiperSlide>
  </Swiper>

    </>
  )
}


export default Slide;
  