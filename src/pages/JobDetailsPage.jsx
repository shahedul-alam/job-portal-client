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

  return (
    <section className="container mx-auto px-4 flex flex-col gap-5 md:flex-row-reverse md:gap-8 my-10 lg:my-16">
      <JobInfoBar data={jobData} />
      <JobDetailsBar data={jobData} />
    </section>
  );
};

export default JobDetailsPage;
