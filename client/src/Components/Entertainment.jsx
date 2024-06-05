import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

function Entertainment() {
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [entertainment, setEntertainment] = useState([]);


    useEffect(() => {
  
        const enterAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminEntertainments");
            setEntertainment(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        enterAll ();
      }, [])
  return (
    <div>
        <div className="flex">

        <IoMdArrowRoundBack className=" mt-1" />
        <p className=" m-auto font-bold">Entertainment</p>
       
        <div className="absolute">
          <input
            className="bg-gray-200 w-96 rounded-md h-10 text-2xl mt-10 mr-16"
            type="text"
            placeholder="Search"
          />
        </div>

    </div>
    <div >
            {
              entertainment.map((entertainment) =>(
                <div key={entertainment._id}>
                    <img className=" mt-16" src={entertainment.picture} alt="" />
                    {/* <p>{entertainment.djname}</p> */}
                </div>
              ) )

            }
        </div>
    
   </div> 
  )
}

export default Entertainment