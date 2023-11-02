import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// --------------------
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <header className="shadow sticky z-50 top-0 max-[480px]:m-0 max-[480px]:p-0">
      <nav className=" bg-gray-100 border-gray-200 px-4 lg:px-6 py-2.5 lg:mb-5 ">
        <div className="  flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to="/">
            <div className="italic font-sans text-5xl font-extrabold  max-[480px]:italic max-[480px]:font-sans max-[480px]:text-2xl max-[480px]:font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800">
                printcafe
              </span>
            </div>
          </Link>
          <div className="max-[480px]:hidden flex items-center order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-blue-400 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Get started
            </Link>
          </div>
          <div
            className="hidden lg:justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-400" : ""
                    }border-b border-black-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-400" : ""
                    }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                  }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-400" : ""
                    }border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 lg:p-0`
                  }>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          {/* ----------------------------------------------------------------------------- */}

          <div className="hidden max-[480px]:grid max-[480px]:place-items-end max-[480px]:bg-gradient-to-r max-[480px]:to-indigo-600 max-[480px]:h-[20px] max-[480px]:mr-[-28px] max-[480px]:ml-[27px]">
            <div className="relative flex flex-col items-end w-full h-full rounded-lg mr-4 pl-[5px] ml-[-15px]">
              <button
                onClick={() => {
                  setIsopen((prev) => !prev);
                }}
                className="bg-slate-200 w-full flex items-end justify-between font-bold text-lg rounded tracking-wider border- border-transparent active:border-white duration-300 active:text-white">
                <AiOutlineMenu className=" h-8" />
                {!isOpen ? (
                  <AiOutlineCaretDown className="h-8" />
                ) : (
                  <AiOutlineCaretUp className="h-8" />
                )}
              </button>
              {isOpen && (
                <div className="bg-slate-200 w-[80px] absolute top-10 left-0 flex flex-col items-end rounded-lg p-2 ml-[-27px]">
                  <div className="flex flex-col items-end justify-betweencursor-pointer rounded-r-lg border-l-transparent">
                    <Link to="/" className="hover:bg-blue-300">
                      Home
                    </Link>
                    <Link to="/about" className="hover:bg-blue-300">
                      About
                    </Link>
                    <Link to="/contact" className="hover:bg-blue-300">
                      Contact
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
