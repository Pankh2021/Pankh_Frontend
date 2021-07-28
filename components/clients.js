import React from 'react';
import Image from 'next/image'

function Client(){

    return(
        <>

<section class="mx-auto bg-white">
            <div class="container px-5 mx-auto lg:px-24 lg:py-20">
              <div class="flex flex-col w-full mb-12 text-center">
                <h2 class="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font"> The world's best teams use Wickedtemplates to state theire presence. <a href="#" class="font-semibold text-blue-600 lg:mb-0 hover:text-black">Our customers »</a>
                </h2>
              </div>
              <div class="grid grid-cols-3 gap-16 text-center lg:grid-cols-6">
                <div class="flex items-center justify-center ">
                  <img src={"/static/images/Amplus.jpg" } alt="Todoist Logo"  />
                </div>
                <div class="flex items-center justify-center ">
                  <img src={"/static/images/KEC.png"} alt="Slack Logo" />
                </div>
                <div class="flex items-center justify-center ">
                  <img src={"/static/images/afcons-logo.png" }alt="Typeform Logo" />
                </div>
                <div class="flex items-center justify-center ">
                  <img src={"/static/images/OIP.jpg"} alt="Algolia Logo" />
                </div>
                <div class="flex items-center justify-center ">
                  <img src={"/static/images/TUVSUD.jpg"} alt="Postcss Logo" />
                </div>
              </div>
            </div>
          </section>
        




        </>
    )
}


export default Client;