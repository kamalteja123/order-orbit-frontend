import React, { useState } from "react";
import Logo from "../assests/Logo.png";
import { useNavigate } from "react-router-dom";
import UserLogoutMenu from "./userLogoutMenu";

function UserNavbar() {
  const [previousOrder, setPreviousOrder] = useState(false);
  const navigate = useNavigate();
  function handleclick() {
    if (previousOrder) {
      document.getElementById("previousorder").innerText = "Previous Orders";
      // document.getElementById("welcome").classList.remove("invisible");
      // document.getElementById("searchbox").classList.remove("invisible");
      // document.getElementById("comp").classList.add("hidden");
      setPreviousOrder(false);
    } else {
      document.getElementById("previousorder").innerText = "Dashboard";
      setPreviousOrder(true);
    }
  }
  function handlelogout() {
    navigate("/home");
  }
  return (
    <div className="fixed top-3 rounded-2xl z-40 w-full text h-12 bg-nav">
      <div className="container mx-auto px-6 md:px-0 flex items-center justify-between ">
        <a className="text-xl font-bold text-black no-underline" href="#">
          <img
            src={Logo}
            className="inline-block h-8 align-top pr-1 rounded-md"
            alt="not working"
          />
          <span className="LogoFont">Order_Flow</span>
        </a>
        <div className="flex items-center sm:text-xs md:text-base lg:text-lg h-12">
          <div className="absolute left-1/2 ">
            Welcome!
          </div>
          <div className="mx-2 flex row-auto">
            {/* <div
              onClick={handleclick}
              id="previousorder"
              className=" text-black rounded-md hover:cursor-pointer hover:scale-105"
            >
              previous_orders
            </div> */}
            <div className="ml-4">
              <UserLogoutMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNavbar;
