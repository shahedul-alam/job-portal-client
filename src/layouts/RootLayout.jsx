import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default RootLayout;