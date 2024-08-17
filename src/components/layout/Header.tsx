"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {


  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b-2 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold px-8 text-gray-800">ChatGPT Simulation</div>
        <div className="flex items-center">
          <button className="bg-light-gray text-dark-gray hover:text-white px-4 py-2 mx-4 rounded-lg hover:bg-dark-gray">
            Login | SignUp
          </button>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
