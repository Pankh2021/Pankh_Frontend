import React from 'react';


function Daas(){

    return (
        <>
<Frame7
      text23="Drones as a Service (DaaS)"
      text22="Buying drones is a costly affair and to manage drone operations is a task. With Pankh renting drones is easy just type in your requirement and we are there to assist you with our transparent pricing and standardized service quality"
      image11="/static/assets(png)/image-11.png"
      frame2Props={frame7Data.frame2Props}
      />
        </>
    )
  }
  
export default Daas;

function Frame7(props) {
  const { text23, text22, image11, frame2Props } = props;

  return (
    <div className=" daas bg-white justify-between p-20 items-center">
    <div className="frame-7">
      <div className="group-28">
        <h1 className="text-2 text-4xl font-sans-serif font-medium text-black-900">{text23}</h1>
        <div className="text-1 text-lg font-sans-serif font-normal text-gray-400">{text22}</div>
        <Frame2>{frame2Props.children}</Frame2>
      </div>
      <img className="image-11" src={image11} />
      </div>
      <style jsx>{`
      .daas {
        justify-content: center;
        display: flex;
      }

      .frame-7 {
        align-items: center;
        background-color: var(--cultured-pearl);
        justify-content: center;
        display: flex;
        width: 1240px;
      }
      
      .group-28 {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin-left: 60px;
        min-height: 223px;
        position: relative;
        width: 554px;
      }
      
      .text-2 {
        letter-spacing: 0.25px;
        min-height: 43px;
        width: 552px;
      }
      
      .text-1 {
        letter-spacing: 0.15px;
        margin-top: 16px;
        min-height: 92px;
        width: 552px;
      }
      
      .image-11 {
        height: 351px;
        margin-left: 121px;
        width: 505px;
      }
    
      `}
      </style>
  </div>
  );
}


function Frame2(props) {
  const { children } = props;

  return (
    <div className="frame-2">
      <button className="register-sign-in-i11 text-sm font-sans font-medium text-white">{children}</button>
      <style jsx>{`
          .frame-2 {
            align-items: center;
            background-color: var(--colour-1);
            display: flex;
            height: 48px;
            justify-content: flex-end;
            margin-top: 24px;
            min-width: 189px;
            padding: 0 30px;
          }
      .register-sign-in-i11 {
        letter-spacing: 0.25px;
        min-height: 20px;
        min-width: 127px;
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

const frame2Data = {
    children: "Discuss Requirements",
};

const frame7Data = {
    frame2Props: frame2Data,
};