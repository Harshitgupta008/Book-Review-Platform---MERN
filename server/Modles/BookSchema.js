import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    genere: {
        type: String,
        require: true,
    },
    summary: {
        type: String,
        require: true,
    },
    isbn: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    imageurl: {
        type: String,
        require: true
    }

}, { timestamps: true });

const Books = mongoose.model("All-Books", BookSchema);

export default Books;