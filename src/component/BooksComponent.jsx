import defaulimagebook from "../images/defaultimage.jpg"
import { UseAuth } from "../AuthProvider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BooksComponent = () => {
    const { allbooksdata, isLoggedin } = UseAuth();
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState("");
    const [booksData, setBooksData] = useState([]);

    const SubmitSearch = (e) => {
        e.preventDefault();
        if (item && allbooksdata) {
            const newdata = allbooksdata.filter((book) => {
                return book._id === item || book.title === item;
            })

            return setBooksData(newdata);
        }else{
            return setBooksData(allbooksdata);
        }
    }

    useEffect(() => {
        if (allbooksdata) {
            setLoading(true);
            setBooksData(allbooksdata);
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
            <div className="flex flex-col w-full items-center pt-4 mt-6 gap-4 ">
                <p className="text-4xl md:text-5xl font-extrabold text-gray-600">Search Book</p>
                <form className="max-w-[480px] w-full px-4">
                    <div className="relative">
                        <input type="text" name="searchItem" className="w-full border h-12 shadow p-4 rounded-full" placeholder="search" value={item} onChange={(e) => setItem(e.target.value)} />
                        <button onClick={SubmitSearch}>
                            <svg className="text-gray-400 h-5 w-5 absolute top-3.5 right-3 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col w-full  justify-start px-3 mt-10  gap-4 ">
                {item && <p className="text-2sm md:text-3xl font-extrabold text-black">Search Results for : <span className="text-gray-600">{item}</span></p>}

            </div>

            <div className="h-fit w-full flex justify-center items-center flex-wrap gap-7">

                {
                    allbooksdata.length > 0 ? (
                        booksData.map((book, id) => {
                            return (
                                <div key={id} className="h-fit py-4 hover:scale-105 transition-all ease-in-out duration-300 w-64 shadow-lg hover:shadow-2xl cursor-pointer bg-white rounded-md  flex flex-col gap-5">
                                    <div className="h-64 w-full flex justify-center items-center">
                                        <img className="h-64 w-56  rounded-lg" src={!book.image.url ? defaulimagebook : book.image.url} alt="books" />
                                    </div>
                                    <h1 className="text-center text-gray-600 font-bold text-lg">{book.title}</h1>
                                    <div className="flex justify-between px-2 items-center">
                                        <p className="text-black">Price : <span className="text-gray-600">{book.price}$</span></p>
                                        {
                                            !isLoggedin ? ""
                                                :
                                                <Link to={`/booksdetail/${book._id}`} className="h-fit w-fit bg-slate-800 hover:bg-gray-950 text-white px-4 py-2 rounded-md">See Details</Link>
                                        }


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
export default BooksComponent;