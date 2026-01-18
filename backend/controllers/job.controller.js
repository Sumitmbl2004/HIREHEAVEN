import mongoose from "mongoose";
import { Job } from "../models/job.model.js";
import Company from "../models/company.model.js";

/* ================= POST JOB ================= */
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      experienceLevel,
      location,
      jobType,
      position,
      companyId,
    } = req.body;

    // ✅ strict validation
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !experienceLevel ||
      !location ||
      !jobType ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid company id",
      });
    }

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements: Array.isArray(requirements)
        ? requirements
        : requirements.split(","),
      salary: Number(salary),
      experienceLevel: Number(experienceLevel),
      location,
      jobType,
      position: Number(position),
      company: companyId,
      created_by: req.id,
    });

    return res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job,
    });
  } catch (error) {
    console.error("POST JOB ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

/* ================= GET ALL JOBS ================= */
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("company", "name")
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, jobs });
  } catch {
    return res.status(500).json({ success: false });
  }
};

/* ================= GET ADMIN JOBS ================= */
export const getAdminJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ userId: req.id });

    res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin jobs",
    });
  }
};


/* ================= GET JOB BY ID ================= */
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("company", "name");
    if (!job) return res.status(404).json({ success: false });
    return res.status(200).json({ success: true, job });
  } catch {
    return res.status(500).json({ success: false });
  }
};
