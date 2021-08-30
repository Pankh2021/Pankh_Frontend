import React from 'react';
import Footerr from '../components/footer';
import Nav from '../components/nav';

function Dashboard() {
   return (
       <>
       <Nav />
<div class="min-h-screen flex flex-row bg-gray-100 shadow-lg border-r">
  <div class="flex flex-col w-1/5 bg-white overflow-hidden">
  <div className="head p-10 items-center h-32 ">
      <h1 className="text-3xl text-white items-center">Rahul Gupta</h1>
      <div className='text-sm text-white items-center'>abcd@gmail.com </div>
    </div>
    <ul class="flex flex-col">
      <li className='hover:bg-blue-300'>
        <a href="#" class="flex flex-row items-center ml-8 h-16 text-gray-900">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src='/static/assets(svg)/dashboard.svg' /></span>
          <span class="text-sm font-sans font-medium">My Dashboard</span>
        </a>
      </li>
      <li className='hover:bg-blue-300'>
        <a href="#" class="flex flex-row items-center ml-8 h-16 text-gray-900">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src='/static/assets(svg)/myinvoices.svg' /></span>
          <span class="text-sm font-sans font-medium">My Invoices</span>
        </a>
      </li>
      <li className='hover:bg-blue-300'>
        <a href="#" class="flex flex-row items-center ml-8 h-16 text-gray-900">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src='/static/assets(svg)/myorders.svg' /></span>
          <span class="text-sm font-sans font-medium">My Account</span>
        </a>
      </li>
      <li className='hover:bg-blue-300'>
        <a href="#" class="flex flex-row items-center ml-8 h-16 text-gray-900">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src='/static/assets(svg)/settings.svg' /></span>
          <span class="text-sm font-sans font-medium">Account Settings</span>
        </a>
      </li>
   
     
    </ul>
  </div>
<style jsx>{`
.head {
  background-color: var(--colour-1);
}
`} </style>
</div>

<main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
<div class="container mx-auto px-6 py-8">
  <h1>hii</h1>
</div>
</main>

      </>
     )
}
export default Dashboard;