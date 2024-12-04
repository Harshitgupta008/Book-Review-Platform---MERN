import Books from "../Modles/BookSchema.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


dotenv.config();

cloudinary.config({
    cloud_name: process.env.cloudinary_cloud_name,
    api_key: process.env.cloudinary_api_key,
    api_secret: process.env.cloudinary_api_secret
});


const SubmitBooks = async (req, res) => {
    const { title, author, category, summary, isbn, price, quantity } = req.body;
    if (!title || !author || !category || !summary || !isbn || !price || !quantity) return res.status(400).send("All field mendetory");
    if (!req.file.path) return res.send("Image are mendatory");

    try {

        const uploadResult = await cloudinary.uploader.upload(req.file.path);

        // console.log(uploadResult)
        const response = await new Books({
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            summary: req.body.summary,
            isbn: req.body.isbn,
            price: req.body.price,
            quantity: req.body.quantity,
            image: { url: uploadResult.secure_url, cloudId: uploadResult.public_id }
        })
        await response.save();
        fs.unlinkSync(req.file.path);
        return res.status(200).send("Submited successfully");
    } catch (error) {
        console.log("found error in submit books in controller :: " + error);
        return res.status(400).send("errr found " + error);
    }
}

const AllBooks = async (req, res) => {
    try {

        const data = await Books.find({});
        return res.status(200).send(data);

    } catch (error) {
        console.log("found error in allbooks in controller :: " + error);
        return res.status(400).send("errr found " + error);
    }
}

const DeleteBooks = async (req, res) => {

    const _id = req.params.id;
    const cloudId = req.params.cloudId;

    try {
        const response = await Books.findOne({ _id });

        if (response){
            await cloudinary.uploader.destroy(cloudId).then(result => console.log(result));
            await User.findByIdAndDelete(_id);
            return res.status(200).send("books deleted");
        }

    } catch (error) {
        console.log("found error in DeleteBooks in controller :: " + error);
        return res.status(400).send("errr found " + error);

    }
}

export { SubmitBooks, AllBooks, DeleteBooks };