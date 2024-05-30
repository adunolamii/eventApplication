import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

function Event() {
  return (
    <div>

<div className="h-15 items-center  flex flex-row p-2">
        <IoLocationSharp className=" text-red-600 items-center mt-" />
        <p className="text-xl font-bold items-center px-3">
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
    </div>
  )
}

export default Event