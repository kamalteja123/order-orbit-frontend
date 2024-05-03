import React from "react";
import Header from '../components/header';
import ForgotPassDialog from '../components/forgotPassDialog';
import Footer from '../components/footer';



function ForgotPassword(){
    return (
    <div>
      <Header/>
      <ForgotPassDialog />           
      <Footer/>
    </div>
    );
}

export default ForgotPassword;