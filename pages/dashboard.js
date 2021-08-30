import React from 'react';
import Footerr from '../components/footer';
import Nav from '../components/nav';

function Dashboard() {

  const [openTab, setOpenTab] = React.useState(1);

   return (
       <>
       <Nav />
    
       <div className="Home">
       <div class="flex h-screen bg-white">

  <div class=" w-1/5 bg-white overflow-hidden shadow-lg ">
  <div className="head p-10 items-center h-32 ">
      <h1 className="text-3xl text-white items-center">Rahul Gupta</h1>
      <div className='text-sm text-white items-center'>abcd@gmail.com </div>
    </div>
    <ul class="">
      <li className='hover:bg-blue-300'>
        <a href="#" className={"flex flex-row items-center ml-8 h-16 hover:text-gray-900 text-gray-900" + (openTab === 1)} 
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
>
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src='/static/assets(svg)/dashboard.svg' /></span>
          <span class="text-sm font-sans font-medium">My Dashboard</span>
        </a>
      </li>
      <li className='hover:bg-blue-300'>
        <a href="#" className={"flex flex-row items-center ml-8 h-16 hover:text-gray-900 text-gray-900" + (openTab === 2)} 
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src='/static/assets(svg)/myinvoices.svg' /></span>
          <span class="text-sm font-sans font-medium">My Invoices</span>
        </a>
      </li>
      <li className='hover:bg-blue-300'>
        <a href="#" className={"flex flex-row items-center ml-8 h-16 hover:text-gray-900 text-gray-900" + (openTab === 3)} 
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                    >
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><img src='/static/assets(svg)/myorders.svg' /></span>
          <span class="text-sm font-sans font-medium">My Account</span>
        </a>
      </li>
      <li className='hover:bg-blue-300'>
        <a href="#" className={"flex flex-row items-center ml-8 h-16 hover:text-gray-900 text-gray-900" + (openTab === 4)} 
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
>
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

<div class="flex-1 flex flex-col overflow-hidden">

<div className={openTab === 1 ? "block" : "hidden"} id="link1">
<main className='container mx-auto px-32 py-10'>

<h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>
<div className='text-sm text-white items-center'>From your dashboard you can manage your projects, check your invoices, view your recent orders, and edit your password and account details</div>



</main>
</div>

<div className={openTab === 2 ? "block" : "hidden"} id="link2">
<main className='container mx-auto px-32 py-10'>

<h3 class="text-gray-700 text-3xl font-medium">settings</h3>
<div className='text-sm text-white items-center'>From your dashboard you can manage your projects, check your invoices, view your recent orders, and edit your password and account details</div>



</main>
</div>

<div className={openTab === 3 ? "block" : "hidden"} id="link3">
<main className='container mx-auto px-32 py-10'>

<h3 class="text-gray-700 text-3xl font-medium">Invoices</h3>
<div className='text-sm text-white items-center'>From your dashboard you can manage your projects, check your invoices, view your recent orders, and edit your password and account details</div>



</main>
</div>

<div className={openTab === 4 ? "block" : "hidden"} id="link4">
<main className='container mx-auto px-32 py-10'>

<h3 class="text-gray-700 text-3xl font-medium">Account</h3>
<div className='text-sm text-white items-center'>From your dashboard you can manage your projects, check your invoices, view your recent orders, and edit your password and account details</div>



</main>
</div>






</div>

</div>
</div>

      </>
     )
}
export default Dashboard;