import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <nav className="w-full bg-black rounded-lg px-4 py-3 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <img
            width={40}
            height={40}
            className="rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3h5NjUwl1iqlCJ7cnPQFX3tM6R9lX3_8q82IzK31RYpEswdbY2wMyfQ&s=10"
            alt="Logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-5 text-sm font-semibold text-white sm:gap-6 sm:text-base">
          <p   onClick={() => setToggle(false)} className="cursor-pointer hover:text-blue-400">Home</p>
          <p className="cursor-pointer hover:text-blue-400">About</p>
          <p className="cursor-pointer hover:text-blue-400">Contact</p>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center sm:justify-end">
          <button
            onClick={() => setToggle(true)}
            className="w-full rounded-md bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto sm:text-base"
          >
            Apply Now
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;