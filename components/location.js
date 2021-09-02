import React, { useRef } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'

function Location(){

  const ref = useRef(null)

  const scroll = (scrollOffset) => {
  ref.current.scrollLeft += scrollOffset;
};
    return (
        <>
<div className=' justify-center items-center bg-white'>
<h1 className="text-center text-4xl bg-white p-10 justify-between font-sans-serif text-black">Search Drones by City</h1>
<div className="group-38 flex flex-start overflow-x-scroll hide-scroll-bar mx-40" >
<HorizontalScroll>

      <div className="group-3">
      <div className='group border-1px-geyser' >
        <img class='svg' src="/static/assets(svg)/DelhiNCR.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Delhi-NCR</div>
      </div>
      <div className="group-3">
        <div className='group border-1px-geyser' >
          <img class='svg' src="/static/assets(svg)/Lucknow-Kanpur.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Lucknow-Kanpur</div>
      </div>
      <div className="group-3">
      <div className='group border-1px-geyser' >
          <img className='svg' src="/static/assets(svg)/Jaipur.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Jaipur</div>
      </div>
      <div className="group-3">
      <div className='group border-1px-geyser' >
          <img className='svg' src="/static/assets(svg)/Mumbai.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Mumbai</div>
      </div>
      <div className="group-3">
      <div className='group border-1px-geyser' >
          <img className='svg' src="/static/assets(svg)/Indore-Bhopal.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Indore-Bhopal</div>
      </div>
      <div className="group-3">
      <div className='group border-1px-geyser' >
          <img className='svg' src="/static/assets(svg)/Chandigarh.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Chandigarh</div>
      </div>
     
     <div className="group-3">
     <div className='group border-1px-geyser' >
          <img className='svg' src="/static/assets(svg)/Chennai.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Chennai</div>
      </div>
      <div className="group-3">
      <div className='group border-1px-geyser' >
          <img className='svg' src="/static/assets(svg)/Hyderabad.svg" />  
        </div>
        <div className="text-base font-medium mt-2 text-black">Hyderabad</div>
      </div>
      
</HorizontalScroll>
   
  </div>
    

      <style jsx>{`
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
.right {
  float: right;
}

.left {
  float: left;
}

group-22 {
  
  left: 253px;
  position: absolute;
  width: 76px;
}
.group-38 {
  align-items: flex-start;
  justify-content: center;
  display: flex;
  height: 188px;
  min-width: 920px;
  overflow-x: scroll;
}
      
      .group-33 {
        align-items: flex-start;
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
        position: relative;
        
      }
      .group {
        align-items: flex-start;
        background-color: var(--white);
        display: flex;
        margin-right: 2.0px;
        min-width: 160px;
        padding: 4px 12px;
      }
      img.svg:hover {
        fill: #fff;
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
    )
}


function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <div disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <img src='/static/assets(png)/left.png' />
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <div disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <img src='/static/assets(png)/Right.png' />
    </div>
  );
}

export default Location;