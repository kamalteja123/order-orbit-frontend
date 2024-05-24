import React from "react";
import Logo from "../assests/Logo.png";
import SignInMenu from "./signinMenu";
import SignUpMenu from "./signupMenu";

function Navbar() {
  return (
    <div className="fixed top-3 rounded-2xl z-40 w-full test h-12 bg-nav shadow">
      <div className="container mx-auto px-6 md:px-0 flex items-center justify-between ">
        <a className="text-xl font-bold text-black no-underline" href="#">
          <img src={Logo} className="inline-block h-8 align-top pr-1 rounded-md" alt="not working" />
          <span className="LogoFont">Order_Orbit</span>
        </a>
        <div className="flex items-center sm:text-xs md:text-base lg:text-lg h-12">
          <div className="mr-6">
            <SignInMenu/>
          </div>
          <div className="mr-7">
            <SignUpMenu/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
