import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/authuserprovider';



function Signin(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log("success!! you have logged in")
      router.push('/dashboard');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };

  const pilotimage = require(`/static/assets(svg)/image_pilot.svg`)
  const clientimage = require(`/static/assets(svg)/image_client.svg`)
  const image = {pilotimage,clientimage}
  const [selected, setSelected] = useState(image.clientimage);


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
               
                <h1 class="font-medium font-sans-serif text-4xl text-gray-900">Sign In to Pankh</h1>
                <p class="font-sans mt-2 text-gray-600 font-normal text-base">Don't have an account?
       <Link href='/signin'>
      <a class="text-sm font-normal font-sans text-blue-500  hover:text-blue-700 "> Register</a>
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
        <input type="radio" id="radio-example-2" name="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" onClick={() => setSelected(image.pilotimage)}/>
        <label for="radio-example-2" class="text-gray-900 text-base">Drone Pilot</label>
    </div>
</div>
                 
                    <div class="flex -mx-2" id='B'>
                        <div class="w-full px-3 mb-5">
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 "></div>
                                <input type="email" value={email} 
                                onChange={(event) => setEmail(event.target.value)}
                  name="email" class="w-full -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="johnsmith@example.com" required/>
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 "></div>
                                <input type="password" name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} class="w-full -ml-10 pl-4 pr-3 py-3 border border-gray-400 outline-none focus:border-indigo-500 text-gray-900" placeholder="************" required/>
                            </div>
                        </div>
                    </div>
                    <div class="text-right ">
          <a href="#" class="text-sm font-normal text-gray-500 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

                    <div class="flex -mx-3">
                        <div className="signup w-full px-3 mb-5">
                            <button type='submit' class=" w-full text-base items-center font-sans-serif font-medium text-white">Sign In</button>
                            <style jsx>{`
                            .signup {
                              align-items: center;
            background-color: var(--colour-1);
            display: flex;
            height: 48px;
            justify-content: flex-end;
            margin-top: 24px;
            min-width: 189px;
            padding: 0 30px;
                            }
                            `} </style>
                        </div>
                    </div>
              </form>

</div>

  </div>

</section>
        </>
    )
}


export default Signin;