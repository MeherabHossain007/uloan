import React, { ChangeEventHandler } from "react";

export interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  required?: boolean;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
}
export default function TextInput({
  onChange,
  value,
  required = false,
  label,
  type,
  name,
  placeholder,
}: IProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}
