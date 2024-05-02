import Dummy from "./dummy";

import React, { useState } from 'react';
import OTPDialog from "./otpDialog";

function AnotherDummy() {
    const [showOTP, setShowOTP] = useState(false); // State variable to control OTP page rendering

    function handleChange(event) {
        event.preventDefault();
        console.log(event.target.previousSibling.innerHTML);
        // You can toggle the state here to show the OTP page
        setShowOTP(true);
    }

    return (
        <div>
            {!showOTP ? ( 
                <form className="m-4 pt-16">
                    <label htmlFor="dummyInput" className="block text-sm font-medium text-gray-700">Dummy input:</label>
                    <input type="text" id="dummyInput" name="dummyInput" className="mt-1 px-4 py-2 border rounded-md" />
                    <div>
                        <h1>hiiii</h1>
                        <h2>afdafagfi</h2>
                    </div>
                    <button onClick={(e) => handleChange(e)} className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4">Submit</button>
                </form>
            ) : (
                <OTPDialog /> 
            )}
        </div>
    );
}   

function OTPPage() {
    return (
        <div>
            {/* OTP page content */}
            <h1>OTP Page</h1>
            <p>Enter your OTP here...</p>
        </div>
    );
}

export default AnotherDummy;
