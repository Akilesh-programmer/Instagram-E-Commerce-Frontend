// src/components/Header.jsx
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingBag,
  FaUser,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top offer bar */}
      <div className="bg-indigo-950 text-center text-white py-4 text-sm font-medium">
        <span className="font-semibold">Welcome Offer:</span> Get{" "}
        <span className="italic font-semibold">$20 Off</span> Your First
        Purchase Today!!!!
      </div>

      {/* Main Header */}
      <header className="bg-gray-50 text-gray-800 px-12 py-6 flex justify-between items-center shadow-md relative">
        {/* Logo and TShirt label */}
        <div className="flex items-center space-x-12">
          <div className="text-xl font-bold text-purple-700">
            ABC <span className="font-semibold">trader</span>
          </div>
          <div className="text-xl text-gray-600 font-medium">TShirt</div> {/* Updated label size */}
        </div>

        {/* Hamburger */}
        <div
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          <a href="#" className="hover:text-purple-600 font-medium">
            Tshirt
          </a>
          <FaSearch className="text-xl cursor-pointer" />
          <FaShoppingBag className="text-xl cursor-pointer" />
          <div className="flex items-center gap-3">
            <FaUser className="text-xl" />
            <span className="font-medium">Account</span>
          </div>
        </nav>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-50 flex flex-col items-start p-6 space-y-6 lg:hidden z-10 shadow-md">
            <a href="#" className="text-lg font-medium">
              Tshirt
            </a>
            <div className="flex items-center gap-3">
              <FaSearch className="text-lg" />
              <span>Search</span>
            </div>
            <div className="flex items-center gap-3">
              <FaShoppingBag className="text-lg" />
              <span>Bag</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUser className="text-lg" />
              <span>Account</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
