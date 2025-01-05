import banner from "../assets/login-signup-banner.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div
      className="hero min-h-screen font-inter"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content w-full flex-col lg:flex-row lg:justify-start">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <h1 className="text-4xl text-[#047857] font-bold text-center mb-4">
              Register
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            {/* {notValid && (
              <div className="form-control">
                <p className="label-text-alt text-red-600">
                  Password must include at least 6 characters, with both
                  uppercase and lowercase letters
                </p>
              </div>
            )} */}
            <div className="form-control mt-4">
              <button className="btn bg-[#047857] text-white font-medium text-base border-none hover:bg-[#01543a]">
                Register / Sign Up
              </button>
            </div>
            <label className="label">
              <p className="label-text-alt text-gray-600">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="label-text-alt link link-hover text-[#047857]"
                >
                  Login
                </Link>
              </p>
            </label>
            <div className="form-control mt-2">
              <p className="text-sm font-medium text-center text-gray-600 mb-2">
                Or, register with
              </p>
              <div className="font-medium text-base flex items-center justify-center gap-1 btn">
                <FaGoogle className="text-[#047857]" /> Google
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
<h1>register</h1>;
