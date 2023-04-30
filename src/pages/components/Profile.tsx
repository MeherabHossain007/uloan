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
  unid?:string;
  genders?: string;
  nid?: string;

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
  unid,
  nid,
  genders,
}: CardProps) {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-6 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
        <div className="grid grid-cols-1 grid-rows-1 gap-4 mb-6">
          <div className="flex w-full h-fit bg-gradient-120 from-[#18A6F5] to-[#4D43D6] bg-bottom bg-white rounded-3xl justify-between items-center">
            <div className="flex w-full justify-between items-center rounded-3xl px-6">
              <div className="flex flex-col space-y-1 justify-between h-full py-5">
                <div className="p-4 flex w-full rounded-lg">
                  <div className="w-96">
                    <div className=" font-bold text-lg text-white">{title}</div>
                    <div className=" text-3xl font-light text-white">
                      {name}
                    </div>
                    <div className=" font-semibold text-base text-white">
                      {type}
                    </div>
                    <div className=" font-semibold text-base text-white">
                      {uni}
                    </div>
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
                  <span className="font-bold text-sm rounded-md bg-white/20 text-white px-3 py-1">
                    NID: {nid}
                  </span>
                  <span className="font-bold text-sm rounded-md bg-white/20 text-white px-3 py-1">
                    University Id: {unid}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
