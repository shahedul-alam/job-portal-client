import axios from "axios";
import { useEffect, useState } from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router";

const HotJobCard = ({ data }) => {
  const {
    _id,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    company,
    company_logo,
  } = data;

  return (
    <div className="flex flex-col items-start p-5 border border-base-300 rounded-xl lg:grid lg:grid-cols-5 lg:items-center lg:p-8">
      <div className="flex justify-start items-center gap-3 mb-5 lg:mb-0 lg:col-span-2">
        <img
          src={company_logo}
          className="size-10 object-center border box-content p-2 rounded-lg shadow-md lg:p-4"
        />
        <Link to={`/jobs/${_id}`} className="text-xl font-bold hover:text-[#047857]">{company}</Link>
      </div>

      <div className="w-full flex justify-between gap-2 mb-4 lg:flex-col lg:justify-stretch lg:items-start lg:mb-0">
        <p className="bg-[#047857] px-3 py-1 rounded-badge text-white text-sm">
          {jobType}
        </p>
        <div className="flex justify-start items-center gap-1">
          <CiClock2 className="text-lg text-gray-600" />{" "}
          <p className="text-gray-600">{applicationDeadline}</p>
        </div>
      </div>

      <div className="w-full flex justify-between gap-2 mb-4 lg:flex-col lg:justify-stretch lg:items-start lg:mb-0">
        <div className="flex justify-start items-center gap-1">
          <CiLocationOn className="text-lg text-gray-600" />
          <p className="text-gray-600">{location}</p>
        </div>
        <p className="font-semibold">
          ${salaryRange.min} - ${salaryRange.max}
        </p>
      </div>

      <div className="w-full">
        <button className="w-full btn bg-[#047857] text-white font-medium text-base border-none hover:bg-[#01543a]">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const HotJobs = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs")
      .then((res) => setJobsData(res.data));
  }, []);

  return (
    <section className="container mx-auto mb-10 lg:mb-16">
      <h1 className="text-4xl text-center font-medium mb-4">Popular Jobs</h1>
      <p className="w-4/5 mx-auto text-center text-gray-600 mb-6 lg:w-1/2 lg:mb-8">
        Search all the open positions on the web. Get your own personalized
        salary estimate. Read reviews on over 30000+ companies worldwide.
      </p>

      {/* job cards */}
      <div className="grid grid-cols-1 gap-4 px-4">
        {jobsData.map((data) => (
          <HotJobCard key={data._id} data={data} />
        ))}

        <Link className="text-gray-600 font-medium text-center flex items-center gap-1 justify-center mt-5 hover:text-[#047857] w-fit mx-auto">See More Jobs
          <GoArrowRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default HotJobs;
