import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/job/get")
      .then((res) => setJobs(res.data.jobs || []))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      {jobs.map((job) => (
        <div key={job._id} className="border p-4 mb-3">
          <h3>{job.title}</h3>

          {/* 🔥 THIS MUST MATCH ROUTE */}
          <Link to={`/jobs/${job._id}`} className="text-purple-600">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
