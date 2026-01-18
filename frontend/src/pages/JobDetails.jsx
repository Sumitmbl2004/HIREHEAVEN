import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    API.get(`/job/get/${id}`)
      .then((res) => setJob(res.data.job))
      .catch(console.error);
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default JobDetails;