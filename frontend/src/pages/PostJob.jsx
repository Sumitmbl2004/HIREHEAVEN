import { useState } from "react";
import axios from "axios";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    experienceLevel: "",
    location: "",
    jobType: "Full-time",
    position: "",
    companyId: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await axios.post(
        "http://localhost:8000/api/v1/job/post",
        {
          ...formData,
          requirements: formData.requirements.split(","),
        },
        { withCredentials: true }
      );

      setSuccess("Job posted successfully 🎉");
      setFormData({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        experienceLevel: "",
        location: "",
        jobType: "Full-time",
        position: "",
        companyId: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Post a New Job</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium">Job Title *</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location *</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block text-sm font-medium">Salary *</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium">
            Experience Level (years) *
          </label>
          <input
            type="number"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium">Job Type *</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="input"
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Positions */}
        <div>
          <label className="block text-sm font-medium">Open Positions *</label>
          <input
            type="number"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* Company ID */}
        <div className="col-span-2">
          <label className="block text-sm font-medium">Company ID *</label>
          <input
            name="companyId"
            value={formData.companyId}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        {/* Requirements */}
        <div className="col-span-2">
          <label className="block text-sm font-medium">
            Requirements (comma separated) *
          </label>
          <input
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            className="input"
            placeholder="React, Node.js, MongoDB"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block text-sm font-medium">Job Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="input"
          />
        </div>

        <button
          disabled={loading}
          className="col-span-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
        >
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

export default PostJob;
