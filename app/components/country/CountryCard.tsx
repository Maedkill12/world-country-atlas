"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Info from "./Info";

type Props = {
  country: Country;
};

export default function CountryCard({
  country: { name, region, capital, flags, population },
}: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/${name.common}`)}
      className="flex flex-col gap-3 bg-white dark:text-white dark:bg-[#2B3743] rounded-md overflow-hidden shadow-md dark:shadow-gray-800 shadow-gray-200 cursor-pointer"
    >
      <div className="relative w-full h-[150px]">
        <Image
          src={flags["png"]}
          alt={flags["alt"]}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-6 pb-10">
        <h2
          className="font-bold leading-10 truncate text-md"
          title={name.common}
        >
          {name.common}
        </h2>
        <div>
          <Info tag="Population" value={population.toLocaleString()} />
          <Info tag="Region" value={region} />
          <Info tag="Capital" value={capital[0]} />
        </div>
      </div>
    </div>
  );
}
