import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default RootLayout;