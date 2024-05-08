import React from "react";

function CloseIcon() {
  function handleclick() {
    console.log("clicked");
  }
  return (
    <div className="fixed position-absolute top-20 right-20 z-50">
      <div className="bg-white rounded-full px-2 pt-1">
        <a href="/home">
          <span className="material-symbols-outlined">close</span>
        </a>
      </div>
    </div>
  );
}

export default CloseIcon;
