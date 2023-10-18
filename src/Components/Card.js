import React from "react";

import { BiUpArrowAlt, BiDownArrowAlt} from "react-icons/bi";

export const Card = ({icon,name, color, amount,percent, cal })=>{
    return <div className="bg-white rounded-md flex aspect-[5/3] gap-2 items-center lg:p-5 p-2 ">
        <div className={`${color}  rounded-full lg:p-6 p-8 `} > 
            {icon}
         </div>
        <div className="my-auto mx-auto">
            <h1 className="lg:text-xs md:text-xl text-2xl text-gray-400">{name}</h1>
            <h1 className="lg:text-xl md:text-lg text-4xl font-bold">{amount}</h1>
            <h1 className="lg:text-xs md:text-sm text-2xl  text-gray-400 items-center flex gap-1">
                
                  {
                    percent.charAt(0)==="-"?
                    (<span className=" font-semibold items-center text-rose-600 flex"><BiDownArrowAlt className="w-4 h-4"/> {percent} </span>):
                    (<span className=" font-semibold items-center flex text-green-600"><BiUpArrowAlt className="w-4 h-4"/> {percent} </span>)         
                 
                  }
                 
            
               


                 this {cal}
             </h1>
            </div>
    </div> 
}