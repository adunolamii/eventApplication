import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa6";

function Profile() {
  return (
    <div className="w-full">
      <p className=' font-bold text-xl mr-80'>Profile</p>
      <div className='bg-blue-400 w-28 h-28 rounded-full m-auto mt-8'></div>
      <h3 className='font-bold mt-4'>Adunola Adenike T</h3>

      <div className=' w-full h-80 bg-slate-100 mt-8 rounded-2xl'>
      <p className=' font-bold text-xl mr-60'>Acount Overview</p>

<div className='flex flex-col'>
      <div className=' bg-orange-200 w-10 h-10 rounded-xl absolute mt-10 cursor-pointer flex'>
      <RiLockPasswordLine className=' m-auto mt-3 text-red-500' />         </div>
      
      <p className='relative mr-52 mt-12'>Change Password  </p> 
     
      
      </div>
      
      </div>
        
     


    </div>
    
  )
}

export default Profile