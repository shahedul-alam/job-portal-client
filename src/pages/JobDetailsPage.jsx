import axios from "axios";
import JobInfoBar from "../components/jobDetailsPage/JobInfoBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobDetailsBar from "../components/jobDetailsPage/JobDetailsBar";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs/${id}`)
      .then((res) => setJobData(res.data));
  }, []);

  console.log(jobData)

  return (
    <section className="my-10 lg:my-16">
      {/* <div className="h-40 bg-[#047857] rounded-b-[50px] flex justify-center items-center mb-10 lg:mb-16">
        <h1 className="text-4xl font-semibold text-white">{jobData.title}</h1>
      </div> */}
      <div  className="container mx-auto px-4 flex flex-col gap-5 md:flex-row-reverse md:gap-8">
        <JobInfoBar data={jobData} />
        <JobDetailsBar data={jobData} />
      </div>
    </section>
  );
};

export default JobDetailsPage;
