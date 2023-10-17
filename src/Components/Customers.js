import React from "react";
import DonutChart from "./Charts/DonutChart";
export const Customers = ()=>{
    return <div className="flex items-center justify-center w-full h-full relative">
         <div className="absolute left-10 top-4 w-44">
            <h1 className="font-bold lg:text-xl text-2xl ">Customers</h1>
            <h1 className="text-gray-400 lg:text-xs text-lg text-justify ">Customers that buy products</h1>
        </div>

         <div className="absolute w-16">
            <h1 className="font-bold  text-center lg:text-2xl text-4xl ">65%</h1>
            <h1 className="text-gray-400 lg:text-xs text-sm  ">Total New customers</h1>
        </div>


    <div className="lg:w-48 lg:h-48 w-64 h-64 mx-auto lg:my-8 my-24">
    <DonutChart labels={["Income", "Expense", "Saving","flow"] } chartdata={[10,55,45]}  />
    </div>
    </div>
}