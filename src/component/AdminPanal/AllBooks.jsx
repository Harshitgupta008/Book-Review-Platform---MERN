import defaulimagebook from "../../images/defaultimage.jpg"
import { UseAuth } from "../../AuthProvider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllBooks = () => {
    const { allbooksdata } = UseAuth();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState("");
    const [AllBooks, setAllBooks] = useState([]);

    const SubmitSearch = () => {
        if (item && allbooksdata) {
            const newdata = allbooksdata.filter((book) => {
                return book._id === item || book.title === item;
            })
            return setAllBooks(newdata);

        } else {
            return setAllBooks(allbooksdata);
        }
    }

    useEffect(() => {
        if (allbooksdata) {
            setAllBooks(allbooksdata);
            setLoading(true);
        } else {
            console.log("books not found wait...")
        }
    }, [allbooksdata])
    if (!loading) {
        return <div className="fixed top-0 right-0  left-0 sm:left-40 bottom-0 h-screen w-full flex justify-center items-center">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    }
    return (
        <>
            <div className="h-fit w-full flex justify-center items-center flex-wrap gap-7">
                <div className="flex flex-col w-full items-center pt-4 mt-6 gap-4 ">
                    <div className="max-w-[480px] w-full px-4">
                        <div className="relative">
                            <input type="text" name="searchItem" className="w-full border h-12 shadow p-4 rounded-full" placeholder="search books by id or title" value={item} onChange={(e) => setItem(e.target.value)} />
                            <button onClick={SubmitSearch}>
                                <svg className="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {
                    AllBooks.length > 0 ? (
                        AllBooks.map((book, id) => {
                            return (
                                <div key={id} className="h-fit relative py-4 hover:scale-105 transition-all ease-in-out duration-300 w-64 shadow-lg hover:shadow-2xl cursor-pointer bg-white rounded-md  flex flex-col gap-5">
                                    <div className="h-64 w-full flex justify-center items-center">
                                        <img className="h-64 w-56 rounded-lg" src={!book.image.url ? defaulimagebook : book.image.url} alt="books" />
                                    </div>
                                    <h1 className="text-center text-gray-600 font-bold text-lg">{book.title}</h1>
                                    <div className="flex justify-between px-2 items-center">
                                        <p className="text-black">Price : <span className="text-gray-600">{book.price}$</span></p>
                                        <Link to={`/booksdetail/${book._id}`} className="h-fit w-fit bg-slate-800 hover:bg-gray-950 text-white px-4 py-2 rounded-md">See Details</Link>
                                    </div>
                                    <div className="absolute top-5 bg-white  right-0 gap-3 flex flex-col">
                                        <button className="h-fit w-fit p-1 text-green-600 hover:text-gray-950   ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                            </svg>

                                        </button>
                                        <button className="h-fit w-fit p-1 text-red-500 hover:text-gray-950  ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    ) :
                        (
                            <p className="text-gray-400">Books not Available</p>
                        )
                }


            </div>
        </>
    )
}
export default AllBooks;