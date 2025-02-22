"use client";

import Link from "next/link";
import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900 mr-2">JACE</span>
            <span className="hidden lg:inline-block text-xl  text-gray-900">
              (JOYDIP CHAKRABORTY)
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium border-b-2 border-transparent hover:border-black"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium border-b-2 border-transparent hover:border-black"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolios"
                  className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium border-b-2 border-transparent hover:border-black"
                >
                  Portfolios
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium border-b-2 border-transparent hover:border-black"
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="md:hidden"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            <div>
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {showMobileMenu && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              Blogs
            </Link>
            <Link
              href="/portfolios"
              className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              Portfolios
            </Link>
            <Link
              href="/about"
              className="text-gray-600 block px-3 py-2 text-base font-medium hover:bg-gray-50"
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
              }}
            >
              About Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
