import React from 'react';

function Footer (){

return (
    <>

<div class="container items-center ">
            <footer class="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
              <div class="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
                <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                  <div class="pr-2 lg:pr-8 lg:px-6">
                    <a href="/" class=" focus:outline-none">
                      <div class="inline-flex items-center">
                        <img style={{maxWidth: '70%' , height: 'auto'}} src={"/static/images/logo.png"} />
                      </div>
                      <div class="inline-flex items-center">
                        <img style={{maxWidth: '100%' , height: 'auto'}} src={"/static/images/startup.png"} />
                      </div>

                    </a>
                  </div>
                </div>
                <div class="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
                  <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Product </h1>
                    <nav class="mb-10 space-y-4 list-none">
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones by brands</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones by category</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones by application</a>
                      </li>
                    </nav>
                  </div>
                  <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Services </h1>
                    <nav class="mb-10 space-y-4 list-none">
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones for Utilities</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones for Agriculture</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones for Survey & Mapping</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones for Recreation</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Drones for Security & Surveillance</a>
                      </li>
                    </nav>
                  </div>

                  <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Company </h1>
                    <nav class="mb-10 space-y-4 list-none">
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">About Us</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Careers</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Blog</a>
                      </li>
                      <li>
                        <a class="mr-1 text-sm font-medium text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Contact Us</a>
                      </li>
                    </nav>
                  </div>
                  <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Get updates </h1>
                    <nav class="mb-10">
                    <form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div class=" relative ">
                    <input type="text" id="&quot;form-subscribe-Subscribe" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                    </div>
                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Subscribe
                    </button>
                </form>

                    </nav>
                  </div>
                </div>
              </div>
              <div class="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
                <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
                  <p class="text-sm text-center text-black sm:text-left ">© 2021 </p>
                  <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a class="text-blue-500 hover:text-black">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500 hover:text-black">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                        </path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500 hover:text-black">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500 hover:text-black" href="https://www.linkedin.com/company/pankhtechnology/" >
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                        </path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </footer>
          </div>

</>
);
}

export default Footer;