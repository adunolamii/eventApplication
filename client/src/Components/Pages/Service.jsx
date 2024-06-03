import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import image1 from "../Pages/images/Rectangle 9 (1).svg"
import image2 from "../Pages/images/Rectangle 9 (2).svg"
import image3 from "../Pages/images/Rectangle 9 (3).svg"
import image4 from "../Pages/images/Rectangle 9 (4).svg"
import image5 from "../Pages/images/Rectangle 9 (5).svg"
// import image6 from "../Pages/images/Rectangle 9 (6).svg"



const Service = () => {
  return (
    <div className="w-full">
      <div className="h-15 items-center  flex flex-row p-2">
        <IoLocationSharp className=" text-red-600 items-center mt-" />
        <p className="text-xl font-bold items-center px-3">
          No 6, Trench Avenue Pluto.
        </p>
      </div>



      <div className=' w-full h-48 bg-white mt flex flex-col-4 justify-around py-2'>
           <div><img src={image2} alt="" />Security Personel</div>
           <div> <img src={image3} alt="" />Catering Service</div>
      </div>

      <div className=' w-full h-48 bg-white mt flex flex-col-4 justify-around py-2'>
           <div><img src={image1} alt="" />Event Venues</div>
           <div> <img src={image5} alt="" />Videography</div>
      </div>
      <div className=' w-full h-48 bg-white mt flex flex-col-4 justify-around py-2'>
           <div><img src={image4} alt="" />Photography</div>
           <div> <img src={image2} alt="" /></div>
      </div>

     
     
     
      <div className="w-full">
      <div className="bg-black fixed w-full bottom-0 ">
        <div className="text-2xl text-white flex flex-row justify-around cursor-pointer">
        <div>
            <GoHomeFill className=" ml-2 mt-2  text-xl"/>
            <Link to="event" className=' text-xs'><a>Home </a></Link>
            
          </div>
          <div>
            <BsCalendar2EventFill className=" ml-2 mt-2  text-xl"/>
            <Link to="event" className=' text-xs'><a>Event </a></Link>
            
          </div>

          <div>
            <IoIosContact className=" ml-2 mt-2  text-xl"/>
            <Link to="service" className=' text-xs'><a>Services </a></Link>
            
          </div>
          <div>
            <FaUserAlt className=" ml-2 mt-2  text-xl"/>
            <Link to="service" className=' text-xs'><a>Profile </a></Link>
            
          </div>
      
      
        </div>
      </div>
      </div>
    </div>
  )
}

export default Service