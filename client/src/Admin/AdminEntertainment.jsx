import { useState } from 'react';
import axios from 'axios';

function AdminEntertainment() {

    const [formData, setFormData] = useState({
        picture:"",
        djname:"",
       
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
    
        const handleSubmit = async(e) => {
            e.preventDefault()
         
             setFormData({
                picture:"",
                djname:"",
       
        
        });
           
            try {
                await axios.post("http://localhost:5001/adminEntertainments", formData)
            } catch (error) {
                console.log("error message")
            }
        }
  return (
    <div>AdminEntertainment

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
            name="djname"
            value={formData.djname}
            className="pl-10  border-4 border-blue-200 w-full rounded-md p-2 text-xl font-bold"
            type="text"
            placeholder="djname"
            onChange={handleChange}
          />
          
          <button className="bg-blue-600 border-1 w-full rounded-md p-2 font-bold text-white ">
          Submit
        </button>
        </form>
    </div>
  )
}

export default AdminEntertainment