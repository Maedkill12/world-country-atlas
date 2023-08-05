"use client";

import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import Container from "./Container";
import Link from "next/link";

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-[#2B3743] dark:text-white shadow-md dark:shadow-gray-800 shadow-gray-200">
      <Container>
        <nav className="flex flex-row items-center justify-between w-full py-6">
          <h2 className="text-xl font-bold">
            <Link href="/">Where in the world?</Link>
          </h2>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={toggleTheme}
          >
            <div className="hidden dark:block">
              <BsFillMoonFill />
            </div>
            <div className="dark:hidden">
              <BsMoon />
            </div>
            <p className="font-semibold">Dark Mode</p>
          </div>
        </nav>
      </Container>
    </header>
  );
}
