import React ,{useState} from "react";
import axios from "axios";
function RestaurantSignUpDialog() {
  const [formData, setFormData] = useState({
    rname: "",
    remail: "",
    rphoneNum: "",
    rpassword: "",
    raddress:"",
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
        "http://localhost:8090/api/resgisterRestaurant",
        formData
      );
      console.log("Registration successful:", response.data);
      // Optionally, you can redirect the user to a different page after successful registration
      setFormData({
        rname: "",
        remail: "",
        rphoneNum: "",
        rpassword: "",
        raddress:"",
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-100">
        <h2 className="text-xl font-semibold mb-4">Restaurant Sign Up</h2>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
             Restaurant Name
            </label>
            <input
              type="text"
              id="name"
              name="rname"
              value={formData.rname}
              onChange={handleChange}
              placeholder="Enter Name"
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />

            {/* <div className="mb-4 pl-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" id="lastname" name="lastname" className="mt-1 px-4 py-2 w-full border rounded-md" />
                        </div> */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
             Restaurant Email
            </label>
            <input
              type="email"
              id="email"
              name="remail"
              onChange={handleChange} 
              value={formData.remail}
              placeholder="Enter email"
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Restaurant Address
            </label>
            <input
              type="address"
              id="address"
              name="raddress"
              onChange={handleChange} 
              value={formData.raddress}
              placeholder="Enter Address"
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium text-gray-700"
            >
             Restaurant Phone Number
            </label>
            <input
              type="phonenumber"
              id="phonenumber"
              name="rphoneNum"
              value={formData.rphoneNum}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="mt-1 px-4 py-2 w-full border rounded-md"
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
                name="rpassword"
                onChange={handleChange}
                 value={formData.rpassword}
                placeholder="Enter password"
                className="mt-1 px-4 py-2 w-full border rounded-md"
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
          <a href="/restaurantsignin" className="text-blue-600 font-semibold">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSignUpDialog;
