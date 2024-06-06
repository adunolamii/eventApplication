import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

function DiscoverRoutes() {
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [discover, setDiscover] = useState([]);


    useEffect(() => {
  
        const discoverAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminDiscovers");
            setDiscover(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        discoverAll ();
      }, [])


  return (
    <div>
<Link to="/">
    <IoMdArrowRoundBack />
</Link> 
   
    <div>
    {
        discover.map((discover)=>(
            <div key={discover._id}>
                    <img className=" w-full h-56 rounded-lg" src={discover.picture} alt="" />
                    
                  
                     <div className=" flex justify-center mr-80 ml-2">
                     <IoLocationSharp className=" text-red-600 mt-1 " />
                    <p className=" mb-2">{discover.location}</p>
                     </div >
    
                     <p className=" font-bold mr-72 py-3">Description</p>
    
                     <p className="">{discover.description}</p>
    
                     <button className=" mt-6 bg-blue-700 w-full rounded-md text-white font-bold">Buy Tickect</button>
                     
                    
            </div>
        ))
    }
    
    </div>
    
        </div>
  )
}

export default DiscoverRoutes