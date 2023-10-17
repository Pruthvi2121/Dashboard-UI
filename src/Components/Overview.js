import React from "react";
import BarChart from "./Charts/BarChart";
import ListBox from "./ListBox";

export const Overview = ()=>{
    return <div className="bg-white rounded-xl relative ">
        <div className="absolute left-10 top-4">
            <h1 className="font-bold text-xl ">Overview</h1>
            <h1 className="text-gray-400 text-xs ">Monthly Earning</h1>
        </div>
        <div className="absolute  right-4 top-4">
            <ListBox/>
        </div>
          <BarChart labels={ ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug","Sep", "Oct", "Nov","Dec"]} chartdata={[40,20,40,50,35,47,87,21,55,69,52,12]} />
    </div>
}