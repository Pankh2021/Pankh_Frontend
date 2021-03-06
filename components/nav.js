import React, { useState, useEffect } from "react";
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router';
import authHelper from '../auth/authHelper';

function Nav() {

  
  const router = useRouter();


  // user instance
  const {user, logOut} = authHelper();

  const handleLogout = ()=>{
    logOut();
    router.push('/dashboard');
  }

  return (

<>
<nav class="flex flex-wrap  items-center justify-between py-4 bg-white border-b">
  <div class=" md:flex  md:items-center items-center">
    <div class="flex justify-between items-center">
    <div className="ml-10"> 
<a href='/Home'> 
<img
style={{maxWidth: '60px' , height: '45px'}}
src='/static/assets(png)/pankh-blue-logo-2-1-1.png'
/>
</a>
</div>
        <div class="lg:flex items-center justify-center lg:ml-20 pt-1">
                <a href="#" class="flex items-center justify-center px-4 text-sm text-gray-700 font-medium font-sans ">
                  Buy
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
                {/* <a href="/rentdrone" class="flex items-center justify-center px-4 text-sm text-gray-700 font-medium font-sans">
                  Rent
                  <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a> */}

                <div class="dropdown inline-block relative">
    <button class="flex items-center justify-center px-4 text-sm text-gray-700 font-medium font-sans"> Rent
      <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
    </button>
    <ul class=" w-48 dropdown-menu absolute hidden text-gray-700 pt-7">
      <li class=""><a href='/rentdrone' class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap">Delhi NCR</a></li>
      <li class=""><a href='/rentdrone' class="bg-white border hover:bg-gray-400 font-sans font-normal text-base py-3 px-4 block whitespace-no-wrap">Lucknow-Kanpur</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href='/rentdrone'>Jaipur</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href='/rentdrone'>Mumbai</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href='/rentdrone'>Indore- Bhopal</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href='/rentdrone'>Chandigarh</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href='/rentdrone'>Bangalore</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href='/rentdrone'>Chennai</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href='/rentdrone'>Hyderabad</a></li>
    </ul>
    </div>
                <span className="flex truncate items-center justify-center px-4 text-sm text-gray-700 font-medium font-sans">
                Drone Pilot
                </span>


                 <div class="dropdown inline-block relative">
    <button class="flex items-center justify-center px-4 text-sm text-gray-700 font-medium font-sans"> Solutions
      <svg class="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
    </button>
    <ul class=" w-52 dropdown-menu absolute hidden text-gray-700 pt-7">
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href="#">Construction</a></li>
      <li class=""><a class="bg-white border hover:bg-gray-400 font-sans font-normal text-base py-3 px-4 block whitespace-no-wrap" href="#">Solar Industry</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href="#">Security & Surveillance</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href="#">Agriculture</a></li>
      <li class=""><a class="bg-white border font-sans font-normal text-base hover:bg-gray-400 py-3 px-4 block whitespace-no-wrap" href="#">Transmission lines and Towers</a></li>
    </ul>
    </div>

    </div>

    <div className="searchbar ml-16">
      <div className="overlap-group border-1px-geyser">
        <span
          className="ellipse"
        >
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 14.6667L10.5802 10.5802M10.5802 10.5802C11.5604 9.59998 12.1667 8.24581 12.1667 6.75004C12.1667 3.7585 9.74154 1.33337 6.75 1.33337C3.75846 1.33337 1.33334 3.7585 1.33334 6.75004C1.33334 9.74158 3.75846 12.1667 6.75 12.1667C8.24577 12.1667 9.59994 11.5604 10.5802 10.5802Z" stroke="#333333" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </span>
        <input className="placeholder-i118929 w-full focus:outline-none"
          type="search" placeholder="Search by brand, category, application"/>
      </div>
      <style jsx>{`
      .searchbar {
        align-items: flex-start;
        display: flex;
        min-width: 475px;
      }
  
      .overlap-group {
        align-items: flex-start;
        background-color: var(--white);
        display: flex;
        height: 48px;
        min-width: 473px;
        padding: 13px 17.0px;
      }
      
      .ellipse {
        height: 16px;
        margin-top: 1.0px;
        width: 16px;
      }
      
      .placeholder-i118929 {
        letter-spacing: 0.25px;
        margin-left: 14px;
        min-height: 18px;
      }
      
      @font-face {
        font-family: "Circular Std-Book";
        font-style: normal;
        font-weight: 400;
        src: url("https://fonts.animaapp.com/CircularStd-Book") format("opentype");
      }
      

      `} </style>
    </div>


      
      {/* render differently according to user state */}
      {user?<a onClick={handleLogout}><Frame2>Logout</Frame2></a>:<a href='/signup'> <Frame2>Register/Sign In </Frame2></a> }
      
      </div>
      </div>
      

</nav>



  </>

  );
}

export default Nav;


function Frame2(props) {
  const { children } = props;

  return (
    <div className="frame-2">
      <button className="text-1 text-base font-sans font-medium text-white">{children}</button>
      <style jsx>{`
      .frame-2 {
        align-items: center;
        background-color: var(--colour-1);
        display: flex;
        height: 48px;
        justify-content: flex-end;
        padding: 0 30px;
        margin-left: 80px;
      }
      
      .text-1 {
        align-items: center;
        letter-spacing: 0.25px;
        min-height: 20px;
        min-width: 123px;
      }
      
      @font-face {
        font-family: "Circular Std-Medium";
        font-style: normal;
        font-weight: 500;
        src: url("https://fonts.animaapp.com/CircularStd-Medium") format("opentype");
      }
      `} </style>
    </div>
  );
}