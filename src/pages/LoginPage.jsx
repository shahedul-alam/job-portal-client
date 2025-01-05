import banner from "../assets/login-signup-banner.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const LoginPage = () => {
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
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
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
                placeholder="password:"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
              <label className="label">
                <Link
                  to={`forgotPassword`}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#047857] text-white font-medium text-base border-none hover:bg-[#01543a]">
                Login / Sign In
              </button>
            </div>
            <label className="label">
              <p className="label-text-alt text-gray-600">
                Don't have an account?{" "}
                <Link
                  to={"/register"}
                  className="label-text-alt link link-hover text-[#047857]"
                >
                  register
                </Link>
              </p>
            </label>
            <div className="form-control mt-2">
              <p className="text-sm font-medium text-center text-gray-600 mb-2">
                Or, login with
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

export default LoginPage;
