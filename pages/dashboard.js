import React, {useEffect, useState} from 'react';
import Footerr from '../components/footer';
import Nav from '../components/nav';
import authHelper from '../auth/authHelper';
import db from '../firebase/database';

function Dashboard() {

  const [openTab, setOpenTab] = React.useState(1);
  const {user} = authHelper();
  const [projects, setProjects] = useState(null);

  const getProjects = async ()=>{
          
    // console.log(user.uid);
    try{
         const doc = await db.collection('projects').doc(user.uid).get();
         setProjects(doc.data().projects);
    }
    catch(error)
    {
         // --------------TODO: show error in frontend 
         // "No Projects Found"----------------
         console.log(`Failed with error message: ${error.message}`);
    }
    // console.log(doc.data().projects);
}

// called only when dashboard loads for first time
useEffect(()=>{

    if(user)
    {
         console.log(user.emailVerified);
         getProjects(); 
    
    }

},[]);

// render if user logged in
// const RenderDashboard = ()=>{
//     return (
//          <>
//          <h1>Projects submitted by {user.displayName}:</h1>
//          <br/>
//          <h1>{user.email} verification status: </h1>
//          {user.emailVerified?<h1>Verified</h1>:<h1>Not Verified</h1>}
//          {projects&&projects.map((project, index)=>(
//               <>
//               <a key={index} href={project.url}>{project.name}</a>
//               <br/>
//               </>
//          )
//          )}
//          </>
//     );
// }

   return (
       <>
       <Nav />
    
       <div className="h-screen">
       <div class="flex h-auto h-screen bg-white">

  <div class=" w-1/5 bg-white h-full shadow-lg ">
  <div className="bg-blue-600 p-10 items-center h-32 ">
      {user?<h1 className="text-3xl text-white items-center">{user.displayName}</h1>:<h1 className="text-3xl text-white items-center">not verified</h1>}
      {user?<div className='text-sm text-white items-center'>{user.email} </div>: <div className='text-sm text-white items-center'>Please Login</div>}
     
   
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

<div class="flex-1 flex flex-col ">

<div className={openTab === 1 ? "block" : "hidden"} id="link1">
<main className='container mx-auto px-32 py-10'>

<h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>
<div className='text-base mt-6 text-gray-400 font-sans-serif font-normal items-center'>From your dashboard you can manage your projects, check your invoices, view your recent orders, and edit your password and account details</div>

{projects&&projects.map((project, index)=>(
             <>
              <span className=' flex flex-col mt-10 h-44 w-44 bg-blue-200 items-center '> 
  <img className='p-6' src='/static/assets(svg)/drone.svg' />
  <div key={index} href={project.url} className="flex text-base font-sans font-medium">{project.name} </div>
</span>
              </>
            )
         )}


</main>
</div>

<div className={openTab === 2 ? "block" : "hidden"} id="link2">
<main className='container mx-auto px-32 py-10'>

<h3 class="text-gray-700 text-3xl font-medium">My Invoices</h3>

<div class="flex flex-col mt-8">
                        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                            <div
                                class="align-middle inline-block min-w-full overflow-hidden border-b border-gray-200">
                                <table class="min-w-full">
                                    <thead>
                                        <tr className='head'>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-white tracking-wider">
                                                Sr. No.</th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-white tracking-wider">
                                                Project Name</th>
                                         
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-white tracking-wider">
                                                Date</th>
                                            <th
                                                class="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-white tracking-wider">
                                                Invoice</th>
                                          
                                        </tr>
                                        </thead>
    
                                    <tbody class="bg-white">
                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
                              
    
                                                    <div class="ml-4">
                                                        <div class="text-sm leading-5 font-medium text-gray-900">1.
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                                                
                                            </td>
    
                                
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                Owner</td>
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">view</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
    
                                                    <div class="ml-4">
                                                        <div class="text-sm leading-5 font-medium text-gray-900">2.
                                                        </div>
                                                
                                                    </div>
                                                </div>
                                            </td>
    
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                                        
                                            </td>
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                Owner</td>
    
                                            <td
                                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                                                <a href="#" class="text-indigo-600 hover:text-indigo-900">view</a>
                                            </td>
                                        </tr>
                                
                                      
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>



</main>
</div>

<div className={openTab === 3 ? "block" : "hidden"} id="link3">
<main className='container mx-auto px-32 py-10'>

<h3 class="text-gray-700 text-3xl font-medium">My Account</h3>
<div className='text-sm text-white items-center'>From your dashboard you can manage your projects, check your invoices, view your recent orders, and edit your password and account details</div>



</main>
</div>

<div className = {
  openTab === 4 ? "block" : "hidden"}id = "link4">
  <main className = 'mx-auto px-32 py-10' >

  <h3 class = "text-gray-700 mb-6 text-3xl font-medium"> Account Details </h3>

  <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                          <label className='block text-gray-600 text-base font-sans font-medium mb-2'> Full Name</label>
                            <div class="flex">
                            <div class=" w-10 z-10 pl-1 "></div>
                                <input type="name"
                  name="name" class="w-5/8 -ml-10 pl-4 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="Full Name" required/>
                
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                          <label className='block text-gray-600 text-base font-sans font-medium mb-2'> Company Name</label>
                            <div class="flex">
                            <div class=" w-10 z-10 pl-1 "></div>
                                <input type="name"
                  name="name" class="w-1/3 -ml-10 pl-4 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="Company Name" required/>
                
                            </div>
                        </div>
                    </div>
                
                    
                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                          <label className='block text-gray-600 text-base font-sans font-medium mb-2'> Email Id</label>
                            <div class="flex">
                            <div class=" w-10 z-10 pl-1 "></div>
                            <input type="email"
                  name="email" class="w-1/3 -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="johnsmith@example.com" required/>
                
                            </div>
                        </div>
                    </div>


  <h3 class = "text-gray-700 mt-10 mb-6 text-3xl font-medium"> Change Password</h3>

  <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                          <label className='block text-gray-600 text-base font-sans font-medium mb-2'>Current Password</label>
                            <div class="flex">
                            <div class=" w-10 z-10 pl-1 "></div>
                            <input type="password" name="password"
                class="w-1/3 -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="************" required/>
                
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                          <label className='block text-gray-600 text-base font-sans font-medium mb-2'> New Password</label>
                            <div class="flex">
                            <div class=" w-10 z-10 pl-1 "></div>
                            <input type="password" name="password"
                   class="w-1/3 -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="************" required/>
                
                            </div>
                        </div>
                    </div>

                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                          <label className='block text-gray-600 text-base font-sans font-medium mb-2'> Confirm New Passowrd</label>
                            <div class="flex">
                            <div class=" w-10 z-10 pl-1 "></div>
                            <input type="password" name="password"
                   class="w-1/3 -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="************" required/>
                
                            </div>
                        </div>
                    </div>
                    


  </main>
  </div>






</div>

</div>
</div>

      </>
     )
}
export default Dashboard;