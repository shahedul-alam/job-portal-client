import { Link, useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { pathname } = useLocation();
  const { user, signoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignoutUser = () => {
    signoutUser()
      .then(() => {
        Swal.fire({
          title: "You have successfully logged out",
          text: "See you next time and good luck with your job search!",
          icon: "success",
          showConfirmButton: false,
        });

        navigate("/login");
      })
      .catch(() => {
        Swal.fire({
          title: "Sorry!",
          text: "we encountered an issue logging you out. Please try again later.",
          icon: "error",
          showConfirmButton: false,
        });
      });
  };

  const homepageNavbar = (
    <header className="relative font-inter">
      <nav className="container mx-auto absolute left-1/2 transform -translate-x-1/2">
        <div className="navbar bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/my-applications"}>My Applications</Link>
                </li>
              </ul>
            </div>
            <Link
              to={"/"}
              className="btn btn-ghost p-0 text-3xl text-white hover:bg-transparent"
            >
              Career
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-white font-medium text-base px-1">
              <li>
                <Link to={"/"} className="hover:bg-none focus:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/my-applications"}
                  className="hover:bg-none focus:text-white"
                >
                  My Applications
                </Link>
              </li>
            </ul>
          </div>
          {user ? (
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="ring-[#047857] ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img alt="user" src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                  <li>
                    <button onClick={handleSignoutUser}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end gap-2">
              <Link
                to={"/login"}
                className="btn bg-[#047857] text-white font-medium text-base border-none hover:bg-[#01543a]"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn font-medium text-base border-none"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );

  const universalNavbar = (
    <header className="font-inter">
      <nav className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/my-applications"}>My Applications</Link>
                </li>
              </ul>
            </div>
            <Link
              to={"/"}
              className="btn btn-ghost p-0 text-3xl hover:bg-transparent"
            >
              Career
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-medium text-base px-1">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/my-applications"}>My Applications</Link>
              </li>
            </ul>
          </div>
          {user ? (
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="ring-[#047857] ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img alt="user" src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>{user.displayName}</a>
                  </li>
                  <li>
                    <button onClick={handleSignoutUser}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end gap-2">
              <Link
                to={"/login"}
                className="btn bg-[#047857] text-white font-medium text-base border-none hover:bg-[#01543a]"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn font-medium text-base border-none"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );

  return pathname === "/" ? homepageNavbar : universalNavbar;
};

export default Navbar;
