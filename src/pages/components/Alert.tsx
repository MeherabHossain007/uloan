/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

type AlertProps = {
  children: React.ReactNode;
  title: string;
  message: string;
  state: boolean;
};

export default function Alert({ children, title, message, state }: AlertProps) {
  return (
    <div className="mx-auto w-full ">
      <div className="flex flex-col rounded-lg p-5 shadow">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block rounded-full p-4">
            {state === true && (
              <Image src="/logo/check.png" alt="" height={50} width={50} />
            )}
            {state === false && (
              <Image src="/logo/cross.png" alt="" height={50} width={50} />
            )}
          </div>
          <h2 className="font-semibol mt-2 text-white">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            {message}
          </p>
        </div>
        <div className="mt-12 flex items-center">{children}</div>
      </div>
    </div>
  );
}
