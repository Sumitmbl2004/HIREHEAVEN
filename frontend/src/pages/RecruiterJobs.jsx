import { useEffect, useState } from "react";
import API from "../api/axios";

const RecruiterJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/job/get-admin-jobs");
        setJobs(res.data.jobs || []);
      } catch (err) {
        console.error("FETCH JOBS ERROR:", err);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Posted Jobs</h2>

      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        jobs.map((job) => (
          <div key={job._id} className="border p-4 mb-3 rounded">
            <h3 className="font-semibold">{job.title}</h3>
            <p>{job.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecruiterJobs;
