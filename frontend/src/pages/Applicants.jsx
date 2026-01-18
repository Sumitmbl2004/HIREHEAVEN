import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

const Applicants = () => {
  const { id } = useParams(); // job id
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      const res = await API.get(`/application/applicants/${id}`);
      setJob(res.data.job);
    };

    fetchApplicants();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Applicants for {job.title}
      </h1>

      {job.applications.length === 0 && <p>No applicants yet.</p>}

      {job.applications.map((app) => (
        <div key={app._id} className="border p-4 rounded mb-4">
          <p><b>Name:</b> {app.applicant.fullname}</p>
          <p><b>Email:</b> {app.applicant.email}</p>
          <p><b>Status:</b> {app.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Applicants;
