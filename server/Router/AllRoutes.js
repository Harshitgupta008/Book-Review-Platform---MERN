import express from "express";
import { HealthCheck } from "../Controller/user.controller.js";
const router = express.Router();

router.route("/health-check").get(HealthCheck);

export default router;