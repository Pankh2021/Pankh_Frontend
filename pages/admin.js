import React from 'react';
import { useState } from 'react';

function Admin(){

    const [email, setEmail] = useState("");
    const submit = event =>{
        console.log({email});
    }

    return (
        <>
        <div class="flex justify-center mx-4 md:mx-0">
   <form class="w-full max-w-lg bg-white mt-8 rounded-lg shadow-md p-6" onSubmit={submit} >
      <div class="flex flex-wrap -mx-3 mb-6">
      <div class="flex w-full px-3 mb-5 -mx-2">

    <div class="w-full outline justify-center relative border border-gray-400 focus-within:border-blue-500">
    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder=" " class="block py-3 px-4 pr-4 w-1/2 text-sm appearance-none focus:outline-none bg-transparent" />
    <label for="email" class="absolute top-0 text-sm bg-white p-2 -z-1 duration-300 origin-0">Email</label>
  </div>
  </div>
    
  <div class="flex w-full px-3  -mx-2 mt-4">
    <div className="signup w-full ">
        <button type='submit' class=" w-full text-base items-center justify-center py-3 font-sans-serif font-medium text-white" style={{backgroundColor: 'var(--colour-1)'}}>Sign In</button>
    </div>
    </div>
         
      </div>
   </form>
</div>
        </>
    )
}

export default Admin;