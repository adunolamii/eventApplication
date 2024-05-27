import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className=' h-screen flex flex-col p-4'>
          <p className='text-2xl text-blue-900'>Sign UP</p>
          <h1 className='text-xl'>Hello there, sign up to continue!</h1>
          
          <div>
          <form className='flex flex-col gap-7 mt-6'>
              <div className='relative flex items-center'>
                <FaUser className='absolute left-4 color="blue' />
                 <input className='pl-10  border-4 border-blue-200 w-full rounded-md p-2' type="text" placeholder='Username'/>
              </div>
              <div className='relative flex items-center'>
              <MdEmail className='absolute left-4 color="blue'  />
                 <input className=' pl-10 border-4 border-blue-200 w-full rounded-md p-2'type="text" placeholder='Email' />
              </div>
              <div className='relative flex items-center'>
              <RiLockPasswordLine className='absolute left-4 color="blue'   />
                 <input className=' pl-10 border-4 border-blue-200 w-full rounded-md p-2'type="text" placeholder='Password'/>
              </div>
              <button className='bg-slate-600 text-white border-2 w-full rounded-md p-2'>Create Account</button>
             
              <div className='relative flex items-center'>
          <FcGoogle className='absolute left-24' />
              <button  className='bg-slate-200 border-1 w-full rounded-md p-2 font-bold text-slate-600 '> Continue with Goggle</button>
          </div>
          </form>
          </div>
          <p className='text-sm text-black font-bold mt-36 text-center'>Already have an account?
          <Link to ="SignIn" className='text-blue-900'>Sign In</Link>
          </p>
          

      </div>
  )
}

export default SignUp