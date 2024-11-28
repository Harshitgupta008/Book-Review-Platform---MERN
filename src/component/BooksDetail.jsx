import defaultImage from "../images/defaultimage.jpg"
import backicon from "../images/backicon.png"
import { UseAuth } from "../AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GiveReview from "./GiveReview";
const BooksDetail = () => {
    const { bookid } = useParams();
    const { allbooksdata } = UseAuth();
    const Navigate = useNavigate();

    const [reviewModle, setReviewModle] = useState(false);
    const [loading, setLoading] = useState(false);
    const [booksdata, setBookData] = useState(null);
    const BackNav = () => {
        return Navigate(-1);
    }

    useEffect(() => {
        if (allbooksdata && allbooksdata.length > 0) {
            const newdetail = allbooksdata.find(data => data._id === bookid);
            setBookData(newdetail || null);
        }
        if (booksdata) {
            // console.log("booksdata found:", booksdata);
            setLoading(true)
        } else {
            console.log("booksdata not found or waiting for data.");
        }
    }, [allbooksdata, bookid, booksdata]);

    if (!loading) {
        return <div className="fixed top-0 right-0  left-0 sm:left-40 bottom-0 h-screen w-full flex justify-center items-center">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
    }
    return (
        <>
            <div className="relative">
                <img onClick={BackNav} className="h-12 w-12 absolute top-3 left-3 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 rounded-full" src={backicon} alt="back" />
            </div>
            <div className="w-full  h-fit flex justify-evenly flex-wrap mt-20 ">
                <div className=" h-full w-full  md:w-1/3 p-3 flex justify-center items-center flex-col ">
                    <div className="h-80 w-72 ">
                        <img className="h-80 w-64 " src={!booksdata.image.url ? defaultImage : booksdata.image.url} alt="bookimage" />
                    </div>

                    <button onClick={() => window.alert("Not available")} className="bg-gray-600 text-white px-16 py-2 rounded-full mt-5">Book Now</button>
                    <button onClick={()=>setReviewModle(true)} className="bg-gray-600 text-white px-16 py-2 rounded-full mt-5">Give Review</button>
                    <h1 className="text-center text-gray-600 mt-2 font-semibold text-sm">
                        Rate this book
                    </h1>
                </div>

                <div className="w-full md:w-2/3 p-4 rounded-lg flex flex-col gap-6 ">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">{booksdata.title}</h1>
                    <h2 className="text-md text-gray-600 mt-2"> <span className="text-black text-2xl sm:text-3xl"> ~ </span>

                        <span className="text-gray-500 text-2xl sm:text-3xl"> {booksdata.author}</span>
                    </h2>

                    <p className="text-sm text-black mt-4 leading-relaxed">
                        {booksdata.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap  gap-5">
                        <h2 className="text-md text-gray-500 ">Genres : <span className="text-black">{booksdata.category}</span> </h2>
                        <h2 className="text-md text-gray-500 ">ISBN : <span className="text-black">{booksdata.isbn}</span> </h2>
                        <h2 className="text-md text-gray-500 ">Price : <span className="text-black">{booksdata.price}$</span> </h2>
                        <h2 className="text-md text-gray-500">Quantity : <span className="text-black">{booksdata.quantity}</span></h2>
                    </div>
                </div>
            </div>
            {
                reviewModle && <GiveReview setReviewModle={setReviewModle}/>
            }
            
        </>
    )
}
export default BooksDetail;