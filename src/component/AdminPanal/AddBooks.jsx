import { useState } from "react";

const AddBooks = () => {
    const [books, setbooks] = useState({
        title: "", author: "", category: "", summary: "", isbn: "", price: "", quantity: "",
    })
    const [addimage, setAddimage] = useState("");

    const HandleInput = (e) => {
        const { value, name } = e.target;
        setbooks({ ...books, [name]: value });
    }
    const SubmitBook = async (e) => {
        e.preventDefault();
        const { title, author, category, summary, isbn, price, quantity } = books;
        if (!title || !author || !category || !summary || !isbn || !price || !quantity || !addimage) return window.alert("All field are mendetory")

        try {

            const formdata = new FormData();
            formdata.append("title", title);
            formdata.append("author", author);
            formdata.append("category", category);
            formdata.append("summary", summary);
            formdata.append("isbn", isbn);
            formdata.append("price", price);
            formdata.append("quantity", quantity);
            formdata.append("image", addimage);

            const response = await fetch("/api/submit-books", {
                method: "POST",
                body: formdata,
            });
            if (response.ok) {
                setbooks({
                    title: "", author: "", category: "", summary: "", isbn: "", price: "", quantity: "",
                })
                setAddimage("")
               return window.alert("submitted");
            }else if(response.status === 400){
                return window.alert("fonded error ::&#^$%/")
            }

        } catch (error) {
            return console.log("found error " + error)
        }
    }
    return (
        <>
            <form className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Add Book</h1>
                <div className="grid gap-4 md:grid-cols-2">

                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title*
                        </label>
                        <input type="text" id="title" name="title" value={books.title} onChange={HandleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" placeholder="Enter book title"
                        />
                    </div>

                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                            Author*
                        </label>
                        <input type="text" id="author" name="author" value={books.author} onChange={HandleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" placeholder="Enter author name"
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category*
                        </label>
                        <input type="text" id="category" name="category" value={books.category} onChange={HandleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" placeholder="Enter category"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                        Short Summary*
                    </label>
                    <textarea id="summary" name="summary" value={books.summary} onChange={HandleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" placeholder="Write a short summary" rows="4"
                    ></textarea>
                </div>

                <div className="grid gap-4 mt-4 md:grid-cols-3">

                    <div>
                        <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
                            ISBN (10 or 13 digits)*
                        </label>
                        <input type="number" id="isbn" name="isbn" value={books.isbn} onChange={HandleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" placeholder="Enter ISBN"
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price*
                        </label>
                        <input type="number" id="price" name="price" value={books.price} onChange={HandleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" placeholder="Enter price"
                        />
                    </div>

                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Quantity in Stock*
                        </label>
                        <input type="number" id="quantity" name="quantity" value={books.quantity} onChange={HandleInput} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent" placeholder="Enter quantity"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    {
                        !addimage || addimage === "" ? ""
                            :
                            <img src={!addimage ? "" : URL.createObjectURL(addimage)} alt="images" className="h-44 w-40" />
                    }
                    <input type="file" id="image" name="image" accept=".jpg, .jpeg, .png, .svg" onChange={(e) => setAddimage(e.target.files[0])} className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    />
                </div>

                <div className="mt-6">
                    <button onClick={SubmitBook} className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                        Add Book
                    </button>
                </div>
            </form>
        </>
    )
}
export default AddBooks;