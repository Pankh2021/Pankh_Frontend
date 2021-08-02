import React from 'react';

function Grid (){

    return (

        <>

<link rel="stylesheet" type="text/css" href="output.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"/>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">


    <section class="mx-auto">
            <div class="container px-5 mx-auto lg:px-24 lg:py-15">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mx-auto mb-8 rounded-full" src="/static/images/logo.png"/>
                <p class="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing . </p>
                <h2 class="mt-4 text-xs font-semibold tracking-widest text-black uppercase title-font"> Rasmus Doe <span href="#" class="font-semibold text-blueGray-500 lg:mb-0">Acme's HR </span>
                </h2>
              </div>
            </div>
          </section>


    <div class="flex flex-wrap -m-4">
      <div class="w-full overflow-hidden lg:w-1/6 xl:my-2 xl:px-2 xl:w-1/4">
      <div class="flex justify-between m-5">
        <div class="flex flex-col h-full max-w-lg mx-auto w-full bg-white p-2 rounded-lg shadow-lg">
            <div class="rounded-lg flex flex-col justify-center px-8" style={{backgroundImage: "url(https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/UAVs-help2.jpg)", height: "500px", width: "auto", backgroundSize: "cover"}}>
              
                <div class="flex justify-center bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-full text-center p-4 mt-2">
                    <span class="text-white text-lg font-semibold">
                        DGCA Compliant Drones
                    </span>
                </div>
            
            </div>
        </div>
    </div>
      </div>

      <div class="w-full overflow-hidden lg:w-1/6 xl:my-2 xl:px-2 xl:w-1/4">
      <div class="flex justify-between m-5">
        <div class="flex flex-col h-full max-w-lg mx-auto w-full bg-white p-2 rounded-lg shadow-lg">
            <div class="rounded-lg flex flex-col justify-center px-8" style={{backgroundImage: "url(https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/UAVs-help2.jpg)", height: "500px", width: "auto", backgroundSize: "cover"}}>
              
                <div class="flex justify-center bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-full text-center p-4 mt-2">
                    <span class="text-white text-lg font-semibold">
                        Transparent Pace & Service Quality
                    </span>
                </div>
            
            </div>
        </div>
    </div>
      </div>

      <div class="w-full overflow-hidden lg:w-1/6 xl:my-2 xl:px-2 xl:w-1/4">
      <div class="flex justify-between m-5">
        <div class="flex flex-col h-full max-w-lg mx-auto w-full bg-white p-2 rounded-lg shadow-lg">
            <div class="rounded-lg flex flex-col justify-center px-8" style={{backgroundImage: "url(https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/UAVs-help2.jpg)", height: "500px", width: "auto", backgroundSize: "cover"}}>
              
                <div class="flex justify-center bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-full text-center p-4 mt-2">
                    <span class="text-white text-lg font-semibold">
                        Certified Pilots
                    </span>
                </div>
            
            </div>
        </div>
    </div>
      </div>

      <div class="w-full overflow-hidden lg:w-1/6 xl:my-2 xl:px-2 xl:w-1/4">
      
      <div class="flex justify-between m-5">
        <div class="flex flex-col h-full max-w-lg mx-auto w-full bg-white p-2 rounded-lg shadow-lg">
            <div class="rounded-lg flex flex-col justify-center px-8" style={{backgroundImage: "url(https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/07/UAVs-help2.jpg)", height: "500px", width: "auto", backgroundSize: "cover"}}>
              
                <div class="flex justify-center bg-white backdrop-filter backdrop-blur-md bg-opacity-25 rounded-full text-center p-4 mt-2">
                    <span class="text-white text-lg font-semibold">
                        Satisfied Customers
                    </span>
                </div>
            
            </div>
        </div>
    </div>
        
      </div>
    </div>
  </div>
</section>

</>
);
}

export default Grid;