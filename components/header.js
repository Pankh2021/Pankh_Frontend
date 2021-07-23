import React from "react";
import Background from '../images/drone.jpg';

function Header () {

return (
<>

<header>
    <nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-3 ">
            <div class="md:flex md:items-center md:justify-between">
                <div class="flex justify-between items-center">
                    <div class="text-xl font-semibold text-gray-700">
                        <a href="#" class="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl">Brand</a>
                    </div>

                
                    <div class="flex md:hidden">
                        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

        
                <div class="hidden -mx-4 md:flex md:items-center">
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Web developers</a>
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Web Designers</a>
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">UI/UX Designers</a>
                    <a href="#" class="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="w-full bg-cover bg-center" style={{height: '32rem' ,
    backgroundImage: "url(" + "https://www.robotics247.com/images/wide/warehouse_drones_ready_for_digital_inventory_management_wide.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }} >
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Build Your new <span class="underline text-blue-400">Saas</span></h1>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
        </div>
    </div>
</header>

<div className="container mx-auto my-5">

    <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
        
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom" style={{backgroundImage: "url(" + `${require("../images/drone.jpg")}` + ")", backgroundBlendMode: 'multiply' }} >
            </div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
                <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">HOTEL AMANEE</h3>
                <h4 className="w-full text-xl text-gray-100 leading-tight">Bienvenido a</h4>
            </div>
            <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
        </div>

        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                <h4 className="hidden md:block text-xl text-gray-400">Bienvenido a</h4>
                <h3 className="hidden md:block font-bold text-2xl text-gray-700">HOTEL AMANEE</h3>
                <p className="text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque perspiciatis quod sapiente quidem, vero consectetur quae iure error tempore reprehenderit unde veritatis fugit iusto nemo amet. Assumenda, quam facilis.</p>
                <a className="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
                    <span>Conocer más de Amanee</span>
                    <span className="text-xs ml-1">&#x279c;</span>
                </a>
            </div>
        </div>

    </div>
</div>
</>
);
}


export default Header;