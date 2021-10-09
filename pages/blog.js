import React from 'react';
import Footerr from '../components/footer';
import Nav from '../components/nav';


function Blog() {
    return (
        <>
      <Nav></Nav>
      <section class="container px-6 py-4 mx-auto bg-white">
  <div class="grid  mb-8 md:grid-cols-1 lg:grid-cols-1">

    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm ">
        <img alt="mountain" class="lg:h-48 md:h-28 w-45 rounded-md border-2 border-gray-300" src="https://www.nationalbusinesscapital.com/wp-content/uploads/2018/04/Fotolia_200621471_Subscription_Monthly_M-1.jpg" />
         <div id="body" class="flex flex-col ml-5">
            <h4 id="name" class="text-xl font-semibold mb-2">Drones in Construction</h4>
            <p id="job" class="text-gray-800 mt-2">Drones have been underutilized in the construction industry for a long time now. But with the changing technology trends, the construction industry is adapting itself too. Drones have increased safety and accuracy in this sector alongside reducing the total cost of the project. Lack of knowledge about drones and their capabilities in the field of construction is a liability.

In the next few minutes, you shall be able to gain insights into the ability of drones. Before that, it is vital to understand the drone survey and the results obtained by it. 

A drone survey is a method developed to capture the top view of the area of interest using drones to understand various aspects of the given area. The drone survey involves two main parts:
Data acquisition- involves capturing aerial photos and videos. 
Data processing- involves stitching the images captured by drones to give meaningful data in terms of ortho mosaic maps, digital surface models, topo sheets, contour maps, and digital elevation models.
Ortho mosaic maps - represent the area of interest with a high-resolution image captured from the top at 90 degrees. In the field of construction, this can be utilized to receive the constant progress of the construction site and measure true distances. Raw data from the survey can be integrated with software to get the 3D model of the construction site.</p>

            <div class="flex mt-5">
            
            </div>
         </div>
    </div>

  </div>

  <div class="grid  mb-8 md:grid-cols-1 lg:grid-cols-1">

<div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm ">
    <img alt="mountain" class="lg:h-48 md:h-28 w-45 rounded-md border-2 border-gray-300" src="/static/images/cons.png" />
     <div id="body" class="flex flex-col ml-5">
        <h4 id="name" class="text-xl font-semibold mb-2">Drones for monitoring Construction</h4>
        <p id="job" class="text-gray-800 mt-2">In any project, it is essential to keep track of progress made during the construction period. With drones, this task has become very simple. The progress can be monitored in a single dashboard and can also compare with the actual timeline. It gives a unique platform to make rational decisions that optimizes the efficiency of the project.

Recently National Highway Authority of India (NHAI) has made usage of drone video recording  mandatory for National Highway Projects to keep an eye for monitoring all of its project in development, construction, operation and maintenance phase.The move will not only assist government and the NHAI to take stock of ground realities but also expedite the pace of monitoring construction by effective and immediate interventions. Physical survey is an onerous task that takes months. A drone is capable of doing the same thing in a few days
</p>
<p>Surveying and mapping

Understanding the land’s topography is very essential before moving ahead with any land planning activity or construction project. The monitoring ability of drones to gather data of large areas in one shot has enhanced the operational accuracy and efficiency of the projects and central schemes such as SWAMITVA. Data obtained from the flight can be interpreted to obtain high resolution orthomosaic maps, contour, digital surface and elevation models. A single platform to gather all forms of data makes the drones stand apart from the traditional surveying and mapping methods in order to monitor the activities
</p>
        <div class="flex mt-5">
        
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