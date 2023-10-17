import React from "react";
import { BiSearch } from "react-icons/bi";
export const Header = ()=>{
    return <div className=" flex  mx-4 md:flex-row flex-col justify-between mt-4 items-center py-2  text-gray-800">
        <div>
            <h1 className="font-semibold lg:text-xl text-xl">Hello Shahrukh 👋,</h1>
        </div>

        <div className="flex rounded px-2 bg-white  items-center"> 
        <BiSearch  size={"20px"}/>
            <input type="text" placeholder="Search" 
            className=" focus:outline-none p-1 lg:text-sm text-xl" 
            />
        </div>
    </div>  
}