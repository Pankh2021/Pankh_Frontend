import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/authuserprovider';

const Signup =() => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
      createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log("Success. The user is created in Firebase")
        router.push("/signin");
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

<style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>        


<section class="flex flex-col md:flex-row h-screen items-center">

  <div class="bg-indigo-600 hidden  lg:block w-full md:w-1/2 xl:w-2/3 h-screen mt-2">
    <img src="https://source.unsplash.com/random" alt="" class="w-full h-full object-cover"/>
  </div>

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

<div class="w-full">
            
                <div class="text-center mb-10">
                <img alt="testimonial" class="inline-block object-cover object-center w-20 h-20 mx-auto mb-1 rounded-full" src="/static/images/logo.png"/> 
                <h1 class="font-bold text-3xl text-gray-900">Sign Up</h1>
                <p>Enter your information to signup</p>
                </div>
                <form class="mt-2" onSubmit={onSubmit}>
                { error && <Alert color="danger">{error}</Alert>}
<div >
    <label class="inline-flex w-1/2 px-3 mb-5">
        <input type="radio" class="form-radio border-2 border-gray-200" name="accountType" value="personal"/>
      <span class="ml-2 block text-gray-700">Clients</span>
    </label>
    <label class="inline-flex w-1/2 px-3 mb-5">
      <input type="radio" class="form-radio border-2 border-gray-200" name="accountType" value="busines"/>
      <span class="ml-2 block text-gray-700">Drone Operator</span>
    </label>
  </div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                        <label class="block text-gray-700">First name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" value={firstname} 
                                onChange={(event) => setFirstname(event.target.value)}
                  name="firstname" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" required/>
                            </div>
                        </div>
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="block text-gray-700">Last name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input type="text" value={lastname} 
                                onChange={(event) => setLastname(event.target.value)}
                  name="lastname" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" required/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="block text-gray-700">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" value={email} 
                                onChange={(event) => setEmail(event.target.value)}
                  name="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" required/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="block text-gray-700">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" required/>
                            </div>
                        </div>
                    </div>
                    <div class="text-right mb-5">
                    <p class="">Already have an account?
       <Link href='/signin'>
      <a class="text-sm font-semibold text-blue-500 hover:text-blue-700 focus:text-blue-700">Signin</a>
      </Link> 
      </p>
        </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button type='submit' class="w-full block bg-indigo-500 hover:bg-indigo-900 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-2">SIGN UP</button>
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