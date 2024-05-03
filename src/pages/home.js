import React from "react";
import Header from '../components/header';
import Dummy from '../components/dummy';
import AnotherDummy from '../components/anotherDummy';
import Footer from '../components/footer';
import "../App.css";

function Home(){
    return (
    <div className="App">
      <Header/>
      <Dummy/>
      {/* <AnotherDummy/> */}
      <Footer/>
    </div>
    );
}

export default Home;