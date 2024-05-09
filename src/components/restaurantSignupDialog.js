import React from "react";

function RestaurantSignUpDialog() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-100">
        <h2 className="text-xl font-semibold mb-4">Restaurant Sign Up</h2>
        <form className="mb-4">
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
              name="name"
              placeholder="Enter your Name"
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
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 px-4 py-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="address"
              id="address"
              name="address"
              placeholder="Enter Address"
              className="mt-1 px-4 py-2 w-full border rounded-md"
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
              name="phonenumber"
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
                name="password"
                placeholder="Enter password"
                className="mt-1 px-4 py-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4 pl-2">
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
            </div>
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
          <a href="/signin" className="text-blue-600 font-semibold">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSignUpDialog;
