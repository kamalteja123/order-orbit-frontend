import React from "react";
import Navbar from '../components/navbar';
import Dummy from '../components/dummy';
import YourComp from '../components/anotherDummy';
import Footer from '../components/footer';
import GradientCover from "../components/Card";
import SearchBox from "../components/searchBox";
import CloseIcon from "../components/closeIcon";
import Welcome from "../components/welcome";
import "../App.css";

function Home(){
    return (
    <div className="App">
      <Navbar/>
      {/* <Dummy/> */}
      <Welcome/>
      {/* <YourComp/> */}
      <SearchBox/>
      {/* <AnotherDummy/> */}
      <Footer/>
    </div>
    );
}

export default Home;