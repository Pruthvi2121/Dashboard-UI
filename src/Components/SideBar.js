import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import {IoIosArrowForward } from "react-icons/io";
import { Sidebardata } from "./Sidebardata";
import { Disclosure, Transition } from "@headlessui/react";
import { Notification } from "./Notification";
import { Popover } from '@headlessui/react'
export const SideBar = () => {
  return (
    <>
      <div className="w-64  bg-primary text-white hidden lg:block">
        <div className="flex m-4  text-2xl   font-semibold items-center gap-2">
          <RiSettingsLine className="mt-1" size={"30px"} />
          <h1 className="">Dashboard</h1>
        </div>
        <ul className="text-lg flex flex-col items-center mx-4 h-screen">
          {
            Sidebardata.map((item, i)=>(
              <Disclosure>
            {({ open }) => (
              /* Use the `open` state to conditionally change the direction of an icon. */
              <>
                <Disclosure.Button className="flex items-center py-2 my-1 px-4 rounded-lg w-full gap-2 hover:bg-primary_hover">
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
        <div className="fixed bottom-4   w-56 mx-2 rounded-md h-10 ">
          <Notification/>
          </div>
      </div>

          
      {/* mobile */}
      <div className="block lg:hidden fixed left-4 top-4 z-50 w-full">
      <Popover >
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <Popover.Button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

          </Popover.Button>
          <Popover.Panel className=" mx-8 bg-white rounded-xl p-4">
          <ul className="text-lg flex flex-col items-center mx-4">
          {
            Sidebardata.map((item, i)=>(
              <Disclosure>
            {({ open }) => (
              /* Use the `open` state to conditionally change the direction of an icon. */
              <>
                <Disclosure.Button className="flex items-center py-2 my-1 px-4 rounded-lg w-full gap-2 hover:bg-primary_hover">
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
          </Popover.Panel>
        </>
      )}
    </Popover>

      </div>
    </>
  );
};
