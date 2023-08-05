"use client";

import { HiSearch } from "react-icons/hi";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export default function SearchInput({ value, setValue }: Props) {
  return (
    <div className="dark:bg-[#2B3743] bg-white dark:text-white rounded-md  w-full sm:w-2/5 shadow-md h-14 sm:h-full dark:shadow-gray-800 shadow-gray-200 flex items-center gap-4 pl-4">
      <HiSearch size={28} />
      <input
        className="flex-1 h-full px-2 py-4 overflow-hidden bg-transparent outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
}
