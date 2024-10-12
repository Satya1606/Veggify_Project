// src/pages/Starter.jsx

// Adjust the path if necessary
import Image from "../assets/veggie-tray-2.jpg"; // Import your image
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";

export default function Starter() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side: Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={Image} // Replace with your actual image path
          alt="Descriptive alt text"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right Side: Signin Component */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        {location.pathname === "/signup" ? <Signup /> : <Signin />}
      </div>
    </div>
  );
}
