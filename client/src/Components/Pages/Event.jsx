
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import { useEffect } from "react";
import { GoHomeFill } from "react-icons/go";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";

function Event() {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([])

  useEffect(() => {
  
    const eventAll = async () => {
      try {
        const res = await axios.get("http://localhost:5001/adminEvents");
        setEvent(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    eventAll();
  }, [])
  
  return (
    <div>

<div className="h-15 items-center  flex flex-row p-2">
        <IoLocationSharp className=" text-red-600 items-center mt-" />
        <p className="text-xl font-bold items-center px-3">
          No 6, Trench Avenue Pluto.
        </p>
      </div>

      <div className="h-15 mt- py-3 items-center justify-center flex ">
        <div className="relative"></div>
        <div className="absolute">
          <input
            className="bg-gray-200 w-96 rounded-md h-10 text-2xl mt-10 mr-16"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div  className=' mt-12'>
      {
       event.map((event) => (
        <div key={event._id} className=" h-36 w-44">
          <img src={event.picture} className="rounded-lg mt-24 w-full" />

          <div className='flex justify-between'>
            <p className='font-bold'>{event.eventName}</p>
            <p className=' ml-10 font-bold'>{event.amount}</p>
          </div>
         
          <div className='flex justify-between'>
          <div className=" flex justify-center">
            <IoLocationSharp className=" text-red-600 mt-1 " />
            <p className=" mb-2">{event.location}</p>
            </div >
            <p className=' ml-4 font-bold'>{event.date}</p>
          </div>

          
          <div className='flex justify-between'>
            <p className='font-bold'>{event.eventName}</p>
            <p className=' ml-10 font-bold'>{event.time}</p>
          </div>
          
        </div> 
         ))
     }
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

export default Event