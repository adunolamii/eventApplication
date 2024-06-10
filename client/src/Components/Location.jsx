import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoLocationSharp } from "react-icons/io5";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
function Location() {

    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);


    useEffect(() => {
  
        const locationAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminLocations");
            setLocation(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        locationAll ();
      }, [])
  return (
    <div>
        <div className="flex">
        <Link to="/profile">
        <IoMdArrowRoundBack className=" cursor-pointer mt-1" />
 </Link> 
             <div className="h-15 items-center  flex flex-row px-8 ">
             <IoLocationSharp className=" text-red-600 " />
             <p className="text-xl font-bold"> No 6, Trench Avenue Pluto.</p>
             </div>

             <div className="absolute">
          <input
            className="bg-gray-200 w-96 rounded-md h-10 text-2xl mt-10 mr-16"
            type="text"
            placeholder="Search"
          />
        </div>
        </div>

        <div >
            {
              location.map((location) =>(
                <div key={location._id}>
                    
                    <img className=" mt-16 flex flex-col w-full" src={location.picture} alt="" />
                </div>
              ) )

            }
        </div>

        

    </div>
  )
}

export default Location