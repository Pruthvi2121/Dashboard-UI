import React from "react";

export const Notification  = ()=>{
    return <div className="flex  bg-primary_hover absolute w-full h-full">
            <div className="my-auto mx-2">
            <img src="../logo512.png" className="h-6 w-6 border rounded-lg " alt="" />
            </div>
            <div className="text-xs my-auto">
                <h1>Evano</h1>
                <h1 className="text-gray-400">Project Manager</h1>
            </div>

    </div>
}