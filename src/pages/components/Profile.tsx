import React from "react";
import ProCard from "./ProCard";
import Image from "next/image";

type CardProps = {
  title: string;
  name: string;
  mobile?: string;
  fimage?: string;
  mimage?: string;
  email?: string;
  type?: string;
  uni?: string;
  genders?: string;
};
export default function Profile({
  title,
  name,
  mobile,
  fimage = "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/profile%20(1).png",
  mimage = "https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/profile.png",
  email,
  type,
  uni,
  genders,
}: CardProps) {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-1 grid-rows-1 gap-4 mb-6">
          <div className="flex w-full h-fit bg-hero-pattern bg-cover bg-white rounded-3xl justify-between items-center">
            <div className="flex w-full justify-between items-center backdrop-blur-sm rounded-3xl px-6">
              <div className="flex flex-col space-y-1 justify-between h-full py-5">
                <div>
                  <div className=" font-bold text-lg text-white">{title}</div>
                  <div className=" text-3xl font-light text-white">{name}</div>
                  <div className=" font-semibold text-base text-white">
                    {type}
                  </div>
                  <div className=" font-semibold text-base text-white">
                    {uni}
                  </div>
                </div>
                <div className=" h-5"></div>
                <div className="flex flex-col space-y-3">
                  <span className="font-bold text-sm rounded-md bg-white/20 text-white px-3 py-1">
                    Mobile: {mobile}
                  </span>
                  <span className="font-bold text-sm rounded-md bg-white/20 text-white px-3 py-1">
                    Email: {email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li className="w-full">
              <a
                href="#"
                className="font-bold inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                aria-current="page"
              >
                Your Requests
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className="font-bold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Pending Requests
              </a>
            </li>
            <li className="w-full">
              <a
                href="#"
                className=" font-bold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Accepted Request
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
