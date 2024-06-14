import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Music = () => {

    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(false);
    const [music, setMusic] = useState([]);


    useEffect(() => {
  
        const musicAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminMusics");
            setMusic(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        musicAll ();
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
          music.map((music)=>(
              <div key={music._id}>
                  <img className=" mt-16 flex flex-col w-36"  src={music.picture} alt="" />
                  <p className=' justify-start flex font-bold'>{music.name}</p>
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default Music