import React, { useEffect } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';

function Event() {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([])

  useEffect(() => {
    // axios
    //   .get("http://localhost:5001/adminEvents")
    //   .then((res) => {
    //     setEvent([res.data]);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err);
    //     setLoading(false);
    //   });
  
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
          <img src={event.picture} className="rounded-lg w-full mt-24" />
          <div className='flex justify-between'>
            <p className='font-bold'>{event.eventName}</p>
            <p className=' ml-10 font-bold'>{event.amount}</p>
          </div>
          <div className='flex'>
          <div className=" flex justify-center">
            <IoLocationSharp className=" text-red-600 mt-1 " />
            <p className=" mb-2">{event.location}</p>
            </div >
            <p className=' ml-10 font-bold'>{event.date}</p>
          </div>
          
        </div> 
         ))
     }
      </div>
     
    </div>
  )
}

export default Event