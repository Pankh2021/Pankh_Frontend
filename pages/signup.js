import React,{ constructor } from 'react';
import Link from 'next/link';
import { Alert } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/authuserprovider';
import { info } from 'autoprefixer';
import backimg from '/static/assets(svg)/image_pilot.svg'


function Signup() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const pilotimage = require(`/static/assets(svg)/image_pilot.svg`)
  const clientimage = require(`/static/assets(svg)/image_client.svg`)
  const image = {pilotimage,clientimage}
  const [selected, setSelected] = useState(image.clientimage);

//   function check() {
//     if ($("#label input[name=pilot]:checked").val() == "2") {
//         $('body').css('background-image', "url(https://c2.staticflickr.com/8/7151/6717697085_6d28849226_z.jpg)");
//     } else {
//         $('body').css('background', "");
//     }
//     return false;
// }

  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
      createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log("Success. The user is created in Firebase")
        authUser.user.sendEmailVerification();
        <Alert message='Email Sent' type='info' ></Alert>
      
      })
      .catch(error => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message)
      });
    event.preventDefault();
  };


    return(
        <>

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css" rel="stylesheet"/>

<style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>        

<section class="flex flex-col md:flex-row bg-white h-screen items-center">

  <div class="flex items-center justify-center bg-white py-32 px-28 lg:block w-full md:w-1/2  h-screen ">
    <img src={selected} id='img' name='backimg' alt="" class="flex items-center justify-center"/>
  </div>

  <div class="bg-white w-full h-screen xl:w-1/3 flex items-center justify-center">

<div class="w-full mr-32">
            
                <div class=" mb-4">
               
                <h1 class="font-medium font-sans-serif text-3xl text-gray-900">Sign up to Pankh</h1>
                <p class="font-sans-serif mt-2 text-gray-400 font-medium font-base">Already have an account?
       <Link href='/signin'>
      <a class="text-sm font-semibold  hover:text-blue-700 focus:text-blue-700">Sign In</a>
      </Link> 
      </p>
                </div>
                <form class="mt-2" onSubmit={onSubmit}>
                { error && <Alert type='error'>{error}</Alert>}
  <div class="mb-4">
    <label class="inline-flex items-center" >
      <input type="radio" class="form-radio" name="client" value="1" onClick={() => setSelected(image.clientimage)} />
      <span class="ml-2">Client</span>
    </label>
    <label class="inline-flex items-center ml-6" id='label'>
      <input type="radio" class="form-radio" name="pilot" value="2" onClick={() => setSelected(image.pilotimage)} />
      <span class="ml-2">Drone Pilot</span>
    </label>
  </div>
                    
                    <div class="flex -mx-2">
                        <div class="w-full px-3 mb-5">
                            <div class="flex">
                            <div class=" w-10 z-10 pl-1 "></div>
                                <input type="name"
                  name="name" class="w-full -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="Full Name" required/>
                
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-2 " id='A'>
                        <div class="w-full px-3 mb-5">
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="company name"
                  name="company name" class="w-full -ml-10 pl-10 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500" placeholder="Company Name" required/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex -mx-2" id='B'>
                        <div class="w-full px-3 mb-5">
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" value={email} 
                                onChange={(event) => setEmail(event.target.value)}
                  name="email" class="w-full -ml-10 pl-10 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" required/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} class="w-full -ml-10 pl-10 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500" placeholder="************" required/>
                            </div>
                        </div>
                    </div>
                    <div class="flex my-2">
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox"/>
    <span class="ml-2">I agree to the <span class="underline">privacy policy</span></span>
  </label>
</div>
                    {/* <label class="flex inline-flex  mb-4">
						<input type="checkbox" class="form-checkbox block bg-indigo-500 border border-gray-300 rounded"/>
						<span for="remember_me" class="ml-4 block font-sm text-gray-900">
                            by creating account, you agree to accept our Privacy Policy, Terms of Services, and Notification Settings.
                        </span>
					</label> */}
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button type='submit' class="w-full block bg-indigo-500 hover:bg-indigo-900 focus:bg-indigo-400 text-white font-semibold px-4 py-3 mt-2">SIGN UP</button>
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