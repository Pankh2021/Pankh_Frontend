import React, {useEffect} from 'react';
import {loadTimelineData} from 'anima-timeline';

function Faq() {
  return (
    <FAQS2
      text120=" Frequently Asked Questions"
      text123="Who can fly drones and is there any rules and regulations for it?"
      property1AnswerProps={fAQS2Data.property1AnswerProps}
    />
  );
}

export default Faq;

function FAQS2(props) {
  const { text120, text123, property1AnswerProps } = props;

  return (
    <div className="faqs">
      <h1 className="text-1 circularstd-book-normal-black-34px">{text120}</h1>
      <Property1Answer text34={property1AnswerProps.text34} text35={property1AnswerProps.text35} />
      
      {/* <div className="group-41">
        <div className="overlap-group border-1px-geyser">
          <div className="text-4 circularstd-medium-black-20px">{text123}</div>
          <div className="plus-circle">
            <div className="overlap-group1">
              <img
                className="vector"
                src="vector-5.svg"
              />
              <img
                className="vector-1"
                src="vector-6.svg"
              />
            </div>
          </div>
        </div>
      </div> */}
      <style jsx>{`
      .faqs {
        align-items: center;
        justify-content: center;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        height: 691px;
        padding: 80px 203px;
        position: relative;
        
      }
      
      .text-1 {
        letter-spacing: 0.25px;
        margin-left: 2.0px;
        min-height: 43px;
        text-align: center;
        width: 642px;
      }
      
      .group-41 {
        align-items: flex-start;
        align-self: flex-end;
        display: flex;
        margin-top: 8px;
        min-width: 1032px;
      }
      
      .overlap-group {
        align-items: flex-start;
        background-color: var(--white);
        display: flex;
        height: 80px;
        min-width: 1030px;
        padding: 23px 59px;
      }
      
      .text-4 {
        align-self: center;
        letter-spacing: 0.15px;
        margin-bottom: 1.0px;
        min-height: 25px;
        min-width: 593px;
      }
      
      .plus-circle {
        align-items: flex-end;
        display: flex;
        height: 32px;
        margin-left: 285px;
        padding: 1.0px;
        width: 32px;
      }
      
      .overlap-group1 {
        background-image: url();
        background-size: 100% 100%;
        height: 30px;
        margin-left: 1px;
        position: relative;
        width: 30px;
      }
      
      .vector {
        height: 14px;
        left: 14px;
        position: absolute;
        top: 8px;
        width: 2px;
      }
      
      .vector-1 {
        height: 2px;
        left: 8px;
        position: absolute;
        top: 14px;
        width: 14px;
      }
      
      
      `} </style>
    </div>
  );
}


function Property1Answer(props) {
  const { text34, text35 } = props;

  useEffect(() => {
    loadTimelineData(x1201166TimelineData);
  }, []);

  return (
    <div className="x1201166 componentcomponent-wrappernot-ready">
      <div className="group-44-ydV4lV">
        <div className="rectangle-53-Ozyyij"></div>
        <div className="text-2-Ozyyij">{text34}</div>
      </div>
      <div className="group-45-ydV4lV">
        <div className="rectangle-54-5JrTPp"></div>
        <div className="text-3-5JrTPp">{text35}</div>
        <div className="plus-circle-5JrTPp">
          <img className="vector-fRTMhd" src="" />
          <img
            className="vector-zBduk9"
            src="vector-6.svg"
          />
        </div>
      </div>
      <style jsx>{`
      .x1201166 {
        height: 340px;
        margin-top: 40px;
        opacity: 1;
        position: relative;
        width: 1030px;
      }
      
      .group-44-ydV4lV {
        height: 252px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 88px;
        width: 1032px;
      }
      
      .rectangle-53-Ozyyij {
        background-color: 
      #1687a7;
        border: 1px solid 
      #d3e0ea;
        height: 252px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
        width: 1030px;
      }
      
      .text-2-Ozyyij {
        color: 
      #ffffff;
        font-family: 'Circular Std-Book', Helvetica;
        font-size: 18px;
        left: 60px;
        letter-spacing: 0.15px;
        opacity: 1;
        position: absolute;
        top: 28px;
        width: 912px;
      }
      
      .group-45-ydV4lV {
        height: 80px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
        width: 1032px;
      }
      
      .rectangle-54-5JrTPp {
        background-color: 
      #ffffff;
        border: 1px solid 
      #d3e0ea;
        height: 80px;
        left: 0;
        opacity: 1;
        position: absolute;
        top: 0;
        width: 1030px;
      }
      
      .text-3-5JrTPp {
        color: 
      #000000;
        font-family: 'Circular Std-Medium', Helvetica;
        font-size: 20px;
        font-weight: 500;
        left: 60px;
        letter-spacing: 0.15px;
        opacity: 1;
        position: absolute;
        top: 28px;
      }
      
      .plus-circle-5JrTPp {
        height: 32px;
        left: 938px;
        opacity: 1;
        overflow: hidden;
        position: absolute;
        top: 24px;
        width: 32px;
      }
      
      .vector-fRTMhd {
        height: 30px;
        left: 1px;
        opacity: 1;
        position: absolute;
        top: 1px;
        width: 30px;
      }
      
      .vector-zBduk9 {
        height: 2px;
        left: 9px;
        opacity: 1;
        position: absolute;
        top: 15px;
        width: 14px;
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
      .component-wrapper a {
        display: contents;
        pointer-events: auto;
        text-decoration: none;
      }
      
      .component-wrapper * {
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        pointer-events: none;
      }
      
      .component-wrapper a *,
      .component-wrapper input,
      .component-wrapper video,
      .component-wrapper iframe {
        pointer-events: auto;
      }
      
      .component-wrapper.not-ready,
      .component-wrapper.not-ready * {
        visibility: hidden !important;
      }
      
      .listeners-active,
      .listeners-active * {
        pointer-events: auto;
      }
      
      .hidden,
      .hidden * {
        pointer-events: none;
        visibility: hidden;
      }
      `} </style>
    </div>
  );
}

const x1201166TimelineData = [
  {
    initial_state_name: "Property-1=Answer",
    root_element: ".x1201166",
    states_flow: {
      "Property-1=Answer": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Default": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Hover": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

const property1AnswerData = {
    text34: <>Drones are unmanned aerial vehicles which could be automated or command controlled by drone pilots to carry out aerial flights for varying needs. Drones are categorized by Ministry of Civil Aviation in 5 different categories depending on their maximum all –up weight which includes the weight of payloads as well:<br />Nana Drones: Weighing less than 250gm<br />Micro Drones: Weighing more than 250gm but less than 2.5kg<br />Small Drones: Weight greater than 2.5kg but less than 25kg<br />Medium Drones: Weight greater than 25kg but less than 150kg<br />Large Drone: Weight greater than 150kg</>,
    text35: "What are the Drones and their different categories?",
};

const fAQS2Data = {
    property1AnswerProps: property1AnswerData,
};
