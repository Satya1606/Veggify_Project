// src/App.jsx
import "./App.css";
import Layout from "./Layout";
import Starter from "./starter/Starter";
import { useEffect, useState } from "react";
import Cookies from "js-cookie"; // Import js-cookie for cookie management

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token in cookies
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return <>{!isAuthenticated ? <Starter /> : <Layout />}</>;
}

export default App;
