import React from "react";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full h-16 bg-gray-200">
      <nav className="container mx-auto px-6 md:px-0 flex items-center justify-between">
        <a className="text-xl font-bold text-black no-underline" href="#">
          <img
            src="C:\DabbaReact\example\public\assests\Logo.jpg"
            className="inline-block h-6 align-top"
            alt="not w"
          />
          example
        </a>
        <ul className="flex items-center">
          <li className="mr-6 py-5 ">
            <a className="text-black hover:text-gray-400" href="home">
              Home
            </a>
          </li>
          <li className="mr-6">
            <a className="text-black hover:text-gray-400" href="about">
              About
            </a>
          </li>
          <li className="mr-6">
            <a className="text-black hover:text-gray-400" href="contact">
              Contact
            </a>
          </li>
          <li className="mr-6">
            <a
              className="bg-gray-500 rounded-lg px-2 py-1 text-white hover:text-gray-400"
              href="signin"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              className="bg-gray-500 rounded-lg px-2 py-1 text-white hover:text-gray-400"
              href="signup"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
