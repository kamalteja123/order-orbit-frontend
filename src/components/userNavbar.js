import React, { useState } from "react";
import Logo from "../assests/Logo.png";

function UserNavbar() {
  const [previousOrder, setPreviousOrder] = useState(false);
  function handleclick() {
    if (previousOrder) {
        document.getElementById("welcome").classList.remove("invisible");
        document.getElementById("searchbox").classList.remove("invisible");
        document.getElementById("comp").classList.add("hidden");        
      setPreviousOrder(false);
    } else {
      document.getElementById("welcome").classList.add("invisible");
      document.getElementById("searchbox").classList.add("invisible");
      document.getElementById("comp").classList.remove("hidden");
      setPreviousOrder(true);
    }
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
          <div className="mr-6">
            <button onClick={handleclick}>previous_orders</button>
          </div>
          <div className="mr-7">logout</div>
        </div>
      </div>
    </div>
  );
}

export default UserNavbar;
