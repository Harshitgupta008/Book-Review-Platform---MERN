import express from "express";
import { HealthCheck, UserRegister, UserLogin } from "../Controller/user.controller.js";
const router = express.Router();

router.route("/health-check").get(HealthCheck);
router.route("/user-register").post(UserRegister);
router.route("/user-login").post(UserLogin);

export default router;