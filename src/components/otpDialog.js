import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreValue from "./storageClass";
import { useNavigate } from "react-router-dom";

function OTPDialog(role) {
  const navigate = useNavigate();
  const [showReset, setShowReset] = useState(false);
  const validateOTPRequest = async (otp) => {
    try {
      const response = await axios.post(`/verify-otp-${role.role}`, {
        email: StoreValue.getUserEmail(),
        otp: otp,
      });
      if (response.data.message === "OTP verified successfully") {
        alert("OTP verified successfully");
        StoreValue.setToken(response.data.token);
        setShowReset(true);
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (event, index) => {
    let value = event.target.value;
    const otpInputs = document.querySelectorAll("#otp > *[id]");
    if (event.key === "Backspace") {
      otpInputs[index].value = "";
      if (index !== 0) otpInputs[index - 1].focus();
    } else {
      if (index === otpInputs.length - 1 && value !== "") {
        // return true;
      } else if (
        (event.keyCode > 47 && event.keyCode < 58) ||
        (event.keyCode > 95 && event.keyCode < 106)
      ) {
        otpInputs[index].value = event.key;
        if (index !== otpInputs.length - 1) otpInputs[index + 1].focus();
        event.preventDefault();
      }
    }
  };

  const [timer, setTimer] = useState(60);
  const [showResend, setShowResend] = useState(false);
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setShowResend(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleResendClick = () => {
    // Reset the timer and hide the Resend button
    setTimer(60);
    setShowResend(false);

    // Send a request to resend the OTP
  };

  const handleValidateClick = () => {
    const otpInputs = document.querySelectorAll("#otp > *[id]");
    const otp = Array.from(otpInputs)
      .map((input) => input.value)
      .join("");
    if (otp.length === 6) {
      validateOTPRequest(otp);
    }
  };

  function handleResetPassword() {
    if (
      document.getElementById("fpnewpassword").value === "" ||
      document.getElementById("fpconfirmpassword").value === ""
    ) {
      alert("all fields are mandatory");
    } else {
      if (
        document.getElementById("fpnewpassword").value ===
        document.getElementById("fpconfirmpassword").value
      ) {
        if (role.role === "customer") {
          axios
            .post(
              `reset-password-${role.role}`,
              { Headers: { token: StoreValue.getJustToken() } },
              {
                cemail: StoreValue.getUserEmail(),
                cpassword: document.getElementById("fpnewpassword").value,
              }
            )
            .then((response) => {
              console.log(response.data);
              alert(response.data);
              console.log("role at navigate" + role.role);
              if (role.role === "customer") {
                navigate("/usersignin");
              } else {
                navigate("/restaruntsignin");
              }
            })
            .catch((error) => {
              alert(error.response.data);
            });
        } else {
          console.log("role at reset" + role.role);
          console.log(StoreValue.getToken());
          axios
            .post(
              `reset-password-${role.role}`,
              { Headers: { token: StoreValue.getJustToken() } },
              {
                remail: StoreValue.getUserEmail(),
                rpassword: document.getElementById("fpnewpassword").value,
              }
            )
            .then((response) => {
              console.log(response.data);
              alert(response.data);
              console.log("role at navigate" + role.role);
              if (role.role === "customer") {
                navigate("/usersignin");
              } else {
                navigate("/restaruntsignin");
              }
            })
            .catch((error) => {
              alert(error.response.data);
            });
        }
      } else {
        alert("passwords do not match");
      }
    }
  }

  return (
    <div>
      {!showReset ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-100">
            <h2 className="text-xl font-semibold mb-4">
              Please enter the OTP{" "}
            </h2>
            <div id="otp" className="flex justify-between">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  className="w-12 h-12 text-3xl border mx-1 rounded-md text-center"
                  type="text"
                  id={`input-${index}`}
                  maxLength="1"
                  onKeyDown={(event) => handleInputChange(event, index)}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-row justify-between">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4"
                onClick={handleValidateClick}
              >
                Validate
              </button>
              {showResend ? (
                <button
                  id="resend"
                  className="text-black px-6 py-2 rounded-md mt-4"
                  onClick={handleResendClick}
                >
                  Resend
                </button>
              ) : (
                <div className="text-black px-6 py-2 opacity-20 rounded-md mt-4">
                  Resend in {timer} seconds
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
            <div className="mb-4">
              <label
                htmlFor="newpassword"
                className="block text-sm font-medium text-gray-700"
              >
                New password
              </label>
              <input
                type="password"
                id="fpnewpassword"
                name="newpassword"
                placeholder="Enter New password"
                className="mt-1 px-4 py-2 w-full border rounded-md mb-4"
              />
              <label
                htmlFor="newpassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="fpconfirmpassword"
                name="confirmpassword"
                placeholder="Confirm New password"
                className="mt-1 px-4 py-2 w-full border rounded-md"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={handleResetPassword}
                className="bg-blue-500 text-white px-6 py-2 rounded-md"
              >
                Reset Password
              </button>
              <button
                type="button"
                className="text-sm text-gray-600"
                onClick={() => navigate("/home")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OTPDialog;
