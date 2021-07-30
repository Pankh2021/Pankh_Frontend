import React, { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
export default function Faq () {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="flex flex-col mb-16 sm:text-center">
            <a href="/" class="mb-6 sm:mx-auto">
              <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  class="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                  
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{' '}
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div class="space-y-4">
            <Item title="What are the Drones and their different categories?">
Drones are unmanned aerial vehicles which could be automated or command controlled by
drone pilots to carry out aerial flights for varying needs. Drones are categorized by Ministry of
Civil Aviation in 5 different categories depending on their maximum all –up weight which
includes the weight of payloads as well:
<ul>

<li typeof='bullet' >Nana Drones: Weighing less than 250gm</li>
<li> Micro Drones: Weighing more than 250gm but less than 2.5kg</li>
<li> Small Drones: Weight greater than 2.5kg but less than 25kg </li>
<li> Medium Drones: Weight greater than 25kg but less than 150kg </li>
<li> Large Drone: Weight greater than 150kg </li>
</ul>
            </Item>
            <Item title="Who can fly drones and is there any rules and regulations for it?">
            A person who is resident of India, having attained an age of 18 years and passed class tenth or
its equivalent examination from a recognized board can fly a drone if he holds a valid remote
pilot license issued by DGCA recognized Flight Training Organizations.
Exemptions: No Remote pilot license is required for a person operating a nano drone and
operating a micro drone for non-commercial purpose
Indian Airspace is divided into 3 zones: green, yellow and red zones to which all drone
operators or pilots have to comply. No person can operate a drone in red or yellow zones.
No Fly zones/ areas:
<ul>
<li> Within a distance of 5 kilometer from the perimeter of international airports at
Mumbai,Delhi, Chennai, Kolkata, Bengaluru and Hyderabad</li>
<li> Within a distance of 3 kilometer from the perimeter of any civil, private or defence
airports, other than those mentioned in clause(a)</li>
<li> Above the Obstacle Limitation Surfaces (OLS) or Procedures for Air Navigation ServicesAircraft Operations (PANS-OPS) surfaces, whichever is lower, of an operational
aerodrome, specified in the rules related to Height Restrictions for Safeguarding of
Aircraft Operations</li>
• Within permanent or temporary Prohibited, Restricted and Danger Areas including
Temporary Reserved Area (TRA), and Temporary Segregated Area (TSA), as notified in
Aeronautical Information Publication (AIP) by Airport Authority of India;
• Within 25 kilometer from international border which includes Line of Control (LoC), Line
of Actual Control (LAC) and Actual Ground Position Line (AGPL);
• Beyond 500 meter (horizontal) into sea from coast line provided the location of ground
station is on fixed platform over land;
• Directorate General of Lighthouses and Lightships (DGLL) lighthouses and coastal radar
stations of the Indian Coast Guard;
• Within 3 kilometer from perimeter of military installations/ facilities/ where military
activities/ exercises are being carried out unless clearance is obtained from the local
military installation/facility;
• Within 5 kilometer radius from Vijay Chowk in Delhi. However, this is subject to any
additional conditions/ restrictions imposed by local law enforcement agencies/
authorities in view of the security.
• Within 2 kilometer from perimeter of strategic locations/ vital installations notified by
Ministry of Home Affairs unless clearance is obtained from Ministry of Home Affairs;
• Within 3 kilometer from radius of State Secretariat Complex in State Capitals;
• From a mobile platform such as a moving vehicle, ship or all types of sea going vessels
including makeshift floating platforms or aircraft; and
• Over eco-sensitive zones around National Parks and Wildlife Sanctuaries notified by
Ministry of Environment, Forests and Climate Change without prior permission.

</ul>
</Item>
        
          </div>
        </div>
      </div>
    );
  };