import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    booksId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
}, { timestamps: true });

const BookReview = mongoose.model("BooksReview",BookSchema);

export default BookReview;