/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies

export default function DesktopNav({ navItems, logo }) {
  const navigate = useNavigate(); // useNavigate hook from react-router

  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/signout", {
        method: "POST",
        credentials: "include", // Include cookies in the request
      });
      // Clear the JWT cookie
      Cookies.remove("jwt"); // Clear the cookie

      // Redirect to the Starter page after signing out
      navigate("/starter"); // Redirect to the Starter page
    } catch (error) {
      console.error("Error during sign out:", error);
      // Optionally handle any errors
    }
  };

  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12 shadow-md bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
      <a href="/">
        <img src={logo} alt="logo" className="h-8" /> {/* Adjusted logo size */}
      </a>
      <ul className="flex gap-7">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item}
              className="font-medium capitalize text-secondary hover:text-orange-500 transition duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-4 font-medium">
        <li>
          <button
            onClick={handleSignOut}
            className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition duration-300 transform hover:scale-105"
          >
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}
