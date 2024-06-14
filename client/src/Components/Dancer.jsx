import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Dancer() {
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dancer, setDancer] = useState([]);


    useEffect(() => {
  
        const dancerAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminDancers");
            setDancer(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        dancerAll ();
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
            dancer.map((dancer)=>(
              <div key={dancer._id}>
                  <img className=" mt-16 flex flex-col w-36"  src={dancer.picture} alt="" />
                  <p className=' justify-start flex font-bold'>{dancer.name}</p>
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default Dancer