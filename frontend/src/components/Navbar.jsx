import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Job<span className="text-primary">Hunt</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/applications">My Applications</Link>
          <Link to="/login">Login</Link>
          <Link
            to="/signup"
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Signup
          </Link>
          <Link to="/recruiter/jobs">Dashboard</Link>
          <Link
            to="/recruiter/post-job"
            className="text-gray-700 hover:text-primary"
          >
            Post Job
          </Link>

          <Link
            to="/recruiter/jobs"
            className="text-gray-700 hover:text-primary"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
