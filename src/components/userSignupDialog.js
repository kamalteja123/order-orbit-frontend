import React,{useState} from "react";
import axios from "axios";
function UserSignUpDialog() {
  const [formData, setFormData] = useState({
    cname: "",
    cemail: "",
    cphoneNum: "",
    cpassword: "",
    // confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8090/api/resgisterCustomer",
        formData
      );
      // console.log("Registration successful:", response.data);
      // Optionally, you can redirect the user to a different page after successful registration
      setFormData({
        cname: "",
        cemail: "",
        cphoneNum: "",
        cpassword: "",
        // confirmPassword: "",
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-100">
        <h2 className="text-xl font-semibold mb-4">User Sign Up</h2>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.cname}
              name="cname"
              placeholder="Enter your Name"
              className="mt-1 px-4 py-2 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-4 pl-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" id="lastname" name="lastname" className="mt-1 px-4 py-2 w-full border rounded-md" />
                        </div> */}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.cemail}
              name="cemail"
              placeholder="Enter your email"
              className="mt-1 px-4 py-2 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="phonenumber"
              id="phonenumber"
              name="cphoneNum"
              value={formData.cphoneNum}
              placeholder="Enter your Phone Number"
              className="mt-1 px-4 py-2 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row">
            <div className="mb-4 pr-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="cpassword"
                value={formData.cpassword}
                placeholder="Enter password"
                className="mt-1 px-4 py-2 w-full border rounded-md"
                onChange={handleChange}
              />
            </div>
            {/* <div className="mb-4 pl-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="ReEnter Password"
                className="mt-1 px-4 py-2 w-full border rounded-md"
                onChange={handleChange}
              />
            </div> */}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">Already have an account?</p>
          <a href="/usersignin" className="text-blue-600 font-semibold">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserSignUpDialog;
