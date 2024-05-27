import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri";

const GatherNP = () => {
  return (
    <div className=' h-screen flex flex-col p-4'>
        <h4 className='text-4xl text-orange-400 mt-40 text-center'>GATHER</h4>
   <p className='text-3xl text-black text-center'>Create New Password Password</p>
    <h1 className='text-xl text-slate-800 text-center'>Your New Password must be different from the Previous one.</h1>
    

    <form className='flex flex-col gap-7 mt-6'>
              <div className='relative flex items-center'>
                <RiLockPasswordLine className='absolute left-4 color="blue' />
                 <input className='pl-10  border-4 border-blue-200 w-full rounded-md p-2' type="text" placeholder='Your Current Password'/>
              </div>
              <div className='relative flex items-center'>
              <RiLockPasswordLine className='absolute left-4 color="blue'  />
                 <input className=' pl-10 border-4 border-blue-200 w-full rounded-md p-2'type="text" placeholder='New Password' />
              </div>
              <div className='relative flex items-center'>
              <RiLockPasswordLine className='absolute left-4 color="blue'   />
                 <input className=' pl-10 border-4 border-blue-200 w-full rounded-md p-2'type="text" placeholder='ConfirmPassword'/>
              </div>
              <button className='bg-slate-600 text-white border-2 w-full rounded-md p-2'>Save</button>
             
              <div className='relative flex items-center'>
          </div>
          </form>
          </div> 

  )
}

export default GatherNP