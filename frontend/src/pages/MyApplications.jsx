import { useEffect, useState } from "react";
import API from "../api/axios";

const MyApplications = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    API.get("/application/get")
      .then((res) => setApps(res.data.applications || []))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Applications</h2>

      {apps.length === 0 ? (
        <p>No applications found</p>
      ) : (
        apps.map((app) => (
          <div key={app._id} className="border p-4 mb-3">
            {app.job?.title}
          </div>
        ))
      )}
    </div>
  );
};

export default MyApplications;
