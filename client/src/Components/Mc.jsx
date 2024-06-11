import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

function Mc() {

    const [mc, setMc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState([]);


    useEffect(() => {
  
        const mcAll = async () => {
          try {
            const res = await axios.get("http://localhost:5001/adminMcs");
            setMc(res.data);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        mcAll ();
      }, [])
 
  return (
    <div>Mc

<div>
          {
            mc.map((mc)=>(
              <div key={mc._id}>
                  <img src={mc.picture} alt="" />
                  <p>{mc.name}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Mc