import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import RecruiterJobs from "./pages/RecruiterJobs";
import MyApplications from "./pages/MyApplications";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} /> {/* 🔥 REQUIRED */}
        <Route path="/recruiter/jobs" element={<RecruiterJobs />} />
        <Route path="/applications" element={<MyApplications />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
