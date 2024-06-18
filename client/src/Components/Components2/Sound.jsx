import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

 const Sound = () => {

    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sound, setSound] = useState([]);


    useEffect(() => {
  
        const soundAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminSounds");
            setSound(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        soundAll ();
      }, [])
  return (
    <div>Sound

<div className="flex">
<Link to="/">
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
          sound.map((sound)=>(
              <div key={sound._id}>
                  <img className=" mt-16 flex flex-col w-36"  src={sound.picture} alt="" />
                  <p className=' justify-start flex font-bold'>{sound.name}</p>
              </div>
            ))
          }
        </div>

    </div>
 )
}
   
    export default Sound
