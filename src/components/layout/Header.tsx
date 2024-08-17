"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {


  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold px-8 text-gray-800">ChatGPT Simulation</div>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Login | SignUp
          </button>
          <button className="ml-4 text-gray-500 hover:text-gray-700">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
