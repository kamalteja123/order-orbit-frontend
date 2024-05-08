import React from "react";
import Header from "../components/header";
import Dummy from "../components/dummy";
import UserSignUpDialog from "../components/userSignupDialog";
import Footer from "../components/footer";
import CloseIcon from "../components/closeIcon";

function UserSignup() {
  return (
    <div>
      <Header />
      <UserSignUpDialog />
      <CloseIcon />
      <Footer />
    </div>
  );
}

export default UserSignup;
