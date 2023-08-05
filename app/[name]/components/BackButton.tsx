import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="flex flex-row justify-center items-center gap-4 px-4 py-1 bg-white dark:bg-[#2B3743] shadow-md dark:shadow-gray-800 shadow-gray-200"
    >
      <IoIosArrowRoundBack size={26} />
      <span className="font-light">Back</span>
    </Link>
  );
}
