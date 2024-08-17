"use client";

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b-2 py-2 z-50">
      <div className="container mx-auto flex justify-between items-center px-2">
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="text-xl font-semibold text-gray-800">
            ChatGPT Simulation
          </div>
        </div>
        <div className="flex justify-end">
          <Image src="/user.svg" width={40} height={40} alt="user" />
        </div>
      </div>
    </header>
  );
};

export default Header;
