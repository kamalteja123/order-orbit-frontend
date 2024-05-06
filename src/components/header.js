import React from "react";
import Logo from "../assests/Logo.jpg";

function Header() {
  return (
    <div className="fixed top-3 rounded-2xl z-50 w-full test h-12 bg-gray-200">
      <div className="container mx-auto px-6 md:px-0 flex items-center justify-between ">
        <a className="text-xl font-bold text-black no-underline" href="#">
          <img src={Logo} className="inline-block h-8 align-top pr-1 rounded-md" alt="not working" />
          Project
        </a>
        <div className="flex items-center sm:text-xs md:text-base lg:text-lg h-12">
          <div className="mr-6 py-5 ">
            <a className="text-black hover:text-gray-400" href="home">
              Home
            </a>
          </div>
          <div className="mr-6">
            <a className="text-black hover:text-gray-400 " href="about">
              About
            </a>
          </div>
          <div className="mr-6">
            <a className="text-black hover:text-gray-400" href="contact">
              Contact
            </a>
          </div>
          <div className="mr-6">
            <a className="bg-gray-500 rounded-lg px-2 py-1 text-white hover:text-gray-400" href="signin" >
              Sign In
            </a>
          </div>
          <div>
            <a className="bg-gray-500 rounded-lg px-2 py-1 text-white hover:text-gray-400" href="signup" >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
