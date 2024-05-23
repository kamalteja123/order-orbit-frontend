import React from "react";
import Navbar from '../components/navbar';
import ForgotPassDialog from '../components/forgotPassDialog';
import Footer from '../components/footer';



function UserForgotPassword(){
    return (
    <div>
      <Navbar/>
      <ForgotPassDialog role="customer"/>           
      <Footer/>
    </div>
    );
}

export default UserForgotPassword;