import { GoArrowRight } from "react-icons/go";

const JobDetailsBar = ({ data }) => {
  const {
    description,
    requirements,
    responsibilities,
    title,
    company,
    company_logo,
  } = data;

  return (
    <div className="md:w-3/5">
      <div className="flex gap-4 p-6 bg-base-200 rounded-lg mb-8">
        <div className="bg-white p-5 rounded-full">
          <img src={company_logo} className="size-20" />
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-semibold mb-2">{company}</h2>
          <p className="text-xl font-medium text-[#047857]">{title}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Job Description:</h2>
        <p className="text-gray-500">{description}</p>
      </div>

      <div className="space-y-5 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Responsibilities and Duties:
        </h2>
        {responsibilities?.map((item) => (
          <div className="flex items-center gap-2">
            <GoArrowRight className="text-lg text-[#047857]" />{" "}
            <p className="text-gray-500">{item}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Requirements:</h2>
        {requirements?.map((item) => (
          <p className="badge mr-2 bg-base-300 font-medium">{item}</p>
        ))}
      </div>

      <div className="w-full md:w-fit">
        <button className="w-full btn bg-[#047857] text-white font-medium text-base border-none hover:bg-[#01543a]">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetailsBar;
