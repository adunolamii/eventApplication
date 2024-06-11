
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
 
       <div  className=' mt-12'>
      {
       event.map((event) => (
        <div key={event._id} className="  w-44">
          <div className=" w-96 ">
          <img src={event.picture} className="  rounded-lg w-full h-52" />
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>{event.eventName}</p>
            <p className='ml-72 font-bold'>{event.amount}</p>
          </div>
         
          <div className='flex flex-col'>
          <div className=" mr-10 flex ">
            <IoLocationSharp className=" text-red-600 mt-1  font-bold" />
            <p className=" mb-2 font-bold mr-2">{event.location}</p>
            </div >
            
            <p className=' font-bold'>{event.date}</p>
          </div>

          {/* <div className="  w-full  ml-52 pb-2 flex justify-end">
          <p className=" font-bold">{event.time}</p>
          </div> */}
          
        </div> 
         ))
     }
      </div>
      
      <div className="w-full"> 
      <div className=" bg-black fixed w-full bottom-0 right-0  tablet:hidden">
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