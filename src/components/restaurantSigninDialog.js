import React from 'react';
import CloseIcon from './closeIcon';
import axios from 'axios';

function handleChange(event) {
    event.preventDefault();
    if(document.getElementById('password').value==="" || document.getElementById('email').value==="")
    {
        alert("email and password cannot be empty");
    }
    else {
        let email=document.getElementById('email').value;
        let password=document.getElementById('password').value;
        console.log(email, password);
    }
}

function RestaurantSignInDialog() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email,password)
        try {
            const response = await axios.post('http://localhost:8090/api/loginRestaurant', {
                email: email,
                password: password
            });
            
            // Assuming the backend responds with a token
            const token = response.data.token;
            console.log(token)
            // Store the token in cookies
            document.cookie = `token=${token};path=/`;

            // Optionally, redirect the user to a different page
            window.location.href = '/restaurantdashboard';
        } catch (error) {
            console.error('Login failed:', error);
            // Display error message to the user
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-40">
            <CloseIcon/>
            <div className="bg-white p-8 rounded-lg w-100">
                <h2 className="text-xl font-semibold mb-4">Restaurant Sign In</h2>
                <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder='Enter your email' className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" placeholder='Enter password' className="mt-1 px-4 py-2 w-full border rounded-md" />
                    </div>
                    <div className="flex justify-between items-center">
                    <a href="/forgotpassword" className="text-blue-500 font-semibold pr-40">Forgot Password?</a>
                    <button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-md">Sign In</button>
                    </div>
                </form>
                <div className="text-center">
                    <p className="text-sm">Don't have an account?</p>
                    <a href="/signup" className="text-blue-500 font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default RestaurantSignInDialog;
