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
        if (AllBooks.length > 0) { 
            return res.status(200).send(AllBooks);
        }else{
            return res.status(201).send("Riview list are empty")
        }

    } catch (error) {
        console.log("Error found in AllBooksReview reviewcontroller :: " + error);
        return res.status(400).send("error found :: " + error);
    }
}

export { SubmitReview, AllBooksReview };