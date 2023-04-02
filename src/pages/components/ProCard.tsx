import React from "react";
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

export default function ProCard({
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
    <div className="border-2 flex w-full h-fit bg-white rounded-3xl justify-between items-center px-6">
      <div className="flex flex-col space-y-1  justify-between h-full py-5">
        <div>
          <div className=" font-bold text-lg">{title}</div>
          <div className=" text-3xl font-light">{name}</div>
          <div className=" font-semibold text-base text-slate-500">{type}</div>
          <div className=" font-semibold text-base text-slate-500">{uni}</div>
        </div>
        <div className=" h-5"></div>
        <div className="flex flex-col space-y-3">
          <span className="text-black font-bold text-sm rounded-md bg-slate-200 px-3 py-1">
            Mobile: {mobile}
          </span>
          <span className="text-black font-bold text-sm rounded-md bg-slate-200 px-3 py-1">
            Email: {email}
          </span>
        </div>
      </div>
      {genders == "male" && (
        <Image src={mimage} alt={"Logo"} height={150} width={150} />
      )}
      {genders == "female" && (
        <Image src={fimage} alt={"Logo"} height={150} width={150} />
      )}
    </div>
  );
}
