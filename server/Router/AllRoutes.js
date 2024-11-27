import express from "express";
import { HealthCheck, UserRegister, UserLogin, GetUser, GetAllUser } from "../Controller/user.controller.js";
import Authentation from "../Middleware/Authentation.js";
import { SubmitBooks } from "../Controller/books.controller.js"
import upload from "../Utils/ImageUpload.utils.js";
const router = express.Router();

router.route("/health-check").get(HealthCheck);
router.route("/user-register").post(UserRegister);
router.route("/user-login").post(UserLogin);
router.route("/getuserdata").get(Authentation, GetUser);
router.route("/allusers/:id").get( GetAllUser);

// books route
router.route("/submit-books").post(upload.single('image'),SubmitBooks);

export default router;