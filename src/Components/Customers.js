import React from "react";
import DonutChart from "./Charts/DonutChart";
export const Customers = ()=>{
    return <div className="flex items-center justify-center w-full h-full relative">
         <div className="absolute left-10 top-4">
            <h1 className="font-bold text-xl ">Customers</h1>
            <h1 className="text-gray-400 text-xs text-justify ">Customers that buy products</h1>
        </div>

         <div className="absolute w-16">
            <h1 className="font-bold  text-center text-2xl ">65%</h1>
            <h1 className="text-gray-400 text-xs   ">Total New customers</h1>
        </div>


    <div className="w-48 h-48 mx-auto my-auto">
    <DonutChart labels={["Income", "Expense", "Saving","flow"] } chartdata={[10,55,45]}  />
    </div>
    </div>
}