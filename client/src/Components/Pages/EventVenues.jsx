// import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
function EventVenues() {

    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [venues, setVenues] = useState([]);


    useEffect(() => {
  
        const venueAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminEventVs");
            setVenues(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        venueAll ();
      }, [])
  return (
    <div>
             <div className="flex">
<Link to="">
        <IoMdArrowRoundBack className=" mt-1" />
 </Link> 
 <p className=" m-auto font-bold">Event Venues</p>
       
       <div className="absolute">
         <input
           className="bg-gray-200 w-96 rounded-md h-10 text-2xl mt-10 mr-16"
           type="text"
           placeholder="Search"
         />
       </div>
    </div>
<div>
    {
        venues.map((venues)=>(
            <div key={venues._id}>
                <img className=' py-6 w-full' src={venues.picture} alt="" />
            </div>
        ))
    }
</div>

    </div>
  )
}

export default EventVenues