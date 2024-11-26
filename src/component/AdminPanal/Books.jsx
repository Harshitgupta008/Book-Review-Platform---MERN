import { Link, Outlet, useLocation } from "react-router-dom";

const Books = () => {
    const location = useLocation();
    return (
        <>
            <div className="flex flex-wrap gap-5 items-center w-full justify-center mb-8">
                <Link to={"/account/books/allbooks"} className={` ${location.pathname === "/account/books/allbooks" ? "bg-gray-800 text-white" : "bg-white text-black"}  px-5 py-2 rounded-2xl`}>All Books</Link>
                <Link to={"/account/books/addbooks"} className={` ${location.pathname === "/account/books/addbooks" ? "bg-gray-800 text-white" : "bg-white text-black"}  px-5 py-2 rounded-2xl`}>Add Books</Link>
            </div>
            <Outlet/>
        </>
    )
}
export default Books;