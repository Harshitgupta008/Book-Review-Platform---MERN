import express from "express";
import { HealthCheck, UserRegister, UserLogin, GetUser } from "../Controller/user.controller.js";
import Authentation from "../Middleware/Authentation.js";
import { SubmitBooks } from "../Controller/books.controller.js"

const router = express.Router();

router.route("/health-check").get(HealthCheck);
router.route("/user-register").post(UserRegister);
router.route("/user-login").post(UserLogin);
router.route("/getuserdata").get(Authentation, GetUser);
// books route
router.route("/submit-books").post(SubmitBooks);

export default router;