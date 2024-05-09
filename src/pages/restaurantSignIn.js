import React from "react";
import Navbar from "../components/navbar";
import RestaurantSignInDialog from "../components/restaurantSigninDialog";
import CloseIcon from "../components/closeIcon";

function RestaurantSignin() {
  return (
    <div>
      <Navbar />
      <RestaurantSignInDialog />
      <CloseIcon />
    </div>
  );
}

export default RestaurantSignin;
