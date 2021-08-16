import React from 'react';

function Registerpilot(){
    return(
        <>
        <Frame8
      image11="/static/assets(png)/image-11-1.png"
      text25="Are you a Drone Pilot?"
      text24="Register with us as a drone pilot and get the opportunity to earn while flying drones!"
      frame2Props={frame8Data.frame2Props}
    />
        </>
    )
}

export default Registerpilot;


function Frame8(props) {
    const { image11, text25, text24, frame2Props } = props;
  
    return (
    <div className=' pilot bg-white p-20 justify-between items-center'>
      <div className="frame-8">
        <img className="image-11" src={image11} />
        <div className="group-28">
          <h1 className="text-2 text-4xl font-sans font-medium text-black-900">{text25}</h1>
          <div className="text-1 text-lg font-sans font-normal text-gray-400">{text24}</div>
          <Frame2>{frame2Props.children}</Frame2>
        </div>
        </div>
        <style jsx>{`

        .pilot {
          justify-content: center;
          display: flex;
        }

        .frame-8 {
            align-items: center;
            background-color: var(--cultured-pearl);
            display: flex;
            width: 1240px;
        }
        
        .image-11 {
            height: 313px;
            object-fit: cover;
            width: 505px;
        }
        
        .group-28 {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-left: 105px;
            min-height: 185px;
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
            min-height: 46px;
            width: 552px;
        }
        
        `} </style>
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
            margin-top: 32px;
            min-width: 166px;
            padding: 0 30px;
          }
          
          .register-sign-in-i11 {
            letter-spacing: 0.25px;
            min-height: 20px;
            min-width: 104px;
          }
        `} </style>
      </div>
    );
  }
  
  const frame2Data = {
      children: "Register Now",
  };
  
  const frame8Data = {
      frame2Props: frame2Data,
  };