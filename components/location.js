import React from 'react';

function Location(){
    return (
        <>
<div className='location justify-center items-center bg-white'>
<h1 className="text-center text-4xl bg-white p-10 justify-between font-sans-serif text-black">Search Drones by City</h1>
<div className="group-38 ">
      <div className="group-33">
        <Group29 src="/static/assets(png)/image-12.png" />
        <div className="text-base font-medium mt-2 text-black">Delhi-NCR</div>
      </div>
      <div className="group-3">
        <Group29 src="/static/assets(png)/image-12.png" />
        <div className="text-base font-medium mt-2 text-black">Lucknow-Kanpur</div>
      </div>
      <div className="group-3">
        <Group29 src="/static/assets(png)/image-12.png" />
        <div className="text-base font-medium mt-2 text-black">Jaipur</div>
      </div>
      <div className="group-3">
        <Group29 src="/static/assets(png)/image-12.png" />
        <div className="text-base font-medium mt-2 text-black">Mumbai</div>
      </div>
      <div className="group-3">
        <Group29 src="/static/assets(png)/image-12.png" />
        <div className="text-base font-medium mt-2 text-black">Chandigarh</div>
      </div>
      <style jsx>{`
   
      .group-38 {
        align-items: flex-start;
        justify-content: center;
        display: flex;
        height: 188px;
        min-width: 920px;
      }
      
      .group-33 {
        align-items: center;
        display: flex;
        flex-direction: column;
        min-height: 188px;
        position: relative;
        width: 162px;
      }
      
      .text {
        letter-spacing: 0.25px;
        margin-top: 8px;
        min-height: 20px;
        min-width: 82px;
      }

      .group-3 {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-left: 28px;
        min-height: 188px;
        position: relative;
        width: 162px;
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

export default Location;

function Group29(props) {
    const { src } = props;
  
    return (
      <div className="group border-1px-geyser">
        <img className="image-12" src={src} />
    <style jsx>{`
       .group {
        align-items: flex-start;
        background-color: var(--white);
        display: flex;
        height: 160px;
        margin-right: 2.0px;
        min-width: 160px;
        padding: 4.0px 12.0px;
      }

      .image-12 {
        height: 134px;
        object-fit: cover;
        width: 134px;
      }
      
    `}</style>
      </div>
    );
  }