import React from "react";

import { BiUpArrowAlt, BiDownArrowAlt} from "react-icons/bi";

export const Card = ({icon,name, color, amount,percent, cal })=>{
    return <div className="bg-white rounded-md flex aspect-[5/3] gap-2 items-center p-5">
        <div className={`${color}  rounded-full p-6`} > 
            {icon}
         </div>
        <div className="my-auto">
            <h1 className="text-xs text-gray-400">{name}</h1>
            <h1 className="text-xl font-bold">{amount}</h1>
            <h1 className="text-xs text-gray-400 items-center flex gap-1">
                
                  {
                    percent.charAt(0)==="-"?
                    (<span className=" font-semibold items-center text-rose-600 flex"><BiDownArrowAlt size={"15px"} /> {percent} </span>):
                    (<span className=" font-semibold items-center flex text-green-600"><BiUpArrowAlt size={"15px"} /> {percent} </span>)
                   
                 
                  }
                 
            
               


                 this {cal}
             </h1>
            </div>
    </div> 
}