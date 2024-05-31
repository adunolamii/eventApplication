import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

function Service() {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([])


  useEffect(() => {
  
    const serviceAll = async () => {
      try {
        const res = await axios.get("http://localhost:5001/adminServices");
        setServices(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
   serviceAll ();
  }, [])
  return (
    <div className="w-full">
      <div className="h-15 items-center  flex flex-row p-2">
        <IoLocationSharp className=" text-red-600 items-center mt-" />
        <p className="text-xl font-bold items-center px-3">
          No 6, Trench Avenue Pluto.
        </p>
      </div>
      {
        services.map((services)=>(
            <div key={services._id}>
                <img src= {services.picture} alt="" />
                <p>{services.services}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Service