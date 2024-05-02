import React from "react";
import Header from '../components/header';
import Dummy from '../components/dummy';
import AnotherDummy from '../components/anotherDummy';
import Footer from '../components/footer';

function Home(){
    return (
    <div>
      <Header/>
      {/* <Dummy/> */}
      <AnotherDummy/>
      <Footer/>
    </div>
    );
}

export default Home;