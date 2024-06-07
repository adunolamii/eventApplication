import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formAll, setFormAll] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/event/664f6646fde2c8618f9967aa")
      .then((res) => {
        setForm([res.data]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    const fetchAll = async () => {
      try {
        const res = await axios.get("http://localhost:5001/events");
        setFormAll(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchAll();

    const fetchAdmins = async () => {
      try {
        const res = await axios.get("http://localhost:5001/admin2s");
        setAdmins(res.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  return (
    <>

     <div className="w-full"> 
      <div className="bg-black fixed w-full bottom-0 right-0 ">
        <div className="text-2xl text-white flex flex-row justify-around cursor-pointer">
       
        <Link to="/" className=' text-xs'>
        <div>
            <GoHomeFill className=" ml-2 mt-2  text-xl"/>
            <a>Home </a>
          </div>
          </Link> 
          
          <Link to="/event" className=' text-xs'>
          <div>
            <BsCalendar2EventFill className=" ml-2 mt-2  text-xl"/>
            <a>Event </a>
          </div>
          </Link>

          <Link to="/service" className=' text-xs'>
          <div>
            <IoIosContact className=" ml-2 mt-2  text-xl"/>
            <a>Services </a>
          </div>
          </Link>

          <Link to="/profile" className=' text-xs'>
          <div>
            <FaUserAlt className=" ml-2 mt-2  text-xl"/>
            <a>Profile </a>
          </div>
          </Link>
      
      
        </div>
      </div> 




      <div className=" px-0 h-15 items-center  flex flex-row p-2 ">
        <IoLocationSharp className=" text-red-600 " />
        <p className="text-xl font-bold">
          No 6, Trench Avenue Pluto.
        </p>
      </div>

      <div className="h-15 mt- py-3 items-center justify-center flex ">
        <div className="relative"></div>
        <div className="absolute">
          <input
            className="bg-gray-200 w-96 rounded-md h-10 text-2xl mt-10 mr-16"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div>
      <p className="text-xl font-bold mt-10 ml-4 mr-52 ">Happening Now!!!</p>
{/* <div>
  {
    form.map((form)=>(
      <div key={form._id}>
        <img src={form.picture} alt="" />
        
      </div>
    ))
  }
</div> */}
   </div>  

           
            <div className="flex justify-between">
              <h6 className="font-bold text-xl">Upcoming Events</h6>
              <div>
                <Link to="/upcomingRoutes">
                <button className="flex justify-between">
                  See all <CiSquarePlus className=" mt-1 w-6" />
                </button>
                </Link>
              </div>
            </div>
          </div>
     
     
           




       <div className="flex flex-wrap gap-4 ">
        {formAll.map((formAll) => (
          <div key={formAll._id} className="w-32 h-36 ">
            <img src={formAll.picture} className="rounded-lg " />
           
           <Link to="/upcomingRoutes" >
            <h5 >{formAll.eventName}</h5>
            <div className=" flex justify-center">
            <IoLocationSharp className=" text-red-600 mt-1 " />
            <p className=" mb-2">{formAll.location}</p>
            </div >
            </Link>
          </div>
          
        ))}
      </div> 

      <div>
      <div className="flex justify-between py-6">
              <h6 className="font-bold text-xl">Discover Venues</h6>
              <div>
                <Link to="/eventVenues">
                <button className="flex justify-between">
                  See all <CiSquarePlus className=" mt-1 w-6" />
                </button>
                </Link>
              </div>
            </div>

        <div className="flex flex-wrap gap-4 ">
        {admins.map((admins) => (
          <div key={admins._id} className="w-32 h-36 ">
            <img src={admins.picture} className="rounded-lg" />
            <Link to="/discoverRoutes">
                  <p className="font-bold">{admins.eventName}</p> 
                  <div className="flex justify-center mr-3">
                  <IoLocationSharp className=" text-red-600 mt-1 " />
                  <p className=" mb-2">{admins.location}</p> 
                  </div>      
                  </Link> 
          </div>
          
        ))}
      </div>
      </div>
     
      
     
    </>
  );
}

export default Navbar;
