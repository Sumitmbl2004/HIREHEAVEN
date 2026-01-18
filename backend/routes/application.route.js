import express from "express";
import {
  applyJob,
  getAppliedJobs,
  getApplicants,
  updateStatus,
} from "../controllers/application.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

/* ================= STUDENT ================= */

// apply job
router.post("/apply/:jobId", isAuthenticated, applyJob);

// get applied jobs
router.get("/get", isAuthenticated, getAppliedJobs);

/* ================= RECRUITER ================= */

// get applicants
router.get("/applicants/:jobId", isAuthenticated, getApplicants);

// update application status
router.put("/status/:id", isAuthenticated, updateStatus);

export default router;
