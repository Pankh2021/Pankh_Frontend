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

<div>

<Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} className="mySwiper">

  <SwiperSlide>
  <div className="hero-content">
      <h1 className="text-1 text-5xl leading-normal font-sans font-medium text-black-900">Drones you will love to buy</h1>
      <div className="text-2 text-lg font-sans font-normal text-gray-500">
        Choose from 30+ variety of best class drones available for easy purchase
      </div>
      <div className="cta-primary">
        <div className="overlap-group">
          <div className="text-3 text-sm font-sans font-medium text-white">SEE ALL DRONES</div>
        </div>
      </div>
    </div>
  <img className="image-1" src={'/static/assets(png)/image-1.png'} alt=""/>


  </SwiperSlide>
  <SwiperSlide>
  <div className="hero-content">
      <h1 className="text-1 text-5xl leading-normal font-sans font-medium text-black-900">Drones service on demand</h1>
      <div className="text-2 text-lg font-sans font-normal text-gray-500">
      Get standardized service quality as per your specific drone requirements
      </div>
      <div className="cta-primary">
        <div className="overlap-group">
          <div className="text-3 text-sm font-sans font-medium text-white">DISCUSS REQUIREMENT</div>
        </div>
      </div>
    </div>
    <img className="image-1" src={'/static/assets(png)/image-2.png'} />
    
  </SwiperSlide>
  <SwiperSlide>
  <div className="hero-content">
      <h1 className="text-1 text-5xl leading-normal font-sans font-medium text-black-900">Earn while you fly drones</h1>
      <div className="text-2 text-lg font-sans font-normal text-gray-500">
      Get registered with pankh and earn as a professional drone pilot
      </div>
      <div className="cta-primary">
        <div className="overlap-group">
          <div className="text-3 text-sm font-sans font-medium text-white">REGISTER AS A DRONE PILOT</div>
        </div>
      </div>
    </div>
    <img className="image-1" src={'/static/assets(png)/image-3.png'} />
    
  </SwiperSlide>
  </Swiper>

  <style jsx>{`
  .image-1 {
    height: 480px;
    display: flex;
    align-items: flex-end;
    object-fit: cover;
    width: 934px;
  }

  .hero-content {
    -webkit-backdrop-filter: blur(60px) brightness(100%);
    align-items: flex-end;
    backdrop-filter: blur(60px) brightness(100%);
    background-color: var(--white-22);
    display: flex;
    flex-direction: column;
    min-height: 420px;
    padding: 60px 58px;
    width: 505px;
  }
  
  .text-1 {
    letter-spacing: 0;
    min-height: 122px;
    width: 387px;
  }
  
  .text-2 {
    letter-spacing: 0.15px;
    margin-top: 16px;
    min-height: 46px;
    width: 387px;
  }
  
  .cta-primary {
    align-items: flex-start;
    display: flex;
    margin-top: 48px;
    min-width: 387px;
  }
  
  .overlap-group {
    align-items: center;
    background-color: var(--colour-1);
    display: flex;
    height: 56px;
    justify-content: flex-end;
    min-width: 385px;
    padding: 0 121.5px;
  }
  
  .text-3 {
    letter-spacing: 0.25px;
    min-height: 20px;
    text-align: center;
    width: 140px;
  }
  
  @font-face {
    font-family: "Circular Std-Medium";
    font-style: normal;
    font-weight: 500;
    src: url("https://fonts.animaapp.com/CircularStd-Medium") format("opentype");
  }
  @font-face {
    font-family: "Circular Std-Book";
    font-style: normal;
    font-weight: 400;
    src: url("https://fonts.animaapp.com/CircularStd-Book") format("opentype");
  }

  `} </style>

</div>

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


