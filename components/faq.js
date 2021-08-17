import React, {useEffect} from 'react';
import {loadTimelineData} from 'anima-timeline';

function Faq() {
  return (
    <div className="faqs">
      <h1 className="text-1 text-4xl bg-white  justify-between font-sans-serif text-black"> Frequently Asked Questions</h1>
      <div className="i951300-921018 componentcomponent-wrappernot-ready">
        <div className="rectangle-53-x0xZ4Z"></div>
        <div className="text-2-x0xZ4Z">What are the Drones and their different categories?</div>
        <div className="plus-circle-x0xZ4Z">
          <span
            className="vector-eAO0UP"
          >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 28.3333C22.3638 28.3333 28.3333 22.3638 28.3333 15C28.3333 7.63616 22.3638 1.66663 15 1.66663C7.63619 1.66663 1.66666 7.63616 1.66666 15C1.66666 22.3638 7.63619 28.3333 15 28.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </span>
          <span
            className="vector-CGDFiQ"
          >
          <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.66663V12.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </span>
          <span
            className="vector-q2vIll"
          
          >
         <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66666 1H12.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </span>
        </div>
      </div>

      <div className="i951300-921018 componentcomponent-wrappernot-ready mt-4">
        <div className="rectangle-53-x0xZ4Z"></div>
        <div className="text-2-x0xZ4Z">Who can fly drones and is there any rules and regulations for it?</div>
        <div className="plus-circle-x0xZ4Z">
          <span
            className="vector-eAO0UP"
          >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 28.3333C22.3638 28.3333 28.3333 22.3638 28.3333 15C28.3333 7.63616 22.3638 1.66663 15 1.66663C7.63619 1.66663 1.66666 7.63616 1.66666 15C1.66666 22.3638 7.63619 28.3333 15 28.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </span>
          <span
            className="vector-CGDFiQ"
          >
          <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.66663V12.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </span>
          <span
            className="vector-q2vIll"
          
          >
         <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.66666 1H12.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </span>
        </div>
      </div>
      
      <style jsx>{`
      .faqs {
        align-items: center;
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        height: 431px;
        padding: 80px 203px;
        
      }
      
      .text-1 {
        letter-spacing: 0.25px;
        margin-left: 2.0px;
        min-height: 43px;
        text-align: center;
        width: 642px;
      }
      
      .i951300-921018 {
        height: 80px;
        margin-top: 40px;
        opacity: 1;
        position: relative;
        width: 1030px;
      }
      
      .rectangle-53-x0xZ4Z {
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
      
      .text-2-x0xZ4Z {
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
      
      .plus-circle-x0xZ4Z {
        height: 32px;
        left: 938px;
        opacity: 1;
        overflow: hidden;
        position: absolute;
        top: 24px;
        width: 32px;
      }
      
      .vector-eAO0UP {
        height: 30px;
        left: 1px;
        opacity: 1;
        position: absolute;
        top: 1px;
        width: 30px;
      }
      
      .vector-CGDFiQ {
        height: 14px;
        left: 15px;
        opacity: 1;
        position: absolute;
        top: 9px;
        width: 2px;
      }
      
      .vector-q2vIll {
        height: 2px;
        left: 9px;
        opacity: 1;
        position: absolute;
        top: 15px;
        width: 14px;
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
      
      .text-3 {
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
        background-image: url(vector-16.svg);
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

export default Faq;

