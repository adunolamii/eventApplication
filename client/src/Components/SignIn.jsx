import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className=' h-screen flex flex-col p-4'>
    <p className='text-2xl text-blue-900'>Welcome</p>
     <h1 className='text-xl'>Hello there, sign in to continue!</h1>
     
     <div>
          <form className='flex flex-col gap-7 mt-6'>
          <div className='relative flex items-center'>
         <MdEmail className='absolute left-4 color="blue'  />
            <input className=' pl-10 border-4 border-blue-200 w-full rounded-md p-2'type="text" placeholder='Email' />
         </div>
         <div className='relative flex items-center'>
         <RiLockPasswordLine className='absolute left-4 color="blue'   />
            <input className=' pl-10 border-4 border-blue-200 w-full rounded-md p-2'type="text" placeholder='Password'/>
         </div>
         <h1 className='text-blue-900 ml-80'>forget password?</h1>
         <button className='bg-slate-600 text-white border-2 w-full rounded-md p-2'>Login</button>
        
        <div className='relative flex items-center'>
    <FcGoogle className='absolute left-24' />
        <button  className='bg-slate-200 border-1 w-full rounded-md p-2 font-bold text-slate-600 '> Continue with Goggle</button>

        </div>
       </form> 

     </div>
</div>
  )
}

export default SignIn