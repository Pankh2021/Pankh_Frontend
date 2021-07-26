import React from  'react';

function Cards() {

    return(
    <>

<div class="flex flex-wrap overflow-hidden justify-center bg-white lg:-mx-10 mx-auto px-4 md:px-12">

  <div class="w-full overflow-hidden lg:my-10 lg:px-10 lg:w-1/3 xl:w-1/3">
  <article class="rounded-lg bg-white shadow-lg p-7 text-center sm:max-w-sm sm:p-4 sm:pb-12">
    <img src="https://images.unsplash.com/photo-1611175281047-6c2c125a938a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Ice Cave" class="rounded-lg sm:w-full object-cover sm:h-52"/>
    <div>
      <h2 class="text-gray-800 capitalize text-xl font-bold pt-8 pb-4">Drones you will love to buy</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu.</p>
      <button class="block bg-gray-900 text-white rounded-lg py-4 px-16 mx-auto mt-8 tracking-wide">See all types of drones</button>
    </div>
  </article>
  </div>

  <div class="w-full overflow-hidden lg:my-10 lg:px-10 lg:w-1/3 xl:w-1/3">
  <article class="rounded-lg bg-white shadow-lg p-7 text-center sm:max-w-sm sm:p-4 sm:pb-12">
    <img src="https://images.unsplash.com/photo-1611175281047-6c2c125a938a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Ice Cave" class="rounded-lg sm:w-full object-cover sm:h-52"/>
    <div>
      <h2 class="text-gray-800 capitalize text-xl font-bold pt-8 pb-4">Get Drone services on demand</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu.</p>
      <button class="block bg-gray-900 text-white rounded-lg py-4 px-16 mx-auto mt-8 tracking-wide">Type your requirements</button>
    </div>
  </article>
  </div>

  <div class="w-full overflow-hidden lg:my-10 lg:px-10 lg:w-1/3 xl:w-1/3">
  <article class="rounded-lg bg-white shadow-lg p-7 text-center sm:max-w-sm sm:p-4 sm:pb-12">
    <img src="https://images.unsplash.com/photo-1611175281047-6c2c125a938a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Ice Cave" class="rounded-lg sm:w-full object-cover sm:h-52"/>
    <div>
      <h2 class="text-gray-800 capitalize text-xl font-bold pt-8 pb-4">Earn while you fly !!</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer in sapien. Nullam dapibus fermentum ipsum. Class aptent taciti sociosqu.</p>
      <button class="block bg-gray-900 text-white rounded-lg py-4 px-16 mx-auto mt-8 tracking-wide">Register if you're a Drone Pilot</button>
    </div>
  </article>
  </div>

</div>
    </>
    );
}

export default Cards;