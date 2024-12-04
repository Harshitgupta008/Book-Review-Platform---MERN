import BookReview from "../Modles/ReviewSchema.js";


const SubmitReview = async (req, res) => {

    const { name, message, email } = req.body;
    const booksId = req.params.booksid;

    if (!name || !message || !email || !booksId) return res.status(401).send("All field are mendetory");

    try {
        const response = await new BookReview({
            booksId,
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        if (response) {
            await response.save();
            res.status(200).send("Submited Review");
        }
    } catch (error) {
        console.log("Error found in submitereview controller :: " + error);
        return res.status(400).send("error found :: " + error);
    }
}

const AllBooksReview = async (req, res) => {
    const booksId = req.params.booksid;

    if (!booksId) return res.status(401).send("Books id not find");

    try {
        const AllBooks = await BookReview.find({ booksId })

        return res.status(200).send(AllBooks);


    } catch (error) {
        console.log("Error found in AllBooksReview reviewcontroller :: " + error);
        return res.status(400).send("error found :: " + error);
    }
}

const DeleteReview = async (req, res) => {

    const _id = req.params.reviewid;

    try {

        const response = await BookReview.findByIdAndDelete({ _id });

        if (response) {
            return res.status(200).send("Review deleted successfull");
        }

    } catch (error) {
        console.log("Error found in DeleteReview reviewcontroller :: " + error);
        return res.status(400).send("error found :: " + error);
    }
}

export { SubmitReview, AllBooksReview, DeleteReview };