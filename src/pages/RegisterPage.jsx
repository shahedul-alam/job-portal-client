import banner from "../assets/login-signup-banner.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useContext, useState } from "react";

const RegisterPage = () => {
  const { createNewUser, updateUserProfile, logInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [notValid, setNotValid] = useState(false);
  const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleCreateNewUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (regex.test(password)) {
      setNotValid(false);

      createNewUser(email, password)
        .then(() => {
          // Signed up
          updateUserProfile({ displayName, photoURL })
            .then(() => {
              Swal.fire({
                title: "Congratulations!",
                text: "Your account has been created successfully. Start exploring job opportunities now!",
                icon: "success",
                showConfirmButton: false,
              });
              // navigating to homepage
              navigate("/", { replace: true });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              Swal.fire({
                title: "Uh-oh!",
                text: "There was an issue creating your account. Please ensure all fields are filled out correctly and try again.",
                icon: "error",
                showConfirmButton: false,
              });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          Swal.fire({
            title: errorCode,
            text: errorMessage,
            icon: "error",
            showConfirmButton: false,
          });
        });
    } else {
      setNotValid(true);
    }
  };

  const handleLogInWithGoogle = () => {
    logInWithGoogle()
      .then(() => {
        // Signed up
        Swal.fire({
          title: "Welcome!",
          text: "Registered successfully",
          icon: "success",
          showConfirmButton: false,
        });
        // navigating to previous page
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Swal.fire({
          title: errorCode,
          text: errorMessage,
          icon: "error",
          showConfirmButton: false,
        });
      });
  };

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
          <form className="card-body" onSubmit={handleCreateNewUser}>
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
            {notValid && (
              <div className="form-control">
                <p className="label-text-alt text-red-600">
                  Password must include at least 6 characters, with both
                  uppercase and lowercase letters
                </p>
              </div>
            )}
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
              <div
                className="font-medium text-base flex items-center justify-center gap-1 btn"
                onClick={handleLogInWithGoogle}
              >
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
