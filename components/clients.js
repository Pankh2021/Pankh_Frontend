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
                  <img src="https://d33wubrfki0l68.cloudfront.net/3c4dca12c4e61997e31aa2810408ec46ea6b300c/35012/logos/jb_rider.svg" alt="Slack Logo" class="block object-contain h-10 filter grayscale"/>
                </div>
                <div class="flex items-center justify-center ">
                  <img src="https://d33wubrfki0l68.cloudfront.net/f89a5bbfd36f091aa28386a9a5d00beeac739466/a67a2/logos/marvel.svg" alt="Typeform Logo" class="block object-contain h-10 filter grayscale"/>
                </div>
                <div class="flex items-center justify-center ">
                  <img src="https://d33wubrfki0l68.cloudfront.net/00e9e5a3abb0f4a67423ee14f9822db4f0e22172/46c6b/logos/paypal.svg" alt="Algolia Logo" class="block object-contain h-10 filter grayscale"/>
                </div>
                <div class="flex items-center justify-center ">
                  <img src="https://d33wubrfki0l68.cloudfront.net/bd27dc44fc4b5c47e46941477c7d332a60d57351/09469/logos/volkswagen.svg" alt="Postcss Logo" class="block object-contain h-10 filter grayscale"/>
                </div>
                <div class="flex items-center justify-center ">
                  <img src="https://d33wubrfki0l68.cloudfront.net/7f4ce7b480fdac0e72b719c7de1c37f4e3792529/1f376/logos/stripe.svg" alt="Yahoo Logo" class="block object-contain h-10 filter grayscale"/>
                </div>
              </div>
            </div>
          </section>
        




        </>
    )
}


export default Client;