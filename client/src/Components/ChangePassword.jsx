import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";

function ChangePassword() {
  return (
    <div>
             <div className="flex">
<Link to="/profile">
        <IoMdArrowRoundBack className=" cursor-pointer mt-1" />
 </Link>      
        <p className=" m-auto font-bold">Change Password</p>
    </div>
    <p className=' text-gray-600 py-10'>Your Password needs to be a minimum of six characters long and should contain a mixof letters and numbers for security</p>
    
    <form>
      
            <div className=' relative flex items-center'>
              < RiLockPasswordLine className='absolute left-3 text-blue-600'/>
              <input className='w-full h-10 border rounded-2xl pl-8' type="text" placeholder='Your Current Password' />
            </div>

            <div className=' relative flex items-center py-6'>
              < RiLockPasswordLine className='absolute left-3 text-blue-600'/>
              <input className='w-full h-10 border rounded-2xl pl-8' type="text" placeholder='New Password' />
            </div>

            <div className=' relative flex items-center'>
              < RiLockPasswordLine className='absolute left-3 text-blue-600'/>
              <input className='w-full h-10 border rounded-2xl pl-8' type="text" placeholder='Confirm Password' />
            </div>

           
            <p className='text-blue-600 pl-72 p-3'>Forgot Password?</p>
            <button className='w-full bg-blue-600 text-white rounded-lg py-2 mt-20'>Change Password</button>



    </form>
    </div>
  )
}

export default ChangePassword