import React from "react";
import Navbar from "../components/navbar";
import UserSignInDialog from "../components/UserSigninDialog";
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
