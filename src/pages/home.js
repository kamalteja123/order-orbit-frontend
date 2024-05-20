import React from "react";
import Navbar from '../components/navbar';
import Dummy from '../components/dummy';
import Footer from '../components/footer';
import SearchBox from "../components/searchBox";
import CloseIcon from "../components/closeIcon";
import Welcome from "../components/welcome";
import "../App.css";
import MediaCard from "../components/cards";

function Home(){
    return (
    <div className="App">
      <Navbar/>
      {/* <Dummy/> */}
      <Welcome/>
      <MediaCard/>
      {/* <YourComp/> */}
      {/* <SearchBox/> */}
      {/* <AnotherDummy/> */}
      <Footer/>
    </div>
    );
}

export default Home;