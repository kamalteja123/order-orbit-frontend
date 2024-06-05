import React, { useState } from "react";
import CloseIcon from "./closeIcon";
import BasicAlerts from "./alert";
import axios from "axios";
import StoreValue from "./storageClass";
import { useNavigate } from "react-router-dom";

function RestaurantSignInDialog() {
  const [alertval, setAlertval] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      document.getElementById("sirpassword").value === "" ||
      document.getElementById("siremail").value === ""
    ) {
      alert("email and password cannot be empty");
      setAlertval({
        severity: "error",
        message: "Email and password cannot be empty",
      });
    } else {
      let siremail = document.getElementById("siremail").value;
      let sirpassword = document.getElementById("sirpassword").value;
      try {
        const response = await axios.post("/loginRestaurant", {
          email: siremail,
          password: sirpassword,
        });
        if (response.data.message === "Login Successful!") {
          StoreValue.setRestToken(response.data.token);
          navigate("/restaurantDashboard");
          setAlertval({
            severity: "success",
            message: "Successfully logged in",
          });
        } else {
          setAlertval({
            severity: "error",
            message: response.data.message,
          });
        }
      } catch (error) {
        console.error("Login failed:", error);
        setAlertval({
          severity: "error",
          message: "Invalid email or password entered",
        });
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-40">
      <CloseIcon />
      <div className="bg-white p-8 rounded-lg w-100">
        <h2 className="text-xl font-semibold mb-4">Restaurant Sign In</h2>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            {alertval && <BasicAlerts alert={alertval} />}
            <input
              type="email"
              id="siremail"
              name="email"
              placeholder="Enter your email"
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="sirpassword"
              name="password"
              placeholder="Enter password"
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>
          <div className="flex justify-between items-center">
            <a
              href="/restaurantforgotpassword"
              className="text-blue-500 font-semibold pr-40"
            >
              Forgot Password?
            </a>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm">Don't have an account?</p>
          <a href="/restaurantsignup" className="text-blue-500 font-semibold">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSignInDialog;
