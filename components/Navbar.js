"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full  font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-[4.5rem]">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl uppercase font-bold font-poppins text-gray-800"
            >
              {"{Abdou}"}
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden uppercase sm:flex sm:items-center sm:gap-4">
            <Link
              href="/about"
              className="px-3 py-1 rounded-md text-base font-medium text-gray-700 nav__item "
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-3 py-1 rounded-md text-base font-medium text-gray-700 nav__item "
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1 rounded-md text-base font-medium text-gray-700 nav__item"
            >
              Contact
            </Link>
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
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-[90vh] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </Link>
          <div className=" w-full h-1 bg-gray-300   rounded-full"></div>
        </div>
        <div className=" flex items-center mt-2 ml-5 justify-start gap-3">
          <Link
            href={"/"}
            className="hover:scale-110 transition border-[3px] border-gray-500 rounded-full w-10 h-10 flex-center"
          >
            <Github className=" block h-5  w-5 text-gray" fill="#f2f2f2" />
          </Link>
          <Link
            href={"/"}
            className="hover:scale-110 transition border-[3px] border-gray-500 rounded-full w-10 h-10 flex-center"
          >
            <Linkedin className=" block h-5  w-5 text-gray" fill="#f2f2f2" />
          </Link>
          <Link
            href={"/"}
            className="hover:scale-110 transition border-[3px] border-gray-500 rounded-full w-10 h-10 flex-center"
          >
            <Instagram className=" block h-5  w-5 text-gray" fill="#f2f2f2" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
