import React from "react";
import Navbar from "../components/navbar";
import Dummy from "../components/dummy";
import UserSignInDialog from "../components/UserSigninDialog";
import Footer from "../components/footer";
import CloseIcon from "../components/closeIcon";

function UserSignin() {
  return (
    <div>
      <Navbar />
      <UserSignInDialog />
      <CloseIcon />
    </div>
  );
}

export default UserSignin;
