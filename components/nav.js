import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import 'tailwindcss/tailwind.css'
import logo from '../images/logo.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (

<>

<nav class="bg-white shadow">
  <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">
        <div className="flex-shrink-0">
          <img
            style={{maxWidth: '100%' , height: 'auto'}}
            src='https://photos.angel.co/startups/i/8408371-b4302661bffc9f14c75058c88d1cbf72-medium_jpg.jpg?buster=1625502223'
                  
          />
        </div>
        </a>
      </div>

      <div class="dropdown inline-block relative">
    <button class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 inline-flex">
      <span class="">Buy Drones</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
    </ul>
    </div>


  
      <div class="flex md:hidden">
        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
  <input type="search" name="search" id="search" placeholder="Search by brand, category, application, etc "
         class="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
  <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
         viewBox="0 0 24 24" class="w-6 h-6">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </button>
</div>
    
    <div class="md:flex items-center">
      <div class="flex flex-col md:flex-row md:mx-6">
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Home</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Shop</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Contact</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">About</a>
      </div>

      <div class="flex justify-center md:block">
      <button class="mt-3 px-7 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Login</button>
      </div>
    </div>
  </div>
</nav>

{/* 
    <div class="dropdown inline-block relative">
    <button class="hover:bg-gray-700 hover:text-white text-black px-4 py-2 mt-4 rounded-md text-sm font-medium inline-flex">
      <span class="">Buy Drones</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
    </ul>
    </div> */}

  </>

  );
}

export default Nav;