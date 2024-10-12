// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./pages/home/Footer";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet /> {/* This will render the nested routes */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
