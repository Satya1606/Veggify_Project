// src/pages/Auth/Signout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signout = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/signout", {
          method: "POST",
          credentials: "include", // Include cookies in the request
        });

        if (response.ok) {
          // Optionally handle success message
          navigate("/"); // Redirect to the homepage or another route after signout
        } else {
          // Handle error
          console.error("Sign out failed");
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    signout();
  }, [navigate]);

  return null; // Render nothing while signing out
};

export default Signout;
