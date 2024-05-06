import React from "react";
import Header from '../components/header';
import Dummy from '../components/dummy';
import YourComp from '../components/anotherDummy';
import Footer from '../components/footer';
import "../App.css";
import GradientCover from "../components/Card";

function Home(){
    return (
    <div className="App">
      <Header/>
      {/* <Dummy/> */}
      <YourComp/>
      {/* <AnotherDummy/> */}
      <Footer/>
    </div>
    );
}

export default Home;