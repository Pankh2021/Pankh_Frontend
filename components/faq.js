import React, {useEffect, useState} from 'react';
import {loadTimelineData} from 'anima-timeline';

function Faq(){
  const [question, setquestion] = useState(0);
  return (
    
      <div className="container mx-auto p-10">
    <div>
        <h1 className="text-4xl bg-white flex justify-center items-center font-sans-serif text-black"> Frequently Asked Questions</h1>
      </div>
            <div className="faq justify-center items-center pt-10 bg-white ">
                    <ul >
                    <li >
                            <div className="w-2/3 h-20 border-gray-200 border-2 flex justify-center items-center">
                                <h3 className="text-1 ml-6 text-black text-lg font-sans-serif font-semibold md:text-lg  w-10/12">What are the drones and their different categories?</h3>
                                <div className="cursor-pointer mr-6" onClick={() => (question === 0 ? setquestion(null) : setquestion(0))}>
                                    {question === 0 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#111827" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#111827" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 0 &&<p className="text p-8 w-2/3 pt-2 md:pt-3  lg:pt-5 text-white font-sans bg-blue-500 text-sm md:text-sm  xl:text-base ">
          Drones are unmanned aerial vehicles which could be automated or command controlled by drone pilots to carry
          out aerial flights for varying needs. Drones are categorized by Ministry of Civil Aviation in 5 different
          categories depending on their maximum all –up weight which includes the weight of payloads as well:
          <br />
          Nana Drones: Weighing less than 250gm
          <br />
          Micro Drones: Weighing more than 250gm but less than 2.5kg
          <br />
          Small Drones: Weight greater than 2.5kg but less than 25kg
          <br />
          Medium Drones: Weight greater than 25kg but less than 150kg
          <br />
          Large Drone: Weight greater than 150kg
        </p>}
                        </li>
                        <li className="pt-4">
                            <div className="w-2/3 h-20 border-gray-200 border-2 flex justify-center items-center">
                                <h3 className="text-1 ml-6 text-black text-lg font-sans-serif font-semibold md:text-lg  w-10/12">Who can fly drones and is there any rules and regulations for it?</h3>
                                <div className="cursor-pointer mr-6" onClick={() => (question === 1 ? setquestion(null) : setquestion(1))}>
                                    {question === 1 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#111827" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#111827" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <circle cx={12} cy={12} r={9} />
                                            <line x1={9} y1={12} x2={15} y2={12} />
                                            <line x1={12} y1={9} x2={12} y2={15} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {question === 1 && <p className=" text justify-center items-center p-8 w-2/3 pt-2 md:pt-3  lg:pt-5 text-white font-sans  text-sm md:text-sm  xl:text-base">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. </p>}
                        </li>
                    </ul>
                </div>
            <style jsx>{`
            .text-1 {
              letter-spacing: 0.15px;
              min-height: 25px;
            }
            .text {
              background-color: var(--colour-1);
            }
            .faq {
              align-items: center;
              // justify-content: center;
              display: inline-block;
              width: 100%;
              margin-left: 16%;
            }
            
            `} </style>
            </div>

  );
}

export default Faq;

