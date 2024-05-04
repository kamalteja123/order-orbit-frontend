import React from "react";
import Header from "../components/header";
import Dummy from "../components/dummy";
import SignInDialog from "../components/signInDialog";
import Footer from "../components/footer";

function Signin() {
  return (
    <div>
      <Header />
      <SignInDialog />
      <Footer />
    </div>
  );
}

export default Signin;
