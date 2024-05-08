import React from "react";
import Header from "../components/header";
import Dummy from "../components/dummy";
import UserSignInDialog from "../components/UserSigninDialog";
import Footer from "../components/footer";
import CloseIcon from "../components/closeIcon";

function UserSignin() {
  return (
    <div>
      <Header />
      <UserSignInDialog />
      <CloseIcon />
    </div>
  );
}

export default UserSignin;
