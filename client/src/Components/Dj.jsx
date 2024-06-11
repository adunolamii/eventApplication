import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

function Dj() {
  const [dj, setDj] = useState([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);


    useEffect(() => {
  
        const djAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminDjs");
            setDj(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        djAll ();
      }, [])
  
  return (
    <div>
        <div>
          {
            dj.map((dj)=>(
              <div key={dj._id}>
                  <img src={dj.picture} alt="" />
                  <p>{dj.name}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Dj