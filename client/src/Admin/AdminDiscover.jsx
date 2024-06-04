import { useState } from 'react';
import axios from 'axios';

function AdminDiscover() {

    const [formData, setFormData] = useState({
        location:"",
        date:"",
        description:"",
        picture:"",
        time:"",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
        const handleSubmit = async(e) => {
            e.preventDefault()
         
             setFormData({
        location:"",
        date:"",
        description:"",
        picture:"",
        time:"",
       
        
        });
           
            try {
                await axios.post("http://localhost:5001/adminDiscovers", formData)
            } catch (error) {
                console.log("error message")
            }
        }
  return (
    <div>AdminDiscover

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
            name="date"
            value={formData.date}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="date"
            onChange={handleChange}
          />
              <input
            name="description"
            value={formData.description}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="description"
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
         
              <input
            name="time"
            value={formData.time}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="time"
            onChange={handleChange}
          />
        
          
          
          <button className="bg-blue-600 border-1 w-full rounded-md p-2 font-bold text-white ">
          Submit
        </button>
        </form>


    </div>
  )
}

export default AdminDiscover