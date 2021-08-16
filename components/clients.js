import React from 'react';
import Image from 'next/image'

function Client(){

    return(
        <>

<div className="bg-white">
<div className="group-43">
      <h1 className="text-1 text-4xl bg-white  justify-between font-sans text-black">Our Clients</h1>
      <div className="group-39">
        <img
          className="image-13"
          src="/static/assets(png)/image-13.png"
        />
        <img
          className="image-14"
          src="/static/assets(png)/image-14.png"
          />
        <img
          className="image-15"
          src="/static/assets(png)/image-15.png"
        />
        <img
          className="image-16"
          src="/static/assets(png)/image-16.png"
          />
        <img
          className="image-17"
          src="/static/assets(png)/image-17.png"
          />
      </div>

      <style jsx>{`
      .group-43 {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 256px;
        width: 1580px;
      }
      
      .text-1 {
        letter-spacing: 0.25px;
        margin-left: 2.0px;
        min-height: 43px;
        text-align: center;
        width: 402px;
      }
      
      .group-39 {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        margin-top: 40px;
        min-width: 1030px;
      }
      
      .image-13 {
        height: 173px;
        object-fit: cover;
        width: 136px;
      }
      
      .image-14 {
        height: 98px;
        margin-left: 79px;
        margin-top: 1.0px;
        object-fit: cover;
        width: 152px;
      }
      
      .image-15 {
        height: 34px;
        margin-left: 79px;
        margin-top: 1.0px;
        object-fit: cover;
        width: 126px;
      }
      
      .image-16 {
        height: 140px;
        margin-left: 79px;
        margin-top: 1.0px;
        object-fit: cover;
        width: 140px;
      }
      
      .image-17 {
        height: 142px;
        margin-left: 79px;
        margin-top: 1.0px;
        object-fit: cover;
        width: 158px;
      }
      
      @font-face {
        font-family: "Circular Std-Book";
        font-style: normal;
        font-weight: 400;
        src: url("https://fonts.animaapp.com/CircularStd-Book") format("opentype");
      }
      `} </style>
    </div>
  </div>
        </>
    )
}


export default Client;