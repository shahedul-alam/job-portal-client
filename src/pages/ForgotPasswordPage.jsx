import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import banner from "../assets/login-signup-banner.jpg";

const ForgotPasswordPage = () => {
  const { resetUserPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleResetUserPassword = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;

    resetUserPassword(email)
      .then(() => {
        // Signed up
        Swal.fire({
          title: "Password reset email sent!",
          text: "Please check your inbox and follow the instructions to reset your password.",
          icon: "success",
          showConfirmButton: false,
        });
        // navigating to signin page
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong while processing your request.",
          icon: "error",
          showConfirmButton: false,
        });
      });
  };

  return (
    <main
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content w-full flex-col lg:flex-row lg:justify-start">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleResetUserPassword}>
            <h1 className="text-4xl font-bold text-center text-[#047857] mb-4">
              Forgot password?
            </h1>
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
            <div className="form-control mt-4">
              <button className="btn bg-[#047857] text-white font-medium text-base border-none hover:bg-[#01543a]">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
