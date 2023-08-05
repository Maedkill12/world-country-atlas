"use client";

import { BiChevronDown } from "react-icons/bi";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

type Props<T extends string> = {
  list: T[];
  onClick: (value: T) => void;
};

export default function Dropdown<T extends string>({
  list = [],
  onClick,
}: Props<T>) {
  const router = useRouter();

  return (
    <Menu as="div" className="relative z-10 sm:h-full">
      <div className="w-1/2 sm:w-44 bg-white shadow-md dark:shadow-gray-800 shadow-gray-200 dark:bg-[#2B3743] h-14 px-2 sm:h-full rounded-md dark:text-white">
        <Menu.Button className="flex flex-row items-center justify-between w-full h-full">
          <p>Filter by Region</p> <BiChevronDown />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute block top-16 w-1/2 sm:w-44 bg-white dark:bg-[#2B3743] rounded-md shadow-md dark:shadow-gray-800 shadow-gray-200 dark:text-white">
          {list.map((item: T) => (
            <Menu.Item key={item}>
              {({ active }) => (
                <div
                  onClick={() => onClick(item)}
                  className={`px-3 cursor-pointer py-2 ${
                    active ? "dark:bg-[#202D36] bg-[#FAFAFA]" : ""
                  }`}
                >
                  <p className="capitalize">{item}</p>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
