'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div
          className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer"
        >
          Portfolio
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 w-full lg:w-auto`}
        >
          <Link
            href="/"
            className="text-white px-4 py-2 hover:text-orange-600 text-center lg:text-left"
          >
            Home
          </Link>
          <Link
            href="/service"
            className="text-white px-4 py-2 hover:text-orange-600 text-center lg:text-left"
          >
            Service
          </Link>
          <Link
            href="/project"
            className="text-white px-4 py-2 hover:text-orange-600 text-center lg:text-left"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="text-white px-4 py-2 hover:text-orange-600 text-center lg:text-left"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="text-white px-4 py-2 hover:text-orange-600 text-center lg:text-left"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;