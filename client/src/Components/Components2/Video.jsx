import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Video = () => {

    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(false);
    const [video, setVideo] = useState([]);


    useEffect(() => {
  
        const videoAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminVideos");
            setVideo(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        videoAll ();
      }, [])
  return (
    <div>Video
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
          video.map((video)=>(
              <div key={video._id}>
                  <img className=" mt-16 flex flex-col w-36"  src={video.picture} alt="" />
                  <p className=' justify-start flex font-bold'>{video.name}</p>
              </div>
            ))
          }
        </div>


    </div>
  )
}
