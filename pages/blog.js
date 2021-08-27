import React from 'react';
import Footerr from '../components/footer';
import Nav from '../components/nav';


function Blog() {
    return (
        <>
      <Nav></Nav>
<section class="text-gray-600 body-font bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.nationalbusinesscapital.com/wp-content/uploads/2018/04/Fotolia_200621471_Subscription_Monthly_M-1.jpg" alt="blog"/>
          <div class="p-6">
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Drones in the construction</h1>
            <p class="leading-relaxed mb-3">Drones have been underutilized in the construction industry for a long time now. But with the changing technology trends, the construction industry is adapting itself too. Drones have increased safety and accuracy in this sector alongside reducing the total cost of the project. Lack of knowledge about drones and their capabilities in the field of construction is a liability.

In the next few minutes, you shall be able to gain insights into the ability of drones. Before that, it is vital to understand the drone survey and the results obtained by it. 

A drone survey is a method developed to capture the top view of the area of interest using drones to understand various aspects of the given area. The drone survey involves two main parts:
Data acquisition- involves capturing aerial photos and videos. 
Data processing- involves stitching the images captured by drones to give meaningful data in terms of ortho mosaic maps, digital surface models, topo sheets, contour maps, and digital elevation models.
Ortho mosaic maps - represent the area of interest with a high-resolution image captured from the top at 90 degrees. In the field of construction, this can be utilized to receive the constant progress of the construction site and measure true distances. Raw data from the survey can be integrated with software to get the 3D model of the construction site.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>
<Footerr></Footerr>

    </>
    )
};

export default Blog;