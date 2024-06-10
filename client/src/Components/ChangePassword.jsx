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
       <div className=' py-7 w-full bg-slate-500 h-20'>
            
            <input className=' relative px-20 py-2 rounded-lg mb-4' type="text" placeholder='Your Current PassWord' />
            
       </div>
            
             
    </form>
    </div>
  )
}

export default ChangePassword