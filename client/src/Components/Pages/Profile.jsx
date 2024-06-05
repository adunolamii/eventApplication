import React from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";

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
      <div className="w-full"> 
      <div className="bg-black fixed w-full bottom-0 right-0 ">
        <div className="text-2xl text-white flex flex-row justify-around cursor-pointer">
       
        <Link to="/" className=' text-xs'>
        <div>
            <GoHomeFill className=" ml-2 mt-2  text-xl"/>
            <a>Home </a>
          </div>
          </Link> 
          
          <Link to="/event" className=' text-xs'>
          <div>
            <BsCalendar2EventFill className=" ml-2 mt-2  text-xl"/>
            <a>Event </a>
          </div>
          </Link>

          <Link to="/service" className=' text-xs'>
          <div>
            <IoIosContact className=" ml-2 mt-2  text-xl"/>
            <a>Services </a>
          </div>
          </Link>

          <Link to="/profile" className=' text-xs'>
          <div>
            <FaUserAlt className=" ml-2 mt-2  text-xl"/>
            <a>Profile </a>
          </div>
          </Link>
      
      
        </div>
      </div> 
      </div> 

        
     


    </div>
    
  )
}

export default Profile