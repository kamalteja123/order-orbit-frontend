import React from "react";
import Navbar from '../components/navbar';
import ForgotPassDialog from '../components/forgotPassDialog';
import Footer from '../components/footer';



function ForgotPassword(){
    return (
    <div>
      <Navbar/>
      <ForgotPassDialog />           
      <Footer/>
    </div>
    );
}

export default ForgotPassword;