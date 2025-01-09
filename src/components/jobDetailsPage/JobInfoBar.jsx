import { CgProfile } from "react-icons/cg";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdOutlineNotificationsActive } from "react-icons/md";

const JobInfoBar = ({ data }) => {
  const {
    jobType,
    location,
    category,
    salaryRange,
    status,
    applicationDeadline,
  } = data;

  console.log(data);

  return (
    <div className="border rounded-lg md:w-2/5 h-fit">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Job Information</h2>
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-center gap-4">
          <CgProfile className="text-2xl" />
          <div>
            <p className="text-lg font-medium">Employee Type:</p>
            <p className="text-[#047857]">{jobType}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineLocationOn className="text-2xl" />
          <div>
            <p className="text-lg font-medium">Location:</p>
            <p className="text-[#047857]">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BiCategory className="text-2xl" />
          <div>
            <p className="text-lg font-medium">Job Type:</p>
            <p className="text-[#047857]">{category}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MdAttachMoney className="text-2xl" />
          <div>
            <p className="text-lg font-medium">Salary:</p>
            <p className="text-[#047857]">
              ${salaryRange?.min} - ${salaryRange?.max}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LiaBusinessTimeSolid className="text-2xl" />
          <div>
            <p className="text-lg font-medium">Application Deadline:</p>
            <p className="text-[#047857]">{applicationDeadline}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineNotificationsActive className="text-2xl" />
          <div>
            <p className="text-lg font-medium">Status:</p>
            <p className="text-[#047857]">{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfoBar;
