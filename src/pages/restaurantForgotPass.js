import React from "react";
import Navbar from '../components/navbar';
import ForgotPassDialog from '../components/forgotPassDialog';
import Footer from '../components/footer';



function RestaurantForgotPassword(){
    return (
    <div>
      <Navbar/>
      <ForgotPassDialog role="restaurent"/>           
      <Footer/>
    </div>
    );
}

export default RestaurantForgotPassword;