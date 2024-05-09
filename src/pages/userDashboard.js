import React from "react";
import UserNavbar from "../components/userNavbar";
import Footer from "../components/footer";
import SearchBox from "../components/searchBox";
import Welcome from "../components/welcome";
import YourComp from "../components/anotherDummy";
import PreviourOrders from "../components/previousOrders";

function UserDash() {
  return (
    <div>
      <UserNavbar />
      <Welcome/>
      <SearchBox/>
      <YourComp/>
      {/* <PreviourOrders/> */}
      <Footer />
    </div>
  );
}

export default UserDash;
