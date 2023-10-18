import React from "react";
import { BiSearch } from "react-icons/bi";
import ListBox from "./ListBox";

export const ProductSell = ()=>{
    return <div>

        <div className="w-full mt-4 flex items-center gap-2  ">
            <h1 className="text-xl mx-4 font-bold">Product Sell</h1>
            <div className="flex rounded px-2 ml-auto bg-gray-100  items-center"> 
            <BiSearch  size={"20px"}/>
            <input type="text" placeholder="Search" 
            className=" focus:outline-none p-1  bg-transparent lg:text-sm text-xl" 
            />
        </div>
        <div className="mx-2">
        <ListBox/>
        </div>
        </div>

        <table className="w-full text-left  ">
                <thead  >
                    <tr className="  text-left tracking-wide text-xs text-gray-400 " >
                        
                        <th className="p-3  rounded-tl-md  ">Product Name</th>
        
                        <th className="p-3 ">Stock</th>
                        <th className="p-3 ">Price</th>
                        <th className="p-3 ">Total Sales</th>
                        
                        
                      
                    </tr>
                    
                </thead>
                
                
                <tbody className=" ">
            


            
            
                            <tr  className=" font-semibold  text-sm hover:bg-primary_hover rounded-xl " >
                            
                                <td className="py-1 font-bold  flex items-center mx-4 gap-4" >
                                    <div>
                                        <img src="../logo512.png" className="h-10 w-10 border rounded-lg " alt="" />
                                    </div>
                                    <div className="flex  flex-col">
                                      <h1 className="text-lg">Abstract 3d</h1>
                                      <h1 className="text-xs text-gray-400 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                    </div>
                                </td>
                                <td className=" text-xs text-gray-400 " >32 in stock</td>
                                <td className=" " >$ 45.99</td>
                                <td className=" px-8">20</td>
                                
                            </tr> 
                            <tr  className=" font-semibold  text-sm hover:bg-primary_hover rounded-xl " >
                            
                                <td className="py-1 font-bold  flex items-center mx-4 gap-4" >
                                    <div>
                                        <img src="../logo512.png" className="h-10 w-10 border rounded-lg " alt="" />
                                    </div>
                                    <div className="flex  flex-col">
                                      <h1 className="text-lg">Sarphens illustration</h1>
                                      <h1 className="text-xs text-gray-400 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                    </div>
                                </td>
                                <td className=" text-xs text-gray-400 " >32 in stock</td>
                                <td className=" " >$ 45.99</td>
                                <td className=" px-8">20</td>
                                
                            </tr> 
                            <tr  className=" font-semibold  text-sm hover:bg-primary_hover rounded-xl " >
                            
                                <td className="py-1 font-bold  flex items-center mx-4 gap-4" >
                                    <div>
                                        <img src="../logo512.png" className="h-10 w-10 border rounded-lg " alt="" />
                                    </div>
                                    <div className="flex  flex-col">
                                      <h1 className="text-lg">Rebook</h1>
                                      <h1 className="text-xs text-gray-400 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                    </div>
                                </td>
                                <td className=" text-xs text-gray-400 " >32 in stock</td>
                                <td className=" " >$ 45.99</td>
                                <td className=" px-8">20</td>
                                
                            </tr> 
                            <tr  className=" font-semibold  text-sm hover:bg-primary_hover rounded-xl " >
                            
                                <td className="py-1 font-bold  flex items-center mx-4 gap-4" >
                                    <div>
                                        <img src="../logo512.png" className="h-10 w-10 border rounded-lg " alt="" />
                                    </div>
                                    <div className="flex  flex-col">
                                      <h1 className="text-lg">Denim</h1>
                                      <h1 className="text-xs text-gray-400 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                    </div>
                                </td>
                                <td className=" text-xs text-gray-400 " >32 in stock</td>
                                <td className=" " >$ 45.99</td>
                                <td className=" px-8">20</td>
                                
                            </tr> 
                            

                
                  
                   
                   
                 
                    
                </tbody>
                
                   
            </table>


    </div>
}