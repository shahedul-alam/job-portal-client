import axios from "axios";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const JobApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const linkedInURL = form.linkedInURL.value;

    const applicantInfo = {
      jobId: id,
      applicant_name: name,
      applicant_email: email,
      applicant_location: location,
      applicant_phone: phone,
      applicant_linkedInURL: linkedInURL,
    };

    axios
      .post("http://localhost:5000/apply", applicantInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Application submitted successfully!",
            text: "Good luck with your job search.",
            icon: "success",
            showConfirmButton: false,
          });
          // navigating to homepage
          navigate("/", { replace: true });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong while submitting your application. Please try again.",
          icon: "error",
          showConfirmButton: false,
        });
      });
  };

  return (
    <main className="container mx-auto px-4 my-10 lg:my-16 font-inter">
      <div className="hero">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={submitJobApplication}>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Your Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Harry"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Email Address:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Phone No.:</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+458 854-8965"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">Location:</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="New York"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-semibold">LinkedIn URL:</span>
              </label>
              <input
                type="text"
                name="linkedInURL"
                placeholder="www.linkedin.com/in/harry"
                className="input input-bordered focus:border focus:border-[#047857]"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="w-full btn bg-[#047857] text-white font-medium text-lg border-none hover:bg-[#01543a]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default JobApplyPage;
