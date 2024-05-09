import React from "react";
import Navbar from "../components/navbar";
import RestaurantSignUpDialog from "../components/restaurantSignupDialog";
import Footer from "../components/footer";
import CloseIcon from "../components/closeIcon";

function restaurantSignup() {
  return (
    <div>
      <Navbar />
      <RestaurantSignUpDialog />
      <CloseIcon />
      <Footer />
    </div>
  );
}

export default restaurantSignup;
