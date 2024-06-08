import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function AdminLocation() {

    const [formData, setFormData] = useState({
            
        picture: "",
       
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
        const handleSubmit = async(e) => {
            e.preventDefault()
         
             setFormData({
        picture:"",
        
        });
           
            try {
                await axios.post("http://localhost:5001/adminLocations", formData)
            } catch (error) {
                console.log("error message")
            }
        }
  return (
    <div>AdminLocation

<form className="flex flex-col gap-7 mt-6" onSubmit={handleSubmit}>
       <input
            name="picture"
            value={formData.picture}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="picture"
            onChange={handleChange}
          />
          
            <button className="bg-blue-600 border-1 w-full rounded-md p-2 font-bold text-white ">
          Submit
        </button>
       </form>
    </div>
  )
}

export default AdminLocation