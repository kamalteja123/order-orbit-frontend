import React from "react";
import BGimg from "../assests/BG.jpg";

function Welcome() {
  return (
    <div >
      <img id="welcome"
        className="relative w-full h-screen overflow-hidden "
        src={BGimg}
        alt="not working"
      />
      {/* <p className="absolute z-50 bottom-10 left-1/2 -translate-x-1/2 bg-white text-black rounded-lg bg-opacity-50 p-2">
      </p> */}
    </div>
  );
}

export default Welcome;
