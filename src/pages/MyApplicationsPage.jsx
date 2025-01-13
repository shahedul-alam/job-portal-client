import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ApplicationRow = ({ data }) => {
  const {
    jobDetail,
    applicant_name,
    applicant_email,
    applicant_phone,
    applicant_linkedInURL,
  } = data;
  const { _id, title, location, jobType, salaryRange, company, company_logo } =
    jobDetail;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        <Link to={`/jobs/${_id}`}>
          {title}
          <br />
          <span className="badge bg-[#047857] badge-sm text-white">
            {jobType}
          </span>
        </Link>
      </td>
      <td>
        ${salaryRange?.min} - {salaryRange?.max}
      </td>
      <td>{applicant_name}</td>
      <td>{applicant_email}</td>
      <td>{applicant_phone}</td>
      <td>{applicant_linkedInURL}</td>
    </tr>
  );
};

const MyApplicationsPage = () => {
  const { user } = useAuth();
  const [applicationsData, setApplicationsData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/applications?email=${user.email}`)
      .then((res) => setApplicationsData(res.data));
  }, [user.email]);

  return (
    <main className="min-h-screen container mx-auto px-4 my-10 lg:my-16 font-inter">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Company</th>
              <th>Job</th>
              <th>Salary Range</th>
              <th>Applicant's Name</th>
              <th>Applicant's Email</th>
              <th>Applicant's Phone</th>
              <th>Applicant's LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {applicationsData.map((application) => (
              <ApplicationRow key={application._id} data={application} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MyApplicationsPage;
