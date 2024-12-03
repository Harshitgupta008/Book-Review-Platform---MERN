import express from "express";
import { HealthCheck, UserRegister, UserLogin, GetUser, GetAllUser, GetUsersReview } from "../Controller/user.controller.js";
import Authentation from "../Middleware/Authentation.js";
import { SubmitBooks, AllBooks } from "../Controller/books.controller.js"
import { SubmitReview, AllBooksReview } from "../Controller/review.controller.js";
import upload from "../Utils/ImageUpload.utils.js";
const router = express.Router();

router.route("/health-check").get(HealthCheck);
router.route("/user-register").post(UserRegister);
router.route("/user-login").post(UserLogin);
router.route("/getuserdata").get(Authentation, GetUser);
router.route("/allusers/:id").get(GetAllUser);
router.route("/users-review").get(Authentation, GetUsersReview);

// books route
router.route("/submit-books").post(upload.single('image'), SubmitBooks);
router.route("/all-books").get(AllBooks);

// Review route
router.route("/submit-review/:booksid").post(SubmitReview);
router.route("/books-review/:booksid").get(AllBooksReview);

export default router;