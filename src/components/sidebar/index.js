import React from "react";
import { FaHome, FaMoneyBillWaveAlt } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { BsPeople, BsFillPeopleFill } from "react-icons/bs";

export const Sidebar = () => {

  const component = [
    { name: "Home", icon: <FaHome /> },
    { name: "Content", icon: <BiBookContent /> },
    { name: "Siswa", icon: <BsPeople /> },
    { name: "Petugas", icon: <BsFillPeopleFill /> },
    { name: "Pembayaran", icon: <FaMoneyBillWaveAlt /> },
  ];

  const counting = [
    { name: "Admin", count: "1" },
    { name: "Siswa", count: "488" },
    { name: "Petugas", count: "3" },
  ];

  return (
    <div className="h-screen border-r border-gray-200 w-64 px-9 space-y-16 warnaText">
      <div className="flex items-center pt-4 gap-2">
        <div className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center text-sm">
          Logo
        </div>
        <div className="">CMS</div>
      </div>
      <div className="space-y-24">
      <div className='mt-8'>
        <ul className="space-y-7">
          {component.map((row, index) => {
            return (
              <li key={index} className="flex flex-row items-center gap-3">
                <div>{row.icon}</div>
                <div>{row.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="space-y-7">
        <div className="">
          <div className="flex flex-col gap-3">
            {counting.map((row, index) => {
              return (
                <div key={index} className="flex gap-3 items-center justify-between warnaHijau py-2 px-4 rounded-full">
                  <div>{row.name}</div>
                  <div>{row.count}</div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        </div>
      </div>

  );
};
