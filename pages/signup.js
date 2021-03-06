import React,{ constructor } from 'react';
import Link from 'next/link';
import { Alert } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/authuserprovider';
import { info } from 'autoprefixer';
import backimg from '/static/assets(svg)/image_pilot.svg'
import { name } from 'file-loader';
import authHelper from '../auth/authHelper';
import { Message } from 'semantic-ui-react'



function Signup() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [lastname, setLastname] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const auth = authHelper();
  const { createUserWithEmailAndPassword } = useAuth();

  const pilotimage = require(`/static/assets(svg)/image_pilot.svg`)
  const clientimage = require(`/static/assets(svg)/image_client.svg`)
  const image = {pilotimage,clientimage}
  const [selected, setSelected] = useState(image.clientimage);

  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
      createUserWithEmailAndPassword(email, password)
      .then(async (authUser) => {
        console.log("Success. The user is created in Firebase")
        try{
          await authUser.user.sendEmailVerification();
          // ------------TODO: display msg "Verification email send succesfully"
          alert('email sent');
          console.log("Email verification sent");
        }
        catch
        {
          // -------------TODO: display error "Unabe to send verification email. Please try again later"
          console.log("Email Verification send Error");
        }
        <Alert message='Email Sent' type='info' ></Alert>
        auth.login(authUser.user);
        // router.push('/dashboard');
      });
    event.preventDefault();
  };


    return(
        <>

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css" rel="stylesheet"/>

<style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>        
<div class="relative">
<a href='/Home'> <div class="absolute left-12 top-10 h-16 w-16"><img src='/static/assets(png)/logo.png' /> </div> </a>
</div>
<section class="flex flex-col md:flex-row bg-white h-screen w-screen items-center">

  <div className="flex items-center justify-center bg-white py-32 px-28 lg:block w-full md:w-1/2  h-screen ">
  <img src={selected} id='img' name='backimg' alt="" class="flex items-center justify-center"/>
  </div>

  <div class="bg-white w-full h-screen xl:w-1/3 flex items-center justify-center">

<div class="w-full mr-32">
            
                <div class=" mb-4">
               
                <h1 class="font-medium font-sans-serif text-4xl text-gray-900">Sign up to Pankh</h1>
                <p class="font-sans mt-2 text-gray-600 font-normal text-base">Already have an account?
       <Link href='/signin'>
      <a className=" text-sm font-normal font-sans text-blue-500  hover:text-blue-700"> Sign In</a>
      </Link> 
      </p>
                </div>
                <form class="mt-2" onSubmit={onSubmit}>
                { error && <Alert type='error'>{error}</Alert>}

<div class="flex m-4">
    <div class="flex items-center mb-2 mr-4">
        <input type="radio" id="radio-example-1" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" onClick={() => setSelected(image.clientimage)}/>
        <label for="radio-example-1" class="text-gray-900 text-base">Client</label>
    </div>
    <div class="flex items-center mb-2 ml-8">
        <input type="radio" id="pilot" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" onClick={() => setSelected(image.pilotimage)}/>
        <label for="radio-example-2" class="text-gray-900 text-base">Drone Pilot</label>
    </div>
</div>
                    
                    {/* <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5 ">
                            <div class="flex">
                            <div class="w-10 z-10 pl-1"></div>
                                <input type="name" value={name} id="name"
                                onChange={(event) => setname(event.target.value)}
                  name="name" class="w-full -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900 block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" required/>
                  <label for="name" class="absolute top-0 text-lg bg-white p-4 -z-1 duration-300 origin-0">Full Name</label>
                            </div>
                        </div>
                    </div> */}
                    <div class="flex w-full px-3 mb-5 -mx-2">
                     <div class="w-full outline justify-center relative border border-gray-400 focus-within:border-blue-500">
    <input type="text" onChange={(event) => setname(event.target.value)} value={name} name="name" placeholder=" " class="block py-3 px-2 w-full text-sm appearance-none focus:outline-none bg-transparent" />
    <label for="name" class="absolute top-0 text-sm bg-white p-2 -z-1 duration-300 origin-0">Full Name</label>
  </div>
  </div>
                    { selected=== image.clientimage && (<div class="flex w-full px-3 mb-5 -mx-2">
                     <div class="w-full outline justify-center relative border border-gray-400 focus-within:border-blue-500">
    <input type="text" name="companyname" placeholder=" " class="block py-3 px-2 w-full text-sm appearance-none focus:outline-none bg-transparent" />
    <label for="companyname" class="absolute top-0 text-sm bg-white p-2 -z-1 duration-300 origin-0">Company Name</label>
  </div>
  </div>) }
                    
                    {/* <div class="flex -mx-2" id='B'>
                        <div class="w-full px-3 mb-5">
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 "></div>
                                <input type="email" value={email} 
                                onChange={(event) => setEmail(event.target.value)}
                  name="email" class="w-full -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="johnsmith@example.com" required/>
                            </div>
                        </div>
                    </div> */}
                    <div class="flex w-full px-3 mb-5 -mx-2">
                     <div class="w-full outline justify-center relative border border-gray-400 focus-within:border-blue-500">
    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} name="email" placeholder=" " class="block py-3 px-2 w-full text-sm appearance-none focus:outline-none bg-transparent" />
    <label for="email" class="absolute top-0 text-sm bg-white p-2 -z-1 duration-300 origin-0">Email</label>
  </div>
  </div>
                   
               <div class="flex w-full px-3 mb-5 -mx-2">
                     <div class="w-full outline justify-center relative border border-gray-400 focus-within:border-blue-500">
    <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder=" " class="block py-3 px-2 w-full text-sm appearance-none focus:outline-none bg-transparent" />
    <label for="password" class="absolute top-0 text-sm bg-white p-2 -z-1 duration-300 origin-0">Password</label>
  </div>
  </div>

                    <div class="flex">
    <input type="checkbox" id="checkbox-example" class="h-4 w-4 text-teal-700 flex border rounded mr-2"/>
    <label for="checkbox-example" class='text-sm '>by creating account, you agree to accept our<a className='text-sm font-normal font-sans text-blue-500  hover:text-blue-700'> Privacy <br/> Policy</a>, <a className='text-sm font-normal font-sans text-blue-500  hover:text-blue-700'>Terms of Services</a>, and <a className='text-sm font-normal font-sans text-blue-500  hover:text-blue-700'>Notification Settings</a>.</label>
</div>

                    <div class="flex w-full px-3 mb-5 -mx-2 mt-4">
                        <div className="signup w-full mb-5">
                            <button type='submit' class=" w-full text-base items-center justify-center py-3 font-sans-serif font-medium text-white" style={{backgroundColor: 'var(--colour-1)'}}>Create Account</button>
                     
                        </div>
                    </div>
              </form>

</div>

  </div>

</section>

        </>
    )
}



export default Signup;