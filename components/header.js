import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination,Navigation]);


function Header() {

return (
<>

<Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper">

  <SwiperSlide>
  <div class="w-full bg-cover bg-center relative">
  <img src={'/static/images/1.png'} alt="" class="w-full h-96  "/>
  <button class="bg-white absolute bottom-32 left-7 rounded-lg p-3">See all drones</button>
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
);
}


export default Header;

function Rectangle51() {
  return <div className="rectangle-51">
    <style jsx>{`
          .rectangle-51 {
            background-color: var(--cultured-pearl);
            height: 590px;
            left: 2492px;
            position: absolute;
            top: 0;
            width: 964px;
          }
    `} </style>
  </div>;
}


