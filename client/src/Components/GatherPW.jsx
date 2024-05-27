import React from 'react'
import { MdEmail } from "react-icons/md";

const GatherPW = () => {
  return (
    <div className=' h-screen flex flex-col p-4'>
        <h4 className='text-4xl text-orange-400 mt-40 text-center'>GATHER</h4>
   <p className='text-3xl text-black text-center'>Forgot Password</p>
          <h1 className='text-xl text-slate-800 text-center'>Please enter your Email Address to Receive your Verification Code.</h1>

          <div>
               <form className='flex flex-col gap-7 mt-6'>
               <div className='relative flex items-center'>
              <MdEmail className='absolute left-4 color="blue'  />
                 <input className=' pl-10 border-4 border-blue-200 w-full rounded-md p-2'type="text" placeholder='Email' />
              </div>
              <button className='bg-slate-600 text-white border-2 w-full rounded-md p-2'>Send</button>
              </form>
            </div>  
    </div>
  )
}

export default GatherPW