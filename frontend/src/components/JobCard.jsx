import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-5 shadow-sm hover:shadow-md transition">
      {/* Company */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold">
          {job.company?.name?.charAt(0) || "C"}
        </div>

        <div>
          <h4 className="font-semibold">
            {job.company?.name || "Unknown Company"}
          </h4>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
      </div>

      {/* Job Info */}
      <h3 className="text-lg font-bold mb-2">{job.title}</h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
          {job.jobType}
        </span>
        <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
          {job.experienceLevel}+ Years
        </span>
      </div>

      {/* Action */}
      <button
        onClick={() => navigate(`/jobs/${job._id}`)}
        className="w-full bg-primary text-white py-2 rounded-md"
      >
        View Details
      </button>
    </div>
  );
};

export default JobCard;
