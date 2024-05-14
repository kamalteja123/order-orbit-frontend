import React from "react";
import BGimg from "../assests/BG.jpg";
import SignInMenu from "./signinMenu";
import SignUpMenu from "./signupMenu";

function Welcome() {
  function handleChange(e) {
    e.preventDefault();
    console.log(window.location.href);
  }
  return (
    <div>
      <img
        id="welcome"
        className="relative w-full h-screen overflow-hidden"
        src={BGimg}
        alt="not working"
      />
      <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gradient-to-b from-transparent via-60% via-transparent to-black">
      </div>
      <div className="absolute z-20 top-3/4 left-1/2 -translate-x-1/2  shadow-slate-500 text-white rounded-lg bg-opacity-60 p-2">
        <h1 className=" tag-line text-3xl text-center">Effortless Dining Starts Here: Your Seamless Solution for Online Ordering!</h1>
        
        {/* <div className="flex row-auto gap-5">
          <div >
            <SignInMenu />
          </div>
          <div className="bg-slate-300 text-black rounded-lg">
            <SignUpMenu />
          </div> 
        </div>*/}
      </div>
    </div>
  );
}

export default Welcome;

