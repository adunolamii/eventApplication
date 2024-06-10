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
import image6 from "../Pages/images/Rectangle 9.svg"



const Service = () => {
  return (
    <div className="w-full">
      <div className="h-15 items-center  flex flex-row">
        <IoLocationSharp className=" text-red-600 items-center" />
        <p className="text-xl font-bold items-center">
          No 6, Trench Avenue Pluto.
        </p>
      </div>



<div className="hidden bg-black fixed w-full top-0 right-0  tablet:block ">
          
         
          <div >
         
           <div className="text-2xl text-white flex space-x-16 p-3 pl-[-28px] justify-between cursor-pointer">
             
           <Link to="/"> <p>EVENT APP</p></Link>
                        
 
             <Link to="/event" className=" text-xs">
               <div>
                 <BsCalendar2EventFill className=" ml-2 mt-2  text-xl" />
                 <a>Event </a>
               </div>
             </Link>
 
             <Link to="/service" className=" text-xs">
               <div>
                 <IoIosContact className=" ml-2 mt-2  text-xl" />
                 <a>Services </a>
               </div>
             </Link>
 
             <Link to="/profile" className=" text-xs">
               <div>
                 <FaUserAlt className=" ml-2 mt-2  text-xl" />
                 <a>Profile </a>
               </div>
             </Link>
           </div>
           </div>
         </div>







      <div className=' w-full h-48 bg-white  flex flex-col-4 justify-around'>
          <Link to="/entertainment">
           <div><img src={image6} alt="" />Entertainment</div>
           </Link>

           <Link to="/eventVenues">
           <div> <img src={image1} alt="" />Event Venues</div>
           </Link>
      </div>

      <div className=' w-full h-48 bg-white mt flex flex-col-4 justify-around'>
           <div><img src={image5} alt="" />Videography</div>
           <div> <img src={image3} alt="" />Catering Service</div>
      </div>
      <div className=' w-full h-48 bg-white mt flex flex-col-4 justify-around'>
           <div><img src={image4} alt="" />Photography</div>
           <div> <img src={image2} alt="" />Security Personel</div>
      </div>

     
     
     
      <div className="w-full">
      <div className="bg-black fixed w-full bottom-0 right-0  tablet:hidden">
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