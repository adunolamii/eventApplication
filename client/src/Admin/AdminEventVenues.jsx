import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function AdminEventVenues() {

  const [formData, setFormData] = useState({
            
    picture: "",
    location: "",
    price: "",
})
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


    const handleSubmit = async(e) => {
        e.preventDefault()
     
         setFormData({
          picture: "",
          location: "",
          price: "",
    });
       
        try {
            await axios.post("http://localhost:5001/adminEventVs", formData)
        } catch (error) {
            console.log("error message")
        }
    }
  return (
    <div>AdminEventVenues

<form className="flex flex-col gap-7 mt-6" onSubmit={handleSubmit}>
       <input
            name="picture"
            value={formData.picture}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="picture"
            onChange={handleChange}
          />
              <input
            name="location"
            value={formData.location}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="location"
            onChange={handleChange}
          />
                <input
            name="price"
            value={formData.price}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="price"
            onChange={handleChange}
          />
            <button className="bg-blue-600 border-1 w-full rounded-md p-2 font-bold text-white ">
          Submit
        </button>
       </form>
    </div>
  )
}

export default AdminEventVenues