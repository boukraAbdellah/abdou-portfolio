"use client";

import { useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 bg-white dark:bg-outerbg w-full  font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-[4.5rem]">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="text-2xl uppercase font-bold font-poppins text-gray-800 dark:text-gray-100"
            >
              {"{Abdou}"}
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden uppercase sm:flex sm:items-center sm:gap-4">
            <a
              href="#about"
              className="px-3 py-1 rounded-md text-base font-medium text-gray-700 nav__item "
            >
              About
            </a>
            <a
              href="#projects"
              className="px-3 py-1 rounded-md text-base font-medium text-gray-700 nav__item "
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-1 rounded-md text-base font-medium text-gray-700 nav__item"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <IoClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <IoMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden z-50 translate-y-6 transition-all duration-500 ease-in-out ${
          isOpen ? "h-[90vh] opacity-100 translate-y-0" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:!text-gray-900 dark:text-gray-400 hover:bg-gray-50"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:!text-gray-900 dark:text-gray-400 hover:bg-gray-50"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:!text-gray-900 dark:text-gray-400 hover:bg-gray-50"
          >
            Contact
          </a>
          <div className=" w-full h-1 bg-gray-300   rounded-full"></div>
        </div>
        <div className=" flex items-center mt-2 ml-5 justify-start gap-3">
          <a
            href={"/"}
            className="hover:scale-110 transition border-[3px] border-gray-500 dark:border-gray-300 rounded-full w-10 h-10 flex-center"
          >
            <FaGithub className=" block h-5  w-5 text-gray-700 dark:text-gray-300 " />
          </a>
          <a
            href={"/"}
            className="hover:scale-110 transition border-[3px] border-gray-500 dark:border-gray-300 rounded-full w-10 h-10 flex-center"
          >
            <FaLinkedinIn className=" block h-5  w-5 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href={"/"}
            className="hover:scale-110 transition border-[3px] border-gray-500 dark:border-gray-300 rounded-full w-10 h-10 flex-center"
          >
            <FaInstagram className=" block h-5  w-5 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
