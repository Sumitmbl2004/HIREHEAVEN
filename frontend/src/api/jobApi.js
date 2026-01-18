import api from "./axios";

// Get all jobs
export const getAllJobs = () => api.get("/jobs");

// Get job by ID
export const getJobById = (id) => api.get(`/jobs/${id}`);

// Apply job
export const applyJob = (id) => api.post(`/applications/apply/${id}`);
