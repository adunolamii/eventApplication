import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";


function EventVenues() {

    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [venues, setVenues] = useState([]);
    const [filterData, setFilterData] = useState("");

    
    const [data, setData] = useState([]);
    

    useEffect(() => {
  
        const venueAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminEventVs");
            setVenues(res.data);
            setFilterData(venues)
          } catch (error) {
            setError(error);
            setLoading(false);
           
          }
        };
        venueAll ();

        
      }, [])
      
      const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setVenues(value);
    
        const filteredData = venues.filter(venues =>
            venues.name.toLowerCase().includes(value)
        );
    
        setVenues(filteredData);
    }
  return (
    <div>
             <div className="flex">
<Link to="/service" >
        <IoMdArrowRoundBack className=" mt-1 cursor-pointer" />
 </Link> 
 <p className=" mb-12 m-auto font-bold">Event Venues</p>
       
       <div className="absolute">
         <input
           className="bg-gray-200 w-96 rounded-md h-10 text-2xl mt-8 mr-16"
           type="text"
           placeholder="Search"
           onChange={handleSearch}
         />
       </div>
    </div>
<div>
    {
        venues.map((venues)=>(
            <div key={venues._id}>
                <div className="  py-6">
                    <img className=' w-full h-44' src={venues.picture} alt="" />
                    </div>
            <div className=' flex'> 
                 <div className=" flex justify-center mr-80 ml-0">
                     <IoLocationSharp className=" text-red-600 mt-1 " />
                    <p className=" font-bold mb-2">{venues.location}</p>
                     </div >
                <p className=" font-bold">{venues.price}</p>
            </div>
            </div>
        ))
    }
</div>

    </div>
  )
}

export default EventVenues