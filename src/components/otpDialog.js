import React, { useState, useRef } from 'react';

function OTPDialog() {
    const [otp, setOTP] = useState(['', '', '', '', '', '']); // State variable to store OTP digits
    const refs = useRef([...Array(6)].map(() => React.createRef())); // Refs for each OTP input field

    // Function to handle changes in OTP input fields
    const handleChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);

        // Move focus to the next input field
        if (value !== '' && index < 5) {
            refs.current[index + 1].current.focus();
        }
    };

    // Function to handle backspace key press
    const handleBackspace = (index, e) => {
        // Move focus to the previous input field if backspace is pressed in an empty field
        if (e.keyCode === 8 && index > 0 && otp[index] === '') {
            e.preventDefault();
            refs.current[index - 1].current.focus();
        }
    };

    // Function to handle submission
    const handleSubmit = () => {
        const enteredOTP = otp.join(''); // Joining OTP digits to form a single string
        console.log('Entered OTP:', enteredOTP);
        // Add your logic to verify the OTP here
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-100">
                <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
                <div className="flex justify-between">
                    {/* Rendering 6 OTP input fields */}
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleBackspace(index, e)} // Handle backspace key press
                            maxLength="1"
                            className="w-12 h-12 text-3xl border rounded-md text-center"
                            ref={refs.current[index]} // Assigning ref to each input field
                        />
                    ))}
                </div>
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4">Submit</button>
            </div>
        </div>
    );
}

export default OTPDialog;
