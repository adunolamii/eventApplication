import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Mc() {

    const [mc, setMc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);


    useEffect(() => {
  
        const mcAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminMcs");
            setMc(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        mcAll ();
      }, [])
 
  return (
    <div>
        <div className="flex">
<Link to="/entertainment">
        <IoMdArrowRoundBack className=" mt-1" />
 </Link>      
        <p className=" m-auto font-bold">Entertainment</p>
       
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
            mc.map((mc)=>(
              <div key={mc._id}>
                  <img className=" pt-2 mt-16 flex flex-col w-44"   src={mc.picture} alt="" />
                  <p className=' justify-start flex font-bold'>{mc.name}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Mc