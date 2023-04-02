import React from "react";

type ButtonProps = {
  name: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function DashButton({ name, onClick , children }: ButtonProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {children}
        <span className="ml-3">{name}</span>
      </button>
    </li>
  );
}
