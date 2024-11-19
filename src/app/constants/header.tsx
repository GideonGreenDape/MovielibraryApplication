import React from "react";

const Header: React.FC = () => {
  return (
 
      <header className="bg-transparent text-white py-4 px-8 flex justify-between items-center shadow-md rounded-b-lg">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <span className="text-blue-500">Flix</span>.id
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Movie
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Series
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Originals
          </a>
        </nav>

        {/* Search and Profile */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <button
            className="p-2 bg-[#c19fe0] rounded-ful transition duration-300"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm">
              SJ
            </div>
            <div className="text-sm">
              <p className="font-medium">Sarah J</p>
              <p className="text-xs text-blue-400">Premium</p>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header
