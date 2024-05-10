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
      document.getElementById("welcome").classList.remove("invisible");
      document.getElementById("searchbox").classList.remove("invisible");
      document.getElementById("comp").classList.add("hidden");
      setPreviousOrder(false);
    } else {
      document.getElementById("previousorder").innerText = "Dashboard";
      document.getElementById("welcome").classList.add("invisible");
      document.getElementById("searchbox").classList.add("invisible");
      document.getElementById("comp").classList.remove("hidden");
      setPreviousOrder(true);
    }
  }
  function handlelogout() {
    navigate("/home");
  }
  return (
    <div className="fixed top-3 rounded-2xl z-40 w-full text h-12 bg-gray-200">
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
          <div className="absolute left-1/2 -translate-x-1/2">
            welllcome! user_name
          </div>
          <div className="mx-2 flex row-auto">
            <div
              onClick={handleclick}
              id="previousorder"
              className="bg-blue-500 text-white px-2 py-0 rounded-md"
            >
              previous_orders
            </div>
            <div>
              <UserLogoutMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNavbar;
