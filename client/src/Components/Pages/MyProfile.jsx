import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function MyProfile() {
  return (
    <div>
          <div className="flex">
        <Link to="/profile">
        <IoMdArrowRoundBack className=" mt-1" />
        </Link>      
        <p className=" px-4 font-bold">My Profile</p>
        </div>
        
        <div className='bg-blue-400 w-28 h-28 rounded-full m-auto mt-8'></div>
      <h3 className=' mt-4 text-blue-500'>Change Picture</h3>

<div className='mr-72'>
      <label className=' text-gray-500 mr-24'>Name</label>
      <p>__________________________________________________________________</p>
 </div>

 <div className='mr-72 mt-8'>
      <label className=' text-gray-500 mr-8'>Date Of Birth</label>
      <p>__________________________________________________________________</p>
 </div>

 <div className='mr-72 mt-8'>
      <label className=' text-gray-500 mr-24'>Gender</label>
      <p>__________________________________________________________________</p>
 </div>

 <div className='mr-72 mt-8'>
      <label className=' text-gray-500 mr-24'>Email</label>
      <p>__________________________________________________________________</p>
 </div>

 <div className='mr-72 mt-8'>
      <label className=' text-gray-500 mr-2'>Phone Number</label>
      <p>__________________________________________________________________</p>
 </div>

 <div className='mr-72 mt-8'>
      <label className=' text-gray-500 mr-24'>Nationality</label>
      <p>__________________________________________________________________</p>
 </div>

 <button className=' bg-blue-700 w-full rounded-lg py-1 mt-6 text-white font-bold'>Edit Profile</button>

    </div>
  )
}

export default MyProfile