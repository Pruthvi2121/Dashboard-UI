import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import {IoIosArrowForward } from "react-icons/io";
import { Sidebardata } from "./Sidebardata";
import { Disclosure, Transition } from "@headlessui/react";
export const SideBar = () => {
  return (
    <>
      <div className="w-64 bg-[#040440] text-white">
        <div className="flex m-4 text-2xl   font-semibold items-center gap-2">
          <RiSettingsLine className="mt-1" size={"30px"} />
          <h1 className="">Dashboard</h1>
        </div>
        <ul className="text-lg flex flex-col items-center mx-4">
          {
            Sidebardata.map((item, i)=>(
              <Disclosure>
            {({ open }) => (
              /* Use the `open` state to conditionally change the direction of an icon. */
              <>
                <Disclosure.Button className="flex items-center py-2 my-2 px-4 rounded-lg w-full gap-2 hover:bg-[#8d72d92d]">
                  <span className="text-sm">{item.icon}</span>
                  <h6 className="text-sm">{item.title}</h6>
                  <IoIosArrowForward  className={open ? 'rotate-90 transform ml-auto duration-200' : 'ml-auto duration-200'} />
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel>No</Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

            ))
          }
          
        </ul>
      </div>

      {/* mobile */}
      <div></div>
    </>
  );
};
