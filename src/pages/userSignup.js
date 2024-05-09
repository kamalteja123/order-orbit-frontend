import React from "react";
import Navbar from "../components/navbar";
import Dummy from "../components/dummy";
import UserSignUpDialog from "../components/userSignupDialog";
import Footer from "../components/footer";
import CloseIcon from "../components/closeIcon";

function UserSignup() {
  return (
    <div>
      <Navbar />
      <UserSignUpDialog />
      <CloseIcon />
      <Footer />
    </div>
  );
}

export default UserSignup;
