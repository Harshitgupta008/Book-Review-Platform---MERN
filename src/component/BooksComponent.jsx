import defaulimagebook from "../images/defaultimage.jpg"
import { UseAuth } from "../AuthProvider";
import { useEffect, useState } from "react";
const BooksComponent = () => {
    const { allbooksdata } = UseAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (allbooksdata) {
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
                {
                    allbooksdata.length > 0 ? (
                        allbooksdata.map((book, id) => {
                            return (
                                <div key={id} className="h-fit py-4 hover:scale-105 transition-all ease-in-out duration-300 w-64 shadow-lg hover:shadow-2xl cursor-pointer bg-white rounded-md  flex flex-col gap-5">
                                    <div className="h-64 w-full flex justify-center items-center">
                                        <img className="h-64 w-56" src={!book.image.url ? defaulimagebook : book.image.url} alt="books" />
                                    </div>
                                    <h1 className="text-center text-gray-600 font-bold text-lg">{book.title}</h1>
                                    <div className="flex justify-between px-2 items-center">
                                        <p className="text-black">Price : <span className="text-gray-600">{book.price}$</span></p>
                                        <button className="h-fit w-fit bg-slate-800 hover:bg-gray-950 text-white px-4 py-2 rounded-md">See Details</button>
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