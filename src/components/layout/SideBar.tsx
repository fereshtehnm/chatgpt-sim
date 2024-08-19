"use client";

import React, { useState } from "react";
import Image from "next/image";
import { historyItems } from "@/constants";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="fixed top-3 left-2 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        <Image src="/history.svg" width={35} height={35} alt="user" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-light-gray border-r-2 z-40 overflow-y-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="p-4">
          {/* Close Button for Mobile */}
          <button
            className="md:hidden mb-4 text-gray-800"
            onClick={toggleSidebar}
          >
            <i className="fas fa-times"></i> Close sidebar
          </button>

          <h2 className="text-xl font-semibold text-gray-700 mb-4">History</h2>
          <ul>
            {historyItems.map((item) => (
              <li key={item.id} className="mb-2">
                <a
                  href={item.url}
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
