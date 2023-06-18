/** @format */

import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/NavBar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
