import React, { useState } from 'react'
import axios from 'axios';


function AdminEvent() {
  const [formData, setFormData] = useState({
    location: "",
    eventName: "",
    time: "",
    amount: "",
    date: "",
    descriptionForRegular: "",
    descriptionForVip: "",
    descriptionForTableForFive: "",
    picture: "",
})
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


    const handleSubmit = async(e) => {
        e.preventDefault()
     
         setFormData({
    location:"",
    eventName:"",
    time:"",
    amount:"",
    date:"",
    descriptionForRegular:"",
    descriptionForVip:"",
     descriptionForTableForFive:"",
    picture:"",
    });
       
        try {
            await axios.post("http://localhost:5001/adminevents", formData)
        } catch (error) {
            console.log("error message")
        }
    }
  return (
    <div>
      <form className="flex flex-col gap-7 mt-6" onSubmit={handleSubmit}>
        <input
            name="location"
            value={formData.location}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="location"
            onChange={handleChange}
          />
              <input
            name="eventName"
            value={formData.eventName}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="eventName"
            onChange={handleChange}
          />
              <input
            name="time"
            value={formData.time}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="time"
            onChange={handleChange}
          />
              <input
            name="amount"
            value={formData.amount}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="amount"
            onChange={handleChange}
          />
              <input
            name="date"
            value={formData.date}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="date"
            onChange={handleChange}
          />
       
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

export default AdminEvent;