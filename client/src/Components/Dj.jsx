import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Dj() {
  const [dj, setDj] = useState([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);


    useEffect(() => {
  
        const djAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminDjs");
            setDj(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        djAll ();
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
            dj.map((dj)=>(
              <div key={dj._id}>
                  <img  className=" pt-16 flex flex-col"  src={dj.picture} alt="" />
                  <p  className=' pt-2 justify-start flex font-bold'>{dj.name}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Dj