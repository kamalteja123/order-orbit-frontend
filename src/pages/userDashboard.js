import React from "react";
import UserNavbar from "../components/userNavbar";
import Footer from "../components/footer";
import SearchBox from "../components/searchBox";
import img from "../assests/BG.jpg";
import PreviourOrders from "../components/previousOrders";

function UserDash() {
  return (
    <div>
      <UserNavbar />
      <img src={img} alt="bg"></img>
      <SearchBox/>
      {/* <PreviourOrders/> */}
      <Footer />
    </div>
  );
}

export default UserDash;
