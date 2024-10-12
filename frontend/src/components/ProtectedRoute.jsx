/* eslint-disable react/prop-types */
// src/components/ProtectedRoute.js

import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie

const ProtectedRoute = ({ children }) => {
  // Check for token in cookies
  const isAuthenticated = !!Cookies.get("token"); // Change to check cookie

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
