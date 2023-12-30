import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between bg-slate-200">
      <div>
        <Image src="/nav.png" alt="TrekBag Logo" width={100} height={100} />
      </div>
      <div className="flex justify-center items-center pr-4">
        <p className="font-bold text-sm">1/3 Items Packed</p>
      </div>
    </header>
  );
}
