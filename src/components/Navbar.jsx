import React, { useState } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState("none");
  function handleClick() {
    if (toggle === "none") {
      setToggle("block");
    } else setToggle("none");
  }

  return (
    <nav className="relative  bg-rose-100 px-2 sm:px-4 py-2.5 dark:bg-rose-900  w-full z-20 top-0 left-0  border-b border-rose-200 dark:border-rose-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
          <span className="text-rose-800 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Cake Delights
          </span>
        </Link>
        <div className="flex">
          <div className="hidden md:block">
          <Link to="/signup">
            <button
              type="button"
              className="mx-2 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="mx-2 text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
            >
              Login
            </button>
          </Link>
          </div>
          <button
            onClick={handleClick}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-rose-500 rounded-lg md:hidden hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:text-rose-400 dark:hover:bg-rose-700 dark:focus:ring-rose-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* <div style={{ display: toggle }} className="absolute top-14 right-2">
            <ul className="w-36 text-sm font-medium text-rose-900 bg-white border border-rose-200 rounded-lg dark:bg-rose-700 dark:border-rose-600 dark:text-white">
              <li className="w-full px-4 py-2 border-b border-rose-200 dark:border-rose-600">
                Cart
              </li>
              <li className="w-full px-4 py-2 border-b border-rose-200 dark:border-rose-600">
                Services
              </li>
              <li className="w-full px-4 py-2 border-b border-rose-200 dark:border-rose-600">
                Contact Us
              </li>
            </ul>
          </div> */}
        </div>
        <div
          style={{ display: toggle }}
          className=" items-center justify-between w-full md:flex md:w-auto z-10 sm:absolute sm:top-10 sm:right-0"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-rose-100 rounded-lg bg-rose-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-rose-800 md:dark:bg-rose-900 dark:border-rose-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-rose-700 rounded md:bg-transparent md:text-rose-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 text-rose-700 rounded hover:bg-rose-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 md:dark:hover:text-white dark:text-rose-400 dark:hover:bg-rose-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-rose-700"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block py-2 pl-3 pr-4 text-rose-700 rounded hover:bg-rose-100 md:hover:bg-transparent md:hover:text-rose-700 md:p-0 md:dark:hover:text-white dark:text-rose-400 dark:hover:bg-rose-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-rose-700"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
