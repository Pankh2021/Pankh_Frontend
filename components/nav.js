import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { Transition } from "@headlessui/react";
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/authuserprovider';

function Nav() {

  const { authUser, loading ,signOut} = useAuth();
  const router = useRouter();

  async function signup(){
    
    router.push('/signup')
  }

  useEffect(() => {
    if (!loading && !authUser)
      router.push('/Index')
  }, [authUser, loading])

  const [isOpen, setIsOpen] = useState(false);
  return (

<>

<nav class="bg-white shadow">
  <div class="container mx-auto px-6 py-0 md:flex md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">
        <div className="flex-shrink-0">
          <img
            style={{maxWidth: '40%' , height: 'auto'}}
            src='https://photos.angel.co/startups/i/8408371-b4302661bffc9f14c75058c88d1cbf72-medium_jpg.jpg?buster=1625502223'
                  
          />
        </div>
        </a>
      </div>

      <div class="dropdown inline-block relative">
    <button class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 inline-flex">
      <span class="">Search city</span>
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

  <div class="flex items-center justify-center bg-gray-200">
  <form >
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name='q' class="py-4 ml-10 mr-20 w-full text-sm text-white bg-gray-200  pl-10 focus:outline-none focus:text-gray-900" placeholder="Search by brand,category, application, etc...."  />
    </div>
  </form>
</div>
    
    <div class="md:flex items-center">
      <div class="flex flex-col md:flex-row md:mx-6">
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Buy Drones</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Rent Drones</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Blog</a>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">More</a>
      </div>

      
      {!authUser && <button type="button" onClick={signup} class="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white font-normal py-2 px-4 rounded">Hello! Login/Signup</button>}
      
      {authUser && <button type="button" onClick={signOut} class="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white font-normal py-2 px-4 rounded">Logout</button>}
    </div>
  </div>
</nav>



  </>

  );
}

export default Nav;