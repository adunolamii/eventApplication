
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdTime } from "react-icons/io";


function UpcomingRoutes() {
   
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [upcoming, setUpcoming] = useState([]);


    useEffect(() => {
  
        const upcomingAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminUpcomings");
            setUpcoming(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        upcomingAll ();
      }, [])


  return (
    <div>

<IoMdArrowRoundBack />
{/* <p>MelodyMania</p> */}
<div>
{
    upcoming.map((upcoming)=>(
        <div key={upcoming._id}>
                <img className=" w-full h-56 rounded-lg" src={upcoming.picture} alt="" />
                
                <div className=" flex justify-center mr-64 ml-2">
                 <MdOutlineCalendarMonth className=" text-red-600 mt-1 ml-4" />
                <p className=" mb-2">{upcoming.date}</p>
                 </div >

                 <div className=" flex justify-center mr-72">
                 <IoMdTime className=" text-red-600 mt-1 " />
                <p className=" mb-2">{upcoming.time}</p>
                 </div >

                 <div className=" flex justify-center mr-80 ml-2">
                 <IoLocationSharp className=" text-red-600 mt-1 " />
                <p className=" mb-2">{upcoming.location}</p>
                 </div >

                 <p className=" font-bold mr-72 py-3">Description</p>

                 <p className="">{upcoming.description}</p>

                 <button className=" mt-6 bg-blue-700 w-full rounded-md text-white font-bold">Buy Tickect</button>
                 
                
        </div>
    ))
}

</div>

    </div>
  )
}

export default UpcomingRoutes