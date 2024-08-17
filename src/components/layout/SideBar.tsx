import React from "react";
import { historyItems } from '@/constants';

const SideBar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-200 border-r-2 z-40 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">History</h2>
        <ul>
          {historyItems.map((item) => (
            <li key={item.id} className="mb-2">
              <a href={item.url} className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-300">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
