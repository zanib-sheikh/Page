import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react"; // Import icons
import Link from "../assets/Link.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <>
      {/* Responsive Header (Hidden on small screens) */}
      <header className="hidden md:block bg-transparent px-3 mt-2 mx-2 font-montserrat rounded-lg text-white py-2 relative z-20">
  <div className="bg-[#706FAB] px-4 py-2 rounded-lg w-full">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-3 w-full">
      
      {/* Phone Number - Starts Exactly at the Left Edge */}
      <div className="text-lg text-left w-auto">
        <span>+2329484628486</span>
      </div>

      {/* Spacer to Push Search Bar to the Right */}
      <div className="flex-1"></div>

      {/* Search Bar - Pushed to the Right */}
      <div className="relative w-full md:w-[319px]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 w-full h-[38px] py-2 rounded-lg bg-white text-gray-800 focus:outline-none"
        />
      </div>
    </div>
  </div>
</header>


      {/* Navbar */}
      <nav className="absolute top-[70px] font-kanit z-20 left-0 w-full bg-transparent">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src={Link} alt="Logo" className="w-10 h-10" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 pr-8 text-white font-roboto ml-auto">
  <li className="hover:text-green-500 cursor-pointer">Home</li>
  <li className="hover:text-green-500 cursor-pointer">About Us</li>
  <li className="hover:text-green-500 cursor-pointer">FALA</li>
  <li className="hover:text-green-500 cursor-pointer">LIN</li>
  <li className="hover:text-green-500 cursor-pointer">TV</li>
  <li className="hover:text-green-500 cursor-pointer">Our Impact</li>
  <li className="hover:text-green-500 cursor-pointer">Media</li>
  <li className="hover:text-green-500 cursor-pointer">Blog</li>
</ul>

<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="bg-transparent text-white  rounded-lg"
>
          {/* Button (Hidden on small screens) */}
          <button className="hidden md:block bg-[#76B99A] text-white px-4 py-2 rounded-md hover:bg-green-500 transition">
            Give Now
          </button>
          </motion.button>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>

        {/* Mobile Navigation (Collapsible Menu) */}
        <div
          className={`md:hidden fixed top-[100px] left-0 w-full bg-[#706FAB] text-white transition-transform transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <ul className="text-center py-4 space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About Us</li>
            <li className="hover:text-gray-300 cursor-pointer">FALA</li>
            <li className="hover:text-gray-300 cursor-pointer">LIN</li>
            <li className="hover:text-gray-300 cursor-pointer">TV</li>
            <li className="hover:text-gray-300 cursor-pointer">Our Impact</li>
            <li className="hover:text-gray-300 cursor-pointer">Media</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            <li>
              <button className="bg-[#76B99A] text-white px-4 py-2 mt-2 rounded-md hover:bg-green-500 transition">
                Give Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
