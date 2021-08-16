import React from 'react';

function Drones(){
    return(
        <>
        <Group27
      text8="Most Popular Drones"
      text21="Explore All"
      group23Props={group27Data.group23Props}
      group232Props={group27Data.group232Props}
      group233Props={group27Data.group233Props}
      group234Props={group27Data.group234Props}
    />
        </>
    )
}

export default Drones;

function Group27(props) {
    const { text8, text21, group23Props, group232Props, group233Props, group234Props } = props;
  
    return (
    <div className="bg-white p-20">
      <div className="group-27">
        <div className="flex-col">
          <h1 className="text-1 text-3xl font-sans font-medium text-black-900">{text8}</h1>
          <Group23
            image={group23Props.image}
            text9={group23Props.text9}
            text10={group23Props.text10}
            text11={group23Props.text11}
          />
        </div>
        <Group23
          image={group232Props.image}
          text9={group232Props.text9}
          text10={group232Props.text10}
          text11={group232Props.text11}
          className={group232Props.className}
        />
        <Group23
          image={group233Props.image}
          text9={group233Props.text9}
          text10={group233Props.text10}
          text11={group233Props.text11}
          className={group233Props.className}
        />
        <div className="flex-col-1">
          <div className="text-14 text-xl font-sans font-medium text-black-900">{text21}</div>
          <div className="overlap-group">
            <Group23
              image={group234Props.image}
              text9={group234Props.text9}
              text10={group234Props.text10}
              text11={group234Props.text11}
              className={group234Props.className}
            />
            <span
              className="group-22"
            >
            <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="38" cy="34" r="24" fill="#1687A7"/>
<path d="M35.0001 27L42.0001 34L35.0001 41" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="7"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

            </span>
          </div>
        </div>
        <style jsx>{`
        .group-27 {
            align-items: flex-end;
            justify-content: center;
            display: flex;
            height: 321px;
            min-width: 1240px;
            
          }
          
          .flex-col {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            min-height: 321px;
            position: relative;
            width: 295px;
          }
          
          .text-1 {
            letter-spacing: 0;
            min-height: 30px;
          }
          
          .flex-col-1 {
            align-items: flex-end;
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            min-height: 311px;
            width: 329px;
          }
          
          .text-14 {
            letter-spacing: 0.25px;
            margin-right: 32px;
            min-height: 20px;
            min-width: 84px;
          }
          
          .overlap-group {
            height: 267px;
            margin-top: 24px;
            position: relative;
            width: 329px;
          }
          
          .group-22 {
            height: 76px;
            left: 253px;
            position: absolute;
            top: 100px;
            width: 76px;
          }
        `} </style>
      </div>
      </div>
    );
  }
  
  
  function Group23(props) {
    const { image, text9, text10, text11, className } = props;
  
    return (
      <div className={`group-23 ${className || ""}`}>
        <div className="overlap-group-1">
          <img className="image" src={image} />
          <div className="text text-lg font-sans font-medium text-black-900">{text9}</div>
          <div className="text-2 text-sm font-sans font-medium text-black-900">{text10}</div>
          <div className="text-3 text-sm font-sans font-medium text-gray-600">{text11}</div>
          <div className="holder border-1px-geyser"></div>
        </div>
        <style jsx>{`
        .group-23 {
            align-items: flex-start;
            display: flex;
            margin-top: 24px;
            min-width: 295px;
          }
          
          .overlap-group-1 {
            height: 267px;
            position: relative;
            width: 295px;
          }
          
          .image {
            height: 200px;
            left: 0;
            object-fit: cover;
            position: absolute;
            top: 0;
            width: 295px;
          }
          
          .text {
            left: 12px;
            letter-spacing: 0.15px;
            position: absolute;
            top: 208px;
          }
          
          .text-2 {
            left: 12px;
            letter-spacing: 0.25px;
            position: absolute;
            top: 235px;
          }
          
          .text-3 {
            left: 100px;
            letter-spacing: 0.25px;
            position: absolute;
            text-decoration: line-through;
            top: 235px;
          }
          
          .holder {
            height: 267px;
            left: 0;
            position: absolute;
            top: 0;
            width: 295px;
          }
          
          .group-23.group-2 {
            margin-left: 20px;
            margin-top: unset;
          }
          
          .group-23.group-26 {
            height: 267px;
            left: 0;
            margin-top: unset;
            min-width: unset;
            position: absolute;
            top: 0;
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
    );
  }
  
  const group23Data = {
      image: "/static/assets(png)/image.png",
      text9: "Drone Name- Lorem Ipsum",
      text10: "₹4,490.00",
      text11: "₹5,590.00",
  };
  
  const group232Data = {
      image: "/static/assets(png)/image-6.png",
      text9: "Drone Name- Lorem Ipsum",
      text10: "₹4,490.00",
      text11: "₹5,590.00",
      className: "group-2",
  };
  
  const group233Data = {
      image: "/static/assets(png)/image-7.png",
      text9: "Drone Name- Lorem Ipsum",
      text10: "₹4,490.00",
      text11: "₹5,590.00",
      className: "group-2",
  };
  
  const group234Data = {
      image: "/static/assets(png)/image-8.png",
      text9: "Drone Name- Lorem Ipsum",
      text10: "₹4,490.00",
      text11: "₹5,590.00",
      className: "group-26",
  };
  
  const group27Data = {
      group23Props: group23Data,
      group232Props: group232Data,
      group233Props: group233Data,
      group234Props: group234Data,
  };