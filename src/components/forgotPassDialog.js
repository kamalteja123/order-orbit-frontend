import React, { useState } from "react";
import OTPDialog from "../components/otpDialog";
import StoreValue from "./storageClass";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPasswordDialog(role) {
  const [showOTP, setShowOTP] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const requestOTP = async () => {
    try {
      const response = await axios.post("/request-otp", {
        email: userEmail,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  function handleClick(event) {
    event.preventDefault();
    setUserEmail(document.getElementById("fpuemail").value);
    if (userEmail === "") {
      alert("Please enter your email");
    } else {
      requestOTP();
      StoreValue.setUserEmail(userEmail);
      setShowOTP(true);
    }
  }
  return (
    <div className="fg">
      {!showOTP ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-semibold mb-4">Forgot Password?</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="fpuemail"
                  name="email"
                  className="mt-1 px-4 py-2 w-full border rounded-md"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  onClick={(e) => handleClick(e)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-md"
                >
                  Send OTP
                </button>
                <button
                  type="button"
                  className="text-sm text-gray-600"
                  onClick={() => navigate("/usersignin")}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <OTPDialog role={role.role}/>
      )}
    </div>
  );
}

export default ForgotPasswordDialog;
