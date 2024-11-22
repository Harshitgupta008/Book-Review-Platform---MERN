import Books from "../Modles/BookSchema.js";

const SubmitBooks = async (req, res) => {
    const { title, author, genere, summary, isbn, price, quantity, imageurl } = req.body;
    if (!title || !author || !genere || !summary || !isbn || !price || !quantity || !imageurl) return res.status(400).send("All field mendetory");

    try {
        const response = await new Books({
            title: req.body.title,
            author: req.body.author,
            genere: req.body.genere,
            summary: req.body.summary,
            isbn: req.body.isbn,
            price: req.body.price,
            quantity: req.body.quantity,
            imageurl: req.body.imageurl
        })
        await response.save();
        return res.status(200).send("Submited successfully");
    } catch (error) {
        console.log("found error in submit books in controller :: " + error);
    }
}

export default { SubmitBooks };