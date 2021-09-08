import React from 'react';
import Faq from '../components/faq';
import Footerr from '../components/footer';
import Nav from '../components/nav';

function rentdrone(){

    return(
        <>
        <div className='overflow-hidden'>
        <Nav />
        <div class="container flex flex-col justify-center items-center mx-auto ">
        <div class="bg-gray-300 h-72 w-full rounded-lg shadow-md bg-cover bg-center">
            <img src='/static/assets(png)/Headerimage.png' />
        </div>

        <div class="shadow-md mt-6 overflow-hidden backdrop-filter backdrop-blur-xl bg-opacity-60">
            <div class="items-center justify-between py-10 px-10 bg-white shadow-2xl  mx-auto text-center overflow-hidden backdrop-filter backdrop-blur-xl bg-opacity-60">
                <div class="px-2 -mt-6">
                    <div class="text-center">
                        <h1 class="font-normal text-3xl text-grey-800 font-medium leading-loose my-3 w-full">Get the
                            Latest Information</h1>
                        <div class="w-full text-center">
                            <form action="#">

<div class="group inline-block px-4 ">
  <button class="outline-none focus:outline-none border px-14 py-3 bg-white border-gray-900 flex min-w-32">
    <span class="font-semibold flex-1">Location</span>
    <span>
      <svg
        class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
  >
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
  </ul>
</div>

<div class="group inline-block px-4">
  <button class="outline-none focus:outline-none border px-14 py-3 bg-white border-gray-900 flex min-w-32">
    <span class="pr-1 font-semibold flex-1">Application</span>
    <span>
      <svg
        class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
  >
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
  </ul>
</div>

<div class="group inline-block px-4">
  <button class="outline-none focus:outline-none border px-14 py-3 bg-white border-gray-900 flex min-w-32">
    <span class="pr-1 font-semibold flex-1">Date</span>
    <span>
      <svg
        class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </span>
  </button>
  <ul
    class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
  >
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
    <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
  </ul>
</div>

<div class=" relative inline-block px-4">
    <input type="text" class=" flex-1 appearance-none border border-gray-900 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="No. of days"/>
</div>

<div class=" relative inline-block px-4">
    <input type="text" class=" flex-1 appearance-none border border-gray-900 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Area"/>
</div>


                            </form>
                        </div>

                        <div className="flex flex-center mx-auto w-48 mb-5 mt-6 items-center justify-center">
                            <button type='submit' class=" w-full text-base items-center justify-center py-3 font-sans-serif font-medium text-white" style={{backgroundColor: 'var(--colour-1)'}}>GET QUOTE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
  li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) }
  li > button svg       { transform: rotate(-90deg) }
  li:hover > button svg { transform: rotate(-270deg) }

  .group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
  `}
</style>

    </div>

<div class="container mx-auto mt-10 bg-white py-10 items-center justify-between">
<div className='flex flex-col mx-auto mt-10 justify-between items-center'>
        <h1 className="flex text-4xl bg-white font-sans-serif text-black"> Get drone for all your needs</h1>
      </div>

<div class="flex justify-center items-center mt-4 bg-white py-10 mx-10 px-20">

<div class="container ">
    <div class="w-11/12 bg-white ">
      <div class="h-20 bg-green-100 border shadow-lg flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <img class="mx-4" src="/static/assets(svg)/bill1.svg" alt="sara" />
        <h2 class="text-gray-800 font-medium font-sans text-lg cursor-pointer">Get Instant Quotes</h2>
      </div>
      </div>
      <div class="flex justify-center items-center shadow-lg border px-5 pt-6 mt-2 py-6 text-xl font-sans font-medium text-gray-600">
        <p className='items-center justify-between'>Get instant outline quotes<br/>
          with few details about your<br/>
          requiremants </p>
      </div>
    </div>
  </div>

  <div class="container ">
    <div class="w-11/12 bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div class="h-20 bg-yellow-100 border shadow-lg flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <img class="mx-4" src="/static/assets(svg)/worker1.svg" alt="sara" />
        <h2 class="text-gray-800 font-medium font-sans text-lg cursor-pointer">Trained Pilots</h2>
      </div>
      </div>
      <div class="flex justify-center items-center shadow-lg border px-5 pt-6 mt-2 py-6 text-xl font-sans font-medium text-gray-600">
        <p className='items-center justify-between'>Get trained pilots with<br/>
          Pankh's PAN India Network of<br/>
          trained and certified pilots </p>
      </div>
    </div>
  </div>

  <div class="container ">
    <div class="w-11/12 bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div class="h-20 bg-blue-100 border shadow-lg flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <img class="mx-4" src="/static/assets(svg)/dashboard1.svg" alt="sara" />
        <h2 class="text-gray-800 font-medium font-sans text-lg cursor-pointer">Free data visualization</h2>
      </div>
      </div>
      <div class="flex justify-center items-center shadow-lg border px-5 pt-6 mt-2 py-6 text-xl font-sans font-medium text-gray-600">
        <p className='items-center justify-between'>Get drone data visualization<br/>
          on dedicated dashboards by<br/>
        Pankh Tech </p>
      </div>
    </div>
  </div>


  </div>
</div>  


{/* contact */}

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" src="/static/assets(png)/contact1.png"/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Let us help you with your drone <br/> requirements</h1>
        
        <div class="container flex mb-4 mt-6">
        <div class=" relative inline-block">
    <input type="text" class=" flex-1 appearance-none border border-gray-600 w-16 py-2 px-4 bg-white text-gray-700 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="+91"/>
</div>
        <div class=" relative inline-block px-2">
    <input type="text" class=" flex-1 appearance-none border border-gray-600 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-900 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent" placeholder="Mobile Number"/>
    </div>
  
    </div>
        <div class="container flex w-48 px-3 mb-4 -mx-2 mt-4 items-center justify-between mx-auto">
              <div className="signup w-full mb-5">
                <button type='submit' class=" w-full text-base items-center justify-center py-3 font-sans-serif font-medium text-white" style={{backgroundColor: 'var(--colour-1)'}}>Request Call Back</button>
              </div>
        </div>
      </div>
    </div>
  </div>
</section>




<div class=" container py-5 mx-10 ">

<h2 className='font-sans font-semibold text-xl text-gray-900 ml-10 px-10'>Recommend by clients across India</h2>
        <div class="flex mx-10 justify-center items-center px-8 bg-white py-4">
        
                <div class="container mx-2 flex w-1/2 items-center bg-white rounded-lg shadow-xl border ">
                 
                  <div class="text-blue-500 ">
                  <img src='/static/assets(png)/img1.png' />
                  </div>
                  <div>
                    <p class="px-6 mb-2 text-xl font-semibold font-sans text-gray-900">
                     500+ trained <br/> drone pilots
                    </p>
                  </div>
                </div>
          
                <div class=" container mx-2 flex w-1/2 items-center bg-white rounded-lg shadow-xl border">
                 
                  <div class="text-blue-500 ">
                  <img src='/static/assets(png)/img2.png' />
                  </div>
                  <div>
                  <p class="px-6 mb-2 text-xl font-semibold font-sans text-gray-900">
                     10 cities <br/> PAN India
                    </p>
                  </div>
                </div>

            
                <div class="container mx-2 flex w-1/2 items-center bg-white rounded-lg shadow-xl border">
                 
                  <div class="text-blue-500 ">
                  <img src='/static/assets(png)/img3.png' />
                  </div>
                  <div>
                   <p class="px-6 mb-2 text-xl font-semibold font-sans text-gray-900">
                     Satisfied <br/> Clients
                    </p>
                  </div>
                </div>

          
        </div>
    </div>

<Faq></Faq>
<Footerr></Footerr>
</div>
    </>
    )
}

export default rentdrone;