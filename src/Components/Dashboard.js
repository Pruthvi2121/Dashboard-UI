import React from "react";
import { Card } from "./Card";
import { BsFileText} from "react-icons/bs";
import {MdOutlineAccountBalanceWallet} from "react-icons/md";
import {  RiExchangeDollarLine} from "react-icons/ri";
import { HiOutlineShoppingBag} from "react-icons/hi";

import BarChart from "./Charts/BarChart";
import { Overview } from "./Overview";
import { Customers } from "./Customers";

export const Dashboard = ()=>{

    return <><main className=" mx-4">
    
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 my-6 ">
        
        <Card name={"Earning"} color="bg-[#6be2835b]" icon={<RiExchangeDollarLine  className="text-green-500 lg:h-10 lg:w-14 h-20 w-20"/>} percent={"37.8.%"} amount={"$198.0k"} cal={"month"}/>
        <Card name={"Orders"} color="bg-[#861b943d]" icon={<BsFileText size={"34px"} className="text-purple-500 lg:h-10 lg:w-14 h-20 w-20"/>} percent={"-2.%"} amount={"$2.4k"} cal={"month"}/>
        <Card name={"Balance"} color="bg-[#42a5d73d]" icon={<MdOutlineAccountBalanceWallet size={"34px"} className="text-blue-500 lg:h-10 lg:w-14 h-20 w-20"/>} percent={"-2%"} amount={"$2.4k"} cal={"month"}/>
        <Card name={"Total Sales"} color="bg-[#d742ad3d]" icon={<HiOutlineShoppingBag size={"34px"} className="text-rose-500 lg:h-10 lg:w-14 h-20 w-20" />} percent={"11%"} amount={"$89k"} cal={"month"}/>


    </div> 

    <div className="flex flex-col lg:flex-row gap-8">
  <div className=" w-full">
    <Overview />
  </div>
  <div className=" mx-auto lg:w-[40%] w-full bg-white rounded-xl">
    <Customers />
  </div>
</div>
</main>
    </>
}