/* eslint-disable no-unused-vars */
// src/pages/Auth/Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Cookies from "js-cookie"; // Import js-cookie for cookie management
import Logo from "../../assets/logo.svg";

export default function Signup() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const [success, setSuccess] = useState(""); // State for success messages
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Reset error message
    setSuccess(""); // Reset success message

    const userData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "An error occurred during sign up.");
      } else {
        const data = await response.json();
        Cookies.set("token", data.token); // Set the token in cookies
        setSuccess("Sign up successful! Redirecting...");
        navigate("/"); // Navigate to root which renders the Layout component
      }
    } catch (err) {
      setError("Network error, please try again later.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="Veggify" src={Logo} className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm transition duration-300 ease-in-out placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-600"
                placeholder="Enter your username"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm transition duration-300 ease-in-out placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring focus:ring-indigo-600"
                placeholder="Enter your password"
              />
            </div>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin" // Navigate to signin page
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
